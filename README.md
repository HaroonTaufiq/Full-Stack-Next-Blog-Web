# Next.js Full-Stack Blog Project

This repository contains a simple yet powerful full-stack application built with the latest features of **Next.js**. The project serves as a hands-on demonstration of modern web development practices, including **Server Components**, **Server Actions**, **Suspense**, **Streaming**, and **Dynamic Rendering**. Authentication is implemented using **Kinde**, and the app integrates with both external APIs and a **Prisma**-managed database.

---

## Features

- **Next.js Modern Features**
  - Server Components for efficient server-side rendering.
  - Server Actions to simplify API calls and server interactions.
  - Suspense for smoother user experiences.
  - Dynamic and static rendering for optimized performance.
  - Caching and streaming capabilities.

- **Authentication**
  - Authentication powered by [Kinde](https://kinde.com).
  - GitHub OAuth for secure and user-friendly login.
  - Middleware-based protection for sensitive routes like "Create Post."

- **Routing**
  - File-based routing for clean and scalable directory structures.
  - Dynamic routes for individual blog post pages.

- **Styling**
  - Fully responsive design using **Tailwind CSS**.
  - Component-based architecture for reusable and modular UI.

- **Data Management**
  - External API integration for fetching posts.
  - Prisma ORM for database management.

---

## Project Structure

```plaintext
.
├── app/
│   ├── posts/
│   │   ├── [id]/        # Dynamic route for individual posts
│   │   └── page.tsx     # Posts listing page
│   ├── create-post/     # Form for creating new posts (protected)
│   └── layout.tsx       # Layout with reusable components (Header, Footer)
├── components/
│   ├── Header.tsx       # Header component
│   ├── Footer.tsx       # Footer component
│   └── PostList.tsx     # UI for displaying posts
├── prisma/
│   └── schema.prisma    # Prisma schema for database
├── public/              # Static assets
├── styles/              # Tailwind CSS styles
└── next.config.js       # Next.js configuration
