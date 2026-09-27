// All portfolio content lives here. Edit this file to update the site -
// no need to touch component code for text changes.

// Prefixes public/ asset paths with the Vite base so they work on GitHub
// Pages (served under /Portfolio/) as well as locally.
const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const profile = {
  name: 'Alexandre Teixeira',
  role: 'Software Engineer',
  focus: 'Cybersecurity',
  location: 'Porto, Portugal',
  email: 'alex.dinis.06@gmail.com',
  github: 'https://github.com/AlexDTT',
  linkedin: 'https://linkedin.com/in/alexandre-teixeira-186093278',
  intro:
    "I'm a Computer Engineering student at FEUP who spent three years building the backend of real products before turning toward security. That order matters to me - I want to know how systems are built before I try to find where they break.",
  bio: "Most of my work has been full-stack: authentication, permission systems, role-based access control, REST APIs. Lately that's included a computer vision and AI prototype at INESC TEC. Working on the parts of a product that decide who can see and touch what taught me to think about trust boundaries from the first line of code, which is what's pulling me toward application security now - through CTFs, labs, and coursework.",
}

// Short, casual "what I'm up to" bullets for the homepage.
// Edit freely - this is meant to read like a quick personal update, not a CV line.
export const currently = [
  'Studying Computer Engineering at FEUP, focused on cybersecurity',
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
      'One of my first projects, made with some other colleagues in highschool. The project included member registration, class scheduling, attendance tracking, weight and performance monitoring, and a small storefront for merchandise, built end to end.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    link: null,
  },
]

// CV page content. Categories follow the same shape as rgo.pt/cv?view=list:
// Experience / Projects / University Projects / Education.
export const experience = [
  {
    id: 'inesc',
    role: 'Summer Intern',
    org: 'INESC TEC',
    type: 'internship',
    period: 'Jul 2026 - Aug 2026',
    location: 'Porto, Portugal',
    points: [
      'Built a full-stack prototype for The AI Scout, spanning frontend, backend, and database layers.',
      "Developed an AI-assisted chatbot and automated report generator for analysts' workflows.",
      'Integrated a computer vision pipeline for video-based player and ball tracking, with a manual and semi-automatic event-tagging system built on top of it.',
    ],
  },
  {
    id: 'novasupplier-job',
    role: 'Full-stack Developer',
    org: 'NovaSupplier',
    type: 'full-time',
    period: 'Sep 2025 - Mar 2026',
    location: 'Remote',
    points: [
      'Contributed across a Next.js frontend and Nest.js API for a B2B sourcing platform.',
      'Worked on features spanning supplier discovery, quote management, orders, and messaging.',
    ],
  },
  {
    id: 'fullscreen',
    role: 'Full-stack Intern',
    org: 'Fullscreen',
    type: 'internship',
    period: 'Jul 2023 - May 2024',
    location: 'Serzedo, Vila Nova de Gaia',
    points: [
      'Built BackOffice and FrontOffice features for FirstPharma, a pharmacy management platform - permission systems, user management, and a role-based document repository in Symfony.',
      "Implemented two-factor authentication (TOTP, Google Authenticator, email) and product attribute management for StudioCMS, Fullscreen's proprietary CMS.",
      'Integrated a file repository module into the Livraria Lello web application, with custom UI and document-type-specific visuals.',
    ],
  },
]

// Shared coursework from the FEUP degree - same entries as rgo.pt/cv.
export const universityProjects = [
  {
    id: 'compiler-register-allocation',
    title: 'Compiler Register Allocation',
    logo: asset('/media/cv/compiler-register-allocation/registerallocationlogo.webp'),
    team: '3-person team',
    course: 'Algorithm Design',
    period: 'May 2026 - May 2026',
    repo: 'https://github.com/AlexDTT/CompilerRegisterAllocationProject',
    points: [
      'Built a global register allocator that merges live ranges into webs, constructs an interference graph, and colors it under a bounded register count',
      'Implemented baseline coloring, bounded spilling, live-range splitting, DSatur ordering, graph-class fast paths, and guarded branch-and-bound refinement',
      'Added a custom free-split recovery mode, marker-preserving output, DOT graph exports, deterministic integration tests, and presentation-ready visualizations',
    ],
    detail: [
      'This C++ compiler back-end tool takes variable live ranges, merges compatible ranges into webs, builds an interference graph, and allocates those webs to a limited set of physical registers.',
      'Beyond the supplied greedy baseline, our custom allocator combines graph-class shortcuts, DSatur ordering, and a bounded branch-and-bound pass for smaller graphs. When coloring cannot avoid memory, the tool supports explicit spilling and marker-preserving live-range splitting, including a free_split recovery strategy that evaluates candidate splits and keeps only measurable improvements.',
    ],
    galleries: [
      {
        heading: 'Interference graph examples',
        columns: 2,
        ratio: '4 / 3',
        images: [
          { src: asset('/media/cv/compiler-register-allocation/basic.webp'), alt: 'Basic colored interference graph with register reuse' },
          { src: asset('/media/cv/compiler-register-allocation/spilling.webp'), alt: 'Three-clique interference graph with one web spilled to memory' },
          { src: asset('/media/cv/compiler-register-allocation/splitting.webp'), alt: 'Interference graph before and after splitting a live range' },
          { src: asset('/media/cv/compiler-register-allocation/noninterference-chain.webp'), alt: 'Non-interference chain showing when registers can be reused' },
          { src: asset('/media/cv/compiler-register-allocation/web-fusion.webp'), alt: 'Interference graph showing transitive web fusion' },
        ],
      },
    ],
  },
  {
    id: 'arc-gym',
    title: 'ARC Gym',
    logo: asset('/media/cv/arc-gym/arclogo.webp'),
    team: '3-person team',
    course: 'Web Languages and Technologies',
    period: 'Mar 2026 - Jun 2026',
    repo: null,
    points: [
      'Co-built a framework-free gym management platform in strict PHP, SQLite, semantic HTML, layered CSS, and vanilla JavaScript/AJAX',
      'Implemented class enrollment and waitlists, trainer/member/admin workflows, personal training, equipment reservations, memberships, notifications, and analytics',
      'Added QR membership check-in, physical cards, a Bearer-authenticated JSON/XML REST API, migrations, audit logs, backups, session controls, and security hardening',
    ],
    detail: [
      'ARC Gym is a full gym-management platform built without application or CSS frameworks: strict PHP, SQLite through PDO, semantic HTML, layered CSS, and vanilla JavaScript/AJAX.',
      'Members can manage memberships, browse and join classes, enter waitlists, reserve equipment, book personal training, review sessions, receive notifications, and present a QR gym pass. Trainers manage availability, rosters, profiles, and analytics; administrators manage the full catalog, users, equipment, promotions, landing content, audit logs, backups, API clients, and check-ins.',
      'The security layer includes prepared statements, output escaping, CSRF tokens, password hashing, session rotation, role guards, upload validation, hashed API tokens, and rate limits. A public REST API supports JSON and XML, while a numbered SQL/PHP migration system keeps schema and seed data reproducible.',
    ],
    galleries: [
      {
        heading: 'Public and member experience',
        columns: 2,
        ratio: '1400 / 861',
        images: [
          { src: asset('/media/cv/arc-gym/landing.webp'), alt: 'ARC Gym public landing page' },
          { src: asset('/media/cv/arc-gym/login.webp'), alt: 'ARC Gym login and registration page' },
          { src: asset('/media/cv/arc-gym/dashboard.webp'), alt: 'ARC Gym member dashboard and weekly class schedule' },
          { src: asset('/media/cv/arc-gym/profile.webp'), alt: 'ARC Gym member profile and account controls' },
          { src: asset('/media/cv/arc-gym/public-trainer-page.webp'), alt: 'ARC Gym public trainer profile' },
          { src: asset('/media/cv/arc-gym/pass-page.webp'), alt: 'ARC Gym digital QR membership pass' },
        ],
      },
      {
        heading: 'Trainer and admin tools',
        columns: 2,
        ratio: '1400 / 861',
        images: [
          { src: asset('/media/cv/arc-gym/trainer-dashboard-1.webp'), alt: 'ARC Gym trainer schedule dashboard' },
          { src: asset('/media/cv/arc-gym/trainer-dashboard-2.webp'), alt: 'ARC Gym trainer analytics dashboard' },
          { src: asset('/media/cv/arc-gym/admin-dashboard.webp'), alt: 'ARC Gym landing-page administration interface' },
          { src: asset('/media/cv/arc-gym/admin-equipment.webp'), alt: 'ARC Gym equipment administration interface' },
          { src: asset('/media/cv/arc-gym/admin-plans.webp'), alt: 'ARC Gym membership plan administration interface' },
        ],
      },
    ],
  },
  {
    id: 'scientific-review-assignment',
    title: 'Scientific Review Assignment',
    logo: asset('/media/cv/scientific-review-assignment/scientificreviewlogo.webp'),
    team: '3-person team',
    course: 'Algorithm Design',
    period: 'Mar 2026 - May 2026',
    repo: 'https://github.com/AlexDTT/MaxflowProject',
    points: [
      'Modeled reviewer-to-paper assignment as a capacitated bipartite flow network with expertise, review-count, and reviewer-capacity constraints',
      'Implemented Ford-Fulkerson and Edmonds-Karp in C++, plus batch/interactive workflows, CSV parsing, assignment exports, and reviewer-absence risk analysis',
      'Documented graph construction, complexity, and algorithm tradeoffs with generated Doxygen and Graphviz visualizations',
    ],
    detail: [
      'This C++ tool turns scientific-paper review assignment into a maximum-flow problem. Submissions and reviewers form the two sides of a bipartite network; capacities encode minimum reviews per paper, maximum workload per reviewer, and primary/secondary expertise rules.',
      'Both Ford-Fulkerson and Edmonds-Karp are available so their behavior and complexity can be compared on the same datasets. The application supports an interactive terminal UI and deterministic batch mode, writes assignments to CSV, and can test how removing a reviewer affects coverage.',
    ],
    galleries: [
      {
        heading: 'Flow-network model',
        columns: 2,
        ratio: '6 / 5',
        images: [
          { src: asset('/media/cv/scientific-review-assignment/architecture.webp'), alt: 'Architecture of the scientific review assignment maximum-flow pipeline' },
          { src: asset('/media/cv/scientific-review-assignment/example-graph.webp'), alt: 'Example maximum-flow assignment from submissions to reviewers' },
        ],
      },
    ],
  },
  {
    id: 'clutch',
    title: 'Clutch',
    logo: asset('/media/cv/clutch/clutchlogo.webp'),
    team: '3-person team',
    course: 'Software Engineering',
    period: 'Feb 2026 - Jun 2026',
    repo: null,
    points: [
      'Co-built a campus peer-help app that matches nearby FEUP students by subject, coordinates live help sessions, and rewards helpers with a karma economy',
      'Shipped SOS requests, indoor campus maps, real-time offers and chat, QR session verification, reviews, badges, streaks, leaderboards, moderation, and offline-aware flows',
      'Worked across Expo/React Native, TypeScript, Convex, CI/CD, unit/integration tests, automated Android E2E recordings, release management, and project documentation',
    ],
    detail: [
      'Clutch connects FEUP students who are stuck with nearby peers who can help in person. A student chooses a course unit and broadcasts an SOS; available helpers can respond, meet on campus, verify the session by QR code, chat, and review one another afterward.',
      'We built the mobile app with Expo, React Native, TypeScript, and Convex. The product also includes a karma economy, badges and streaks, course/global leaderboards, user blocking, quiet hours, multiple FEUP buildings, capacity information, offline behavior, and a separate privacy-conscious admin analytics dashboard.',
    ],
    video: { id: 'JZyJXNlv0VE', title: 'Clutch walkthrough' },
    galleries: [
      {
        heading: 'App walkthrough',
        columns: 3,
        ratio: '9 / 20',
        images: [
          { src: asset('/media/cv/clutch/request-help.webp'), alt: 'Clutch searching for a nearby peer for a selected FEUP course unit' },
          { src: asset('/media/cv/clutch/session-chat.webp'), alt: 'Clutch live help session with elapsed time, QR verification, and chat' },
          { src: asset('/media/cv/clutch/leaderboard.webp'), alt: 'Clutch weekly course and individual karma leaderboard' },
        ],
      },
    ],
  },
  {
    id: 'ninjix',
    title: 'Ninjix',
    logo: asset('/media/cv/ninjix/ninjixlogo.webp'),
    team: '4-person team',
    course: 'LCOM',
    period: 'Feb 2026 - Jun 2026',
    repo: null,
    points: [
      'Co-built a pixel-art tower-defense game and small game engine in C for MINIX, driven by timer, keyboard, mouse, graphics, and serial-port interrupts',
      'Implemented a 60 Hz simulation/render loop with levels, waves, tower upgrades, enemy abilities, projectile pools, menus, profiling, and custom PNG-to-XPM tooling',
      'Added two-player UART multiplayer with attacker/defender roles, a binary synchronization protocol, handshakes, retransmission, and shared game-state events',
    ],
    detail: [
      'Ninjix was our final Computer Laboratory project: a complete tower-defense game written in C for MINIX 3, without a game framework. The codebase acts as a small event-driven engine layered over the course\u2019s hardware work.',
      'The game normalizes hardware interrupts into app events, runs gameplay at 60 Hz, renders through a back buffer, and manages towers, eight enemy types, projectiles, waves, upgrades, targeting modes, menus, overlays, and reusable sprite resources. We also built developer tooling for PNG-to-XPM conversion, Doxygen/Graphviz documentation, and section-level profiling with FlameGraph output.',
      'The multiplayer mode links two machines over COM1 at 115200 bps. One player attacks by spending elixir to spawn enemies; the other defends by placing and upgrading towers. A custom binary protocol handles discovery, role negotiation, gameplay events, pause synchronization, and restart decisions.',
    ],
    video: { id: 'v18kjteAinA', title: 'Ninjix walkthrough' },
  },
  {
    id: 'tanktussle',
    title: 'TankTussle',
    logo: asset('/media/cv/tanktussle/tanktusslelogo.webp'),
    team: '3-person team',
    course: 'Software Design and Testing',
    period: 'Sep 2025 - Jan 2026',
    repo: 'https://github.com/FEUP-LDTS-2025/project-t08-g05',
    points: [
      'Co-built a TankTrouble-inspired 2D local tank combat game in Java with Lanterna, including local 1v1 multiplayer and single-player AI',
      'Implemented bouncing projectile physics, ricochets, destructible and indestructible walls, multiple maps, a map editor, menus, settings, sound, music, and particles',
      'Structured the game around MVC, state and event-driven architecture, design patterns, Gradle automation, JUnit/jqwik/Mockito tests, JaCoCo, Pitest, and Spotless',
    ],
    detail: [
      'TankTussle is a TankTrouble-inspired local tank combat game built with Java and Lanterna for LDTS 2025/26.',
      'The game supports local 1v1 multiplayer and single-player matches against AI opponents with three difficulty levels. Combat centers on bouncing projectiles, ricochets, destructible and indestructible walls, multiple arena layouts, particle effects, sound, music, pause and victory flows, customizable controls, and a built-in map editor.',
      'Internally, the project uses MVC, explicit game states, an event-driven loop, and patterns such as factory method, observer, singleton, facade, state, and template method. The Gradle toolchain includes JUnit, jqwik, Mockito, JaCoCo, Pitest, and Spotless for testing, mutation analysis, coverage, and formatting.',
    ],
    galleries: [
      {
        heading: 'Game screenshots',
        columns: 2,
        ratio: '17 / 9',
        images: [
          { src: asset('/media/cv/tanktussle/splashscreen.webp'), alt: 'TankTussle splash screen with ASCII tank logo' },
          { src: asset('/media/cv/tanktussle/player-wins-round.webp'), alt: 'TankTussle local multiplayer round with a player victory' },
          { src: asset('/media/cv/tanktussle/ai-wins-round.webp'), alt: 'TankTussle single-player match against AI with projectiles and particles' },
          { src: asset('/media/cv/tanktussle/pause-menu.webp'), alt: 'TankTussle pause menu' },
        ],
      },
    ],
  },
]

export const education = [
  {
    id: 'carvalhos',
    institution: 'Colégio Internato dos Carvalhos',
    highlight: 'GPA: 20.0/20',
    degree: 'High School Diploma | Informática',
    location: 'Carvalhos, Vila Nova de Gaia',
    period: 'Sep 2021 - Jun 2024',
  },
  {
    id: 'feup',
    institution: 'Faculty of Engineering, University of Porto',
    degree: 'B.S. | Informatics and Computing Engineering',
    location: 'Porto, Portugal',
    period: 'Sep 2024 - Jun 2027',
  },
]
