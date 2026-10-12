#import "@preview/clickworthy-resume:1.0.1": *

// One content source and one layout, compiled as short and extended PDFs.
#let data = json("../src/content.json")
#let extended = sys.inputs.at("version", default: "short") == "extended"
#let selected(entries) = entries.filter(entry =>
  extended or entry.at("cv", default: (:)).at("includeInShort", default: false)
)
#let bullets(points) = if points.len() > 0 { list(..points) }
#let short-points(entry, fallback) = entry.at("cv", default: (:)).at("shortPoints", default: fallback)
#let linked-title(entry) = {
  let url = entry.at("repo", default: entry.at("link", default: none))
  if url != none { link(url, entry.title) } else { entry.title }
}

#set page(paper: "a4")
#show: resume.with(
  author: data.profile.name,
  contacts: (
    link("mailto:" + data.profile.email, data.profile.email),
    link(data.profile.github, data.profile.github.replace("https://", "")),
    link(data.profile.linkedin, data.profile.linkedin.replace("https://", "")),
  ),
  theme-color: rgb("#26428b"),
  font: "New Computer Modern",
  font-size: 11pt,
  lang: "en",
  margin: (top: 1cm, bottom: 1cm, left: 1cm, right: 1cm),
)

#set document(title: data.profile.name + if extended { " - Extended CV" } else { " - CV" })
#set par(leading: 0.5em)

= Education
#for entry in selected(data.education) {
  let degree = entry.degree.split(" | ")
  block(breakable: false, edu(
    institution: entry.institution,
    date: entry.period,
    location: entry.location,
    degrees: ((degree.first(), degree.slice(1).join(" | ")),),
    gpa: entry.at("highlight", default: "").replace("GPA: ", ""),
  ))
}

= Experience
#for entry in selected(data.experience) {
  block(breakable: false, exp(
    title: entry.role,
    organization: entry.org,
    date: entry.period,
    location: entry.location,
    details: bullets(if extended { entry.points } else { short-points(entry, entry.points) }),
  ))
}

= Projects
#for entry in selected(data.projects) {
  block(breakable: false, exp(
    title: if extended { linked-title(entry) } else { [#linked-title(entry) (#entry.org)] },
    organization: if extended { entry.org } else { "" },
    date: entry.period,
    details: [
      #if extended {
        par(entry.summary)
        par(entry.detail)
        par([#strong[Stack:] #entry.stack.join(", ").])
      } else {
        let points = short-points(entry, (entry.summary,))
        let stack = "Stack: " + entry.stack.join(", ") + "."
        if points.len() == 1 {
          bullets((points.first() + " " + stack,))
        } else {
          bullets(points + (stack,))
        }
      }
    ],
  ))
}

#let coursework = selected(data.universityProjects)
#if coursework.len() > 0 [
  = University Projects
  #for entry in coursework {
    block(breakable: false, exp(
      title: linked-title(entry),
      organization: entry.team + " · " + entry.course,
      date: entry.period,
      details: [
        #bullets(if extended { entry.points } else { short-points(entry, entry.points) })
        #if extended {
          for paragraph in entry.at("detail", default: ()) { par(paragraph) }
        }
        #if extended and entry.at("video", default: none) != none {
          par(link("https://www.youtube.com/watch?v=" + entry.video.id, "Watch walkthrough"))
        }
      ],
    ))
  }
]

= Skills
#block(breakable: false, skills(data.skills.map(group => (group.label, group.items))))
