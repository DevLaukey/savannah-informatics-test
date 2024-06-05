# Album & User Management System

This is a web application built with Next.js and Tailwind CSS that allows users to manage albums and user profiles. The application includes features such as responsive design, user authentication, and AI-powered photo insights.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Components](#components)
- [Pages](#pages)


## Features

- Responsive Design
- Intuitive User Interface
- AI-Powered Photo Insights
- Dark/Light Theme
- User Reviews
- Advanced Search
- Secure Authentication
- Team Collaboration
- Real-time Updates
- Newsletter Integration
- Minimalist Design

## Technologies Used

- Next.js
- Tailwind CSS
- Jest
- React Testing Library
- @kinde-oss/kinde-auth-nextjs for authentication

## Project Structure

- components
  - Albums.js
  - Footer.js
  - Hero.js
  - Navbar.js
  - PhotoCard.js
  - ScrollToTop.js
  - UserCard.js
  - ui
    - button.js
    - input.js
    - navigation-menu.js
    - sheet.js
- pages
  - index.js (Landing + Login)
  - home.js (Home)
  - user
    - [id].js (User)
  - album
    - [id].js (Album)
  - photo
    - [id].js (Photo)
- tests
  - PhotoCard.test.js
  - Photo.test.js
- jest.config.js
- jest.setup.js
- .babelrc
- README.md

## Components
- Hero.js
Provides a brief explanation of the application's purpose with a visually appealing design.

- Navbar.js
Renders the navigation menu with options for login, registration, and logout based on the user's authentication status.

- PhotoCard.js
Displays individual photo cards with optimized image handling using the next/image component.

- UserCard.js
Shows user information and album count.

- Albums.js
Lists all albums for the authenticated user.

- Footer.js
Renders the footer of the application.

- ScrollToTop.js
Provides a button to scroll back to the top of the page.

- ui/button.js, ui/input.js, ui/navigation-menu.js, ui/sheet.js
Custom UI components using Tailwind CSS.

## Pages
- page.js
Landing and login page combined. Displays a hero section, about section, and footer. Redirects authenticated users to the Albums component.

- users/page.js
Lists all users and their albums. Fetches user data and album data from the JSONPlaceholder API and displays it using the UserCard component.

- user/[id].js
Displays details of a specific user and their albums. Fetches user data and album data for the selected user from the JSONPlaceholder API.

- album/[id].js
Displays details of a specific album and its photos. Fetches album data and photo data for the selected album from the JSONPlaceholder API.

- photo/[id].js
Displays a specific photo and allows the user to edit its title. Fetches photo data from the JSONPlaceholder API and provides an input field for editing the title.
