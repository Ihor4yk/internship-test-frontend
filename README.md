Web Application – Frontend
📌 Overview

This is a modern, responsive frontend web application built with React and Redux Toolkit.

The application includes:

Main landing page

Authentica

Application submission form

Dynamic header behavior based on authentication state

Full mobile adaptation

The project is built with scalability, clean architecture, and user experience in mind.

🚀 Tech Stack

React

TypeScript

Redux Toolkit

React Router

Axios

Vite

CSS Modules

🏗 Architecture

The project follows a feature-based structure to ensure scalability and maintainability:

src/
 ├── api/            # API configuration (Axios instance)
 ├── app/            # Redux store setup
 ├── features/       # Business logic (auth, deals, applications)
 ├── components/     # Reusable UI components
 ├── pages/          # Application pages
 ├── routes/         # Routing logic
 └── styles/         # Global styles
Key Decisions

Redux Toolkit for predictable global state management

Centralized API layer

Modular feature separation

Clean and reusable UI components

Mobile-first responsive design

🔐 Authentication Flow

Login and Registration forms with validation

Global auth state managed via Redux

After login, the header updates dynamically and hides authentication buttons

📱 Responsive Design

Fully responsive layout (desktop, tablet, mobile)

Optimized spacing and typography

Clear CTAs and intuitive user flow

Centered layout on small screens

⚙ Running Locally
npm install
npm run dev

Production build:

npm run build
npm run preview
🌍 Links

Live Demo: internship-test-frontend-smoky.vercel.app

GitHub Repository: https://github.com/Ihor4yk/internship-test-frontend

💡 What This Project Demonstrates

Clean React architecture

Scalable state management with Redux

API integration

Responsive UI implementation

Structured and maintainable codebase
