# Cosmic Worlds - Planets Website

A beautiful and interactive frontend website for exploring planets in our solar system, built with React and Tailwind CSS.

## Features

- **Responsive Navigation Bar**: Easy access to all sections with mobile support
- **About Us Section**: Learn about the mission and vision of Cosmic Worlds
- **Planets Section**: Explore detailed information about all 8 planets
- **News Section**: Stay updated with the latest space discoveries
- **Support Section**: Contact form and FAQ for user assistance

## Tech Stack

- **React 19** - Modern UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Bun** - Fast JavaScript runtime and bundler

## Getting Started

### Prerequisites

- Bun v1.0 or higher

### Installation

```bash
# Install dependencies
bun install
```

### Development

```bash
# Start development server with hot reload
bun run dev
```

The site will be available at `http://localhost:3000`

### Build

```bash
# Build for production
bun run build
```

The built files will be in the `dist` directory.

## Project Structure

```
neultesting/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation bar component
│   │   ├── AboutUs.tsx     # About Us section
│   │   ├── Planets.tsx     # Planets showcase
│   │   ├── News.tsx        # Latest news section
│   │   └── Support.tsx     # Support and contact form
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Application entry point
│   └── styles.css          # Tailwind CSS imports
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Project dependencies
```

## License

MIT
