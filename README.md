Portfolio Website
A static portfolio website built with Vite and React, showcasing Home, About, Projects, Experience and Contact sections. This project is designed to be a clean, responsive, and professional frontend-only portfolio with a visitor counter powered by Upstash Redis.
Table of Contents

Getting Started
Project Structure
Technologies Used
Environment Variables
Contributing

Getting Started
Prerequisites

Node.js (>= 18.x)
npm

Installation

Install dependencies:
npm install


Start the development server:
npm run dev



The static files will be generated in the dist/ directory, ready for deployment on platforms like Vercel, Netlify, or GitHub Pages.
Project Structure
your-portfolio/
├── public/                 # Public assets (images, favicon, etc.)
│   ├── images/             # Static images for projects, profile, etc.
│   ├── cv.pdf
│   └── icon.png
├── src/
│   ├── assets/             # Compiled assets (used in code)
│   │   └── animation/      # Animations from Lottie
│   ├── components/         # Reusable components
│   │   ├── Button/
│   │   │   ├── Button.jsx        # Button component
│   │   │   ├── Button.module.css # Component-specific styles
│   │   │   └── index.js         # Barrel export
│   │   ├── Card/
│   │   │   ├── Card.jsx         # Card for projects/technologies
│   │   │   ├── Card.module.css
│   │   │   └── index.js
│   │   ├── CustomCursor/
│   │   │   ├── CustomCursor.jsx # Custom cursor component
│   │   │   ├── CustomCursor.module.css
│   │   │   └── index.js
│   │   └── ...
│   ├── data/               # Static data for portfolio content
│   │   ├── projects.json   # Project details (title, description, etc.)
│   │   └── technologies.json # Work technologies details
│   ├── layouts/            # Layout components
│   │   ├── MainLayout.jsx  # Main layout with header
│   │   └── Header.jsx      # Navigation header
│   ├── pages/              # Page-level components
│   │   ├── Home/
│   │   │   ├── Home.jsx         # Home page
│   │   │   ├── Home.module.css
│   │   │   └── index.js
│   │   ├── About/
│   │   │   ├── About.jsx        # About page
│   │   │   ├── About.module.css
│   │   │   └── index.js
│   │   ├── Projects/
│   │   │   ├── Projects.jsx     # Projects page
│   │   │   ├── Projects.module.css
│   │   │   └── index.js
│   │   ├── Technologies/
│   │   │   ├── Technologies.jsx # Technologies page
│   │   │   ├── Technologies.module.css
│   │   │   └── index.js
│   │   └── Contact/
│   │       ├── Contact.jsx      # Contact page
│   │       ├── Contact.module.css
│   │       └── index.js
│   ├── styles/             # Global styles
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point of the app
│   └── routes.jsx # Centralized route definitions (using React Router)
├── .env                    # Environment variables
├── vite.config.js          # Vite configuration
├── package.json            # Project metadata and dependencies
├── README.md               # This file
└── .gitignore              # Files to ignore in Git

Technologies Used
Frontend

Vite: Fast build tool for modern web projects
React: JavaScript library for building user interfaces (with Hooks)
React Router: Declarative routing for React applications
Framer Motion: Animation library for smooth transitions and effects
Lottie React: For rendering Lottie animations
React Masonry CSS: Responsive masonry layout for grid displays
MUI (Material-UI): React component library for UI elements and icons
Emotion: CSS-in-JS library for styled components and theming
Tailwind CSS: Utility-first CSS framework for styling
Lucide React: Lightweight icon library

Backend Services

Upstash Redis: Serverless Redis database for tracking visitor counts
Formspree: Form submission service for the Contact page

Development Tools

ESLint: Linting tool for code quality and consistency
PostCSS with Autoprefixer: For cross-browser CSS compatibility
Vite Plugin React: For React Fast Refresh in Vite

Environment Variables
Create a .env file in the root directory with the following keys:
VITE_BASE_URL=http://localhost:5173
VITE_UPSTASH_URL=<your-upstash-redis-url>
VITE_UPSTASH_TOKEN=<your-upstash-redis-token>


VITE_BASE_URL: Used for development or deployment configurations (optional for static sites).
VITE_UPSTASH_URL: The URL for your Upstash Redis instance (e.g., https://caring-dingo-27678.upstash.io).
VITE_UPSTASH_TOKEN: The authentication token for your Upstash Redis instance.

Note: The Upstash Redis service is used to track the number of unique visitors to the site, displayed in the footer of the MainLayout. Ensure these variables are set correctly to enable the visitor counter functionality.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.
