import { createHash } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import { access, copyFile, mkdir, mkdtemp, readFile, rename, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const version = '0.15.1'
const cache = path.join(root, '.cache', 'typst', version)
const releases = {
  'linux-x64': ['x86_64-unknown-linux-musl', 'a6d077d0a95eed5a2eba715b2dae06be954f624ccbf85758a03f389ded33118c'],
  'linux-arm64': ['aarch64-unknown-linux-musl', '5aa8d74a3d906e60ea12a66ac2f37f8eef1b14cbad7182a745e393a10c23dcee'],
  'darwin-x64': ['x86_64-apple-darwin', '7f9fdd9584866245de9a79e0add8f9236fae6f40a8a45e2c4771ccc14db4e0fa'],
  'darwin-arm64': ['aarch64-apple-darwin', '48f62ed034aa3a7978309579ac6ca00045e2ef0da73114e8af27cfd8e74dc05a'],
}

function run(command, args) {
  const result = spawnSync(command, args, { cwd: root, stdio: 'inherit' })
  if (result.error) throw result.error
  if (result.status !== 0) throw new Error(`${command} failed (exit ${result.status})`)
}

async function compiler() {
  // Use an explicit compiler or a system installation if available.
  if (process.env.TYPST_BIN) return process.env.TYPST_BIN
  const system = spawnSync('typst', ['--version'], { encoding: 'utf8' })
  if (system.status === 0) return 'typst'

  const release = releases[`${process.platform}-${process.arch}`]
  if (!release) throw new Error('Install the Typst CLI and put it on PATH, or set TYPST_BIN to its executable.')
  const [target, checksum] = release
  const directory = `typst-${target}`
  const binary = path.join(cache, directory, 'typst')
  try {
    await access(binary)
    return binary
  } catch {
    // First build downloads the official compiler into the ignored project cache.
  }

  await mkdir(cache, { recursive: true })
  const staging = await mkdtemp(path.join(cache, '.download-'))
  try {
    console.log(`Downloading Typst ${version} from its official GitHub release…`)
    const response = await fetch(`https://github.com/typst/typst/releases/download/v${version}/${directory}.tar.xz`)
    if (!response.ok) throw new Error(`Typst download failed: HTTP ${response.status}`)
    const archive = Buffer.from(await response.arrayBuffer())
    if (createHash('sha256').update(archive).digest('hex') !== checksum) {
      throw new Error('Typst download checksum mismatch')
    }
    const archivePath = path.join(staging, 'typst.tar.xz')
    await writeFile(archivePath, archive)
    run('tar', ['-xJf', archivePath, '-C', staging])
    await rename(path.join(staging, directory), path.join(cache, directory))
    return binary
  } finally {
    await rm(staging, { recursive: true, force: true })
  }
}

async function build() {
  // Catch invalid content before compiling or replacing either download.
  const content = JSON.parse(await readFile(path.join(root, 'src/content.json'), 'utf8'))
  for (const section of ['experience', 'projects', 'universityProjects', 'education', 'skills']) {
    if (!Array.isArray(content[section])) throw new Error(`content.${section} must be an array`)
  }
  const typst = await compiler()
  const staging = await mkdtemp(path.join(tmpdir(), 'portfolio-cv-'))
  const output = path.join(root, 'src/generated/cv')
  const packageCache = path.join(root, '.cache/typst/packages')
  await mkdir(packageCache, { recursive: true })
  try {
    for (const [mode, filename] of [['short', 'alexandre-teixeira-cv.pdf'], ['extended', 'alexandre-teixeira-extended-cv.pdf']]) {
      run(typst, [
        'compile', '--pdf-standard', '1.4', '--root', root, '--package-cache-path', packageCache,
        '--input', `version=${mode}`, 'cv/resume.typ', path.join(staging, filename),
      ])
    }
    await mkdir(output, { recursive: true })
    for (const filename of ['alexandre-teixeira-cv.pdf', 'alexandre-teixeira-extended-cv.pdf']) {
      await copyFile(path.join(staging, filename), path.join(output, filename))
    }
    console.log('Generated CV and Extended CV in src/generated/cv/.')
  } finally {
    await rm(staging, { recursive: true, force: true })
  }
}

build().catch((error) => {
  console.error(`CV build failed: ${error.message}`)
  process.exitCode = 1
})
