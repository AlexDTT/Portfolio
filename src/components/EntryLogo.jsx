import './EntryLogo.css'

export default function EntryLogo({ src, alt }) {
  if (!src) return null

  return (
    <span className="entry-logo">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </span>
  )
}
