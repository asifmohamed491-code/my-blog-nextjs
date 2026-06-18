# Next.js Blog Application

A modern full-stack blog application built with Next.js, MongoDB, and Tailwind CSS.

## Overview

This project is a dynamic blog platform where users can browse blog posts, search posts, and view detailed post pages.

Built using Next.js App Router with API Routes and MongoDB integration.

---

## Features

* Dynamic blog post listing
* Single post page using dynamic routing
* Search posts by title and description
* Responsive UI
* MongoDB database integration
* REST API using Next.js Route Handlers
* Virtual fields support using Mongoose
* Tailwind CSS styling
* Client-side data fetching
* Optimized project structure

---

## Tech Stack

### Frontend

* Next.js
* React.js
* Tailwind CSS

### Backend

* Next.js API Routes
* Node.js

### Database

* MongoDB
* Mongoose

---

## Folder Structure

```plaintext
app/
│
├── api/
│   └── post/
│       ├── route.js
│       └── [id]/
│           └── route.js
│
├── post/
│   └── [id]/
│       └── page.jsx
│
├── page.jsx
│
models/
│
└── postModel.js

utils/
│
└── connectMongo.js
```

---

## Installation

Clone repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Install packages:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```plaintext
http://localhost:3000
```

---

## Environment Variables

Create:

```plaintext
.env.local
```

Add:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
MONGODB_URI=YOUR_MONGODB_CONNECTION
```

---

## API Endpoints

Get all posts:

```plaintext
GET /api/posts
```

Search posts:

```plaintext
GET /api/posts?q=search_text
```

Get single post:

```plaintext
GET /api/post/:id
```

---

## Screens

* Home Page
* Search Page
* Single Blog Page

---

## Future Improvements

* Authentication
* Admin Dashboard
* Categories
* Comments
* Pagination
* Dark Mode
* Rich Text Editor

---

## Author

Mohamed Asif

Built with Next.js + Tailwind CSS
