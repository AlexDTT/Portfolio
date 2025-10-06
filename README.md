# Alexandre Teixeira - Portfolio

A modern, responsive portfolio website built with React and TypeScript, showcasing my projects, skills, and experience as a Computer Engineering student.

## About

Personal portfolio of Alexandre Teixeira, a 19-year-old Computer Engineering student at FEUP (Faculty of Engineering of the University of Porto). The site features my projects, technical skills, and passion for both software development and music.

## Technologies Used

This project is built with:

- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn/ui** - Modern UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (recommended: install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # React components
│   ├── ui/        # Reusable UI components (shadcn/ui)
│   ├── About.tsx  # About section
│   ├── Contact.tsx # Contact form
│   ├── Hero.tsx   # Hero section
│   ├── Navbar.tsx # Navigation
│   ├── Projects.tsx # Projects showcase
│   └── Skills.tsx # Skills section
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── pages/         # Page components
```

## Features

- **Responsive Design** - Works on all device sizes
- **Dark/Light Mode** - Toggle between themes
- **Interactive Components** - Smooth animations and transitions
- **Project Showcase** - Detailed project descriptions and links
- **Contact Form** - Get in touch functionality
- **Modern UI** - Clean, professional design

## Deployment

Build the project and deploy the `dist` folder to your preferred hosting service:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to services like Vercel, Netlify, or GitHub Pages.

## Contact

- **Email**: [your-email@example.com]
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

## License

This project is open source and available under the [MIT License](LICENSE).
