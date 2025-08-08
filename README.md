Portfolio Website
A static portfolio website built with Vite and React, showcasing Home, About, Projects, Experience, Certificates, and Contact sections. This project is designed to be a clean, responsive, and professional frontend-only portfolio with no backend dependencies.

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

Install dependencies:
npm install

Start the development server:
npm run dev

The static files will be generated in the dist/ directory, ready for deployment on platforms like Vercel, Netlify, or GitHub Pages.

Project Structure
your-portfolio/
├── public/ # Public assets (images, favicon, etc.)
│ ├── images/ # Static images for projects, profile, etc.
│ └── icon.png
├── src/
│ ├── assets/ # Compiled assets (used in code)
│ │ ├── images/ # Images imported in components
│ │ └── fonts/ # Custom fonts (if any)
│ ├── components/ # Reusable components
│ │ ├── Button/
│ │ │ ├── Button.jsx # Button component
│ │ │ ├── Button.module.css # Component-specific styles
│ │ │ └── index.js # Barrel export
│ │ ├── Card/
│ │ │ ├── Card.jsx # Card for projects/experience
│ │ │ ├── Card.module.css
│ │ │ └── index.js
│ │ └── ...
│ ├── data/ # Static data for portfolio content
│ │ ├── projects.json # Project details (title, description, etc.)
│ │ ├── experience.json # Work experience details
│ │ └── about.json # About section content
│ ├── layouts/ # Layout components
│ │ ├── MainLayout.jsx # Main layout with header
│ │ └── Header.jsx # Navigation header
│ ├── pages/ # Page-level components
│ │ ├── Home/
│ │ │ ├── Home.jsx # Contact page
│ │ │ ├── Home.module.css
│ │ │ └── index.js
│ │ ├── About/
│ │ │ ├── About.jsx # About page
│ │ │ ├── About.module.css
│ │ │ └── index.js
│ │ ├── Projects/
│ │ │ ├── Projects.jsx # Projects page
│ │ │ ├── Projects.module.css
│ │ │ └── index.js
│ │ ├── Experience/
│ │ │ ├── Experience.jsx # Experience page
│ │ │ ├── Experience.module.css
│ │ │ └── index.js
│ │ ├── Contact/
│ │ │ ├── Contact.jsx # Contact page
│ │ │ ├── Contact.module.css
│ │ │ └── index.js
│ │ └── Certificates/
│ │   ├── Contact.jsx # Contact page
│ │   ├── Contact.module.css
│ │   └── index.js
│ ├── styles/ # Global styles
│ ├── App.jsx # Main app component
│ ├── main.jsx # Entry point of the app
│ └── routes.jsx # Centralized route definitions (using React Router)
├── vite.config.js # Vite configuration
├── package.json # Project metadata and dependencies
├── README.md # This file
└── .gitignore # Files to ignore in Git

Technologies Used

Frontend:
Vite (Build tool)
React (with Hooks)
React Router (for routing)

Others:
Lucide React (Icons Library)

Environment Variables
Create a .env file in the root directory with the following optional key:
VITE_BASE_URL=http://localhost:5173

This variable is used for development or deployment configurations. Since the site is static, additional environment variables are not required.
