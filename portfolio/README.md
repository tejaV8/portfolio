# Bhanu Teja Portfolio Website

A modern, responsive developer portfolio built with React, Vite, Tailwind CSS, Motion, and reusable UI components. The website presents a professional software-engineering profile with sections for introduction, education, skills, projects, certifications, contact links, and a contact form.

## Overview

This project is designed as an internship-ready portfolio website for showcasing technical skills, projects, certifications, and professional contact information in one clean interface.

The design uses a dark UI, subtle grid background, animated cursor, animated border beam, brand icons, responsive cards, and smooth section navigation.

## Features

- Responsive layout for mobile, tablet, and laptop screens
- Fixed navigation with smooth scrolling and scroll offset
- Hero section with profile photo, tagline, and call-to-action buttons
- About section with education, interests, and career goals
- Skills section grouped by languages, frameworks, databases, concepts, and tools
- Projects section with screenshots, tech stacks, live links, and GitHub buttons
- Certifications section with certificate images and recognitions
- Contact section with email, LinkedIn, GitHub, and contact form
- Footer with social links
- Reusable UI components such as `BorderBeam`, `GridPattern`, `SmoothCursor`, and brand logos
- Organized asset folders for project and certificate images
- Generated PowerPoint presentation for project explanation

## Tech Stack

- React
- Vite
- Tailwind CSS
- Motion / Framer Motion
- Lucide React
- shadcn-style utilities
- Radix UI
- Git and GitHub

## Project Structure

```text
portfolio/
|-- presentation/
|   |-- create_presentation.py
|   `-- Portfolio_Website_Project_Presentation.pptx
|-- public/
|-- src/
|   |-- assets/
|   |   |-- certificates/
|   |   `-- projects/
|   |-- components/
|   |   |-- ui/
|   |   |-- About.jsx
|   |   |-- BrandLogo.jsx
|   |   |-- Certifications.jsx
|   |   |-- Contact.jsx
|   |   |-- Footer.jsx
|   |   |-- Hero.jsx
|   |   |-- Navbar.jsx
|   |   |-- Projects.jsx
|   |   `-- Skills.jsx
|   |-- lib/
|   |   `-- utils.js
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- package.json
|-- vite.config.js
`-- README.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Main Sections

### Home

Introduces Bhanu Teja with a profile image, personal tagline, animated badge, and quick links to projects and contact.

### About

Highlights education, areas of interest, and career goals.

### Skills

Groups technical skills into languages, frameworks, databases, concepts, and tools.

### Projects

Displays featured projects:

- CodeSlate
- MatriCalc

Each project includes a screenshot, description, tech stack, live demo button, and GitHub button.

### Certifications

Showcases:

- Oracle Cloud Infrastructure Networking Professional
- HackerRank Java Basic
- Kaggle Python

### Contact

Includes email, LinkedIn, GitHub, and a contact form that opens the user's email client with a prefilled message.

## Customization

Update contact details in:

```text
src/components/Contact.jsx
```

Current placeholders:

```js
const contactEmail = "your.email@example.com";
const githubUrl = "https://github.com/";
```

Update project data in:

```text
src/components/Projects.jsx
```

Update certificates in:

```text
src/components/Certifications.jsx
```

Replace or add images in:

```text
src/assets/projects/
src/assets/certificates/
```

## Presentation

A project presentation has been generated here:

```text
presentation/Portfolio_Website_Project_Presentation.pptx
```

To regenerate it:

```bash
python presentation/create_presentation.py
```

## Quality Checks

The project should pass:

```bash
npm run lint
npm run build
```

## Author

Bhanu Teja  
B.Tech Computer Science Engineering  
Aspiring Software Engineer
