// All portfolio content lives here. Edit this file to update the site -
// no need to touch component code for text changes.

export const profile = {
  name: 'Alexandre Teixeira',
  role: 'Software Engineer',
  focus: 'Cybersecurity',
  location: 'Porto, Portugal',
  email: 'alex.dinis.06@gmail.com',
  github: 'https://github.com/AlexDTT',
  githubUsername: 'AlexDTT',
  linkedin: 'https://linkedin.com/in/alexandre-teixeira-186093278',
  intro:
    "I'm a Computer Engineering student at FEUP who spent three years building the backend of real products before turning toward security. That order matters to me - I want to know how systems are built before I try to find where they break.",
  bio: "Most of my work has been full-stack: authentication, permission systems, role-based access control, REST APIs. Lately that's included a computer vision and AI prototype at INESC TEC. Working on the parts of a product that decide who can see and touch what taught me to think about trust boundaries from the first line of code, which is what's pulling me toward application security now - through CTFs, labs, and coursework.",
}

// Short, casual "what I'm up to" bullets for the homepage.
// Edit freely - this is meant to read like a quick personal update, not a CV line.
export const currently = [
  'Studying Computer Engineering at FEUP, focused on cybersecurity',
  'Building NovaSupplier, a B2B sourcing platform, as a full-stack developer',
  'Working through CTFs and labs to get better at application security',
]

// Home page Q&A-style sections (what / where / why).
export const qa = [
  {
    label: 'What',
    body: "I build full-stack products - authentication, permission systems, REST APIs - and I'm moving toward the security side of that same work.",
  },
  {
    label: 'Where',
    body: "Based in Porto, Portugal. Studying Informatics and Computing Engineering at FEUP, graduating 2027.",
  },
  {
    label: 'Why',
    body: "I like knowing how something is built well enough to see where it could break. Three years on the backend of real products taught me to think about trust boundaries from the first line of code - that's what's pulling me toward application security now.",
  },
]

export const quote = {
  line: 'Build it, then break it.',
  body: "I think the best way to understand security is to have built the thing you're trying to secure. So I keep doing both - shipping full-stack products, and picking them apart in CTFs and labs.",
}

export const projects = [
  {
    id: 'ai-scout',
    title: 'The AI Scout',
    period: 'Jul 2026 - Aug 2026',
    org: 'INESC TEC / FEUP research project',
    summary:
      'A full-stack prototype exploring how AI can support football analysts and scouts, rather than replace their judgment.',
    detail:
      "Built during a summer research internship, in a pair with one other developer under academic and industry supervision. My part covered the backend, an AI-assisted chatbot and automated report generator, data visualization (player comparisons, performance dashboards), and integrating a computer vision pipeline for video-based player and ball tracking. I also built a manual and semi-automatic event-tagging system for match analysis, driven by positions the vision pipeline recovered from footage. The brief throughout was to design around analysts' real, often-invisible workflows - not to lead with the AI.",
    stack: ['Computer Vision', 'AI Chatbot', 'Full-stack', 'Data Visualization'],
    link: null,
  },
  {
    id: 'novasupplier',
    title: 'NovaSupplier',
    period: 'Sep 2025 - Mar 2026',
    org: 'B2B sourcing platform',
    summary:
      'A full-stack platform connecting global brands with verified European suppliers, replacing trade fairs and manual coordination with a digital-first workflow.',
    detail:
      'The platform covers the full supply chain loop in one place - supplier discovery, quote management, orders, invoices, shipping, and messaging. I contributed across the stack, working with a Next.js frontend and a Nest.js API backed by PostgreSQL.',
    stack: ['Next.js', 'Nest.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    link: 'https://novasupplier.com',
  },
  {
    id: 'cheetah',
    title: 'Cheetah',
    period: 'Sep 2023 - May 2024',
    org: 'SaaS scheduling platform',
    summary:
      'An enterprise client-scheduling platform with intelligent calendar management and real-time synchronization.',
    detail:
      "Built during my internship at Fullscreen, alongside other work on the company's CMS and client projects. Handled the scheduling logic and calendar sync on top of a Symfony backend.",
    stack: ['Symfony', 'PHP', 'MySQL', 'JavaScript', 'Twig'],
    link: 'https://cheetah.qa.fullscreen.pt/',
  },
  {
    id: 'boavista',
    title: 'Boavista Kickboxing',
    period: 'May 2023 - Jun 2023',
    org: 'Gym management platform',
    summary:
      'A gym management system covering member registration, class scheduling, attendance, and a merchandise store.',
    detail:
      'One of my first independent builds: member registration, class scheduling, attendance tracking, weight and performance monitoring, and a small storefront for merchandise, built end to end.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    link: null,
  },
]
