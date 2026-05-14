# 🐱 Zwerfkat - Cat Adoption Website

A beautiful, modern static website built with Astro and Tailwind CSS, dedicated to helping stray cats find loving homes.

## 🌟 Features

- **Home Page**: Interactive tiles linking to different sections with an embedded iframe for external content
- **Adopteren (Adoption)**: Comprehensive information about cat adoption with care guidelines
- **Wie zijn we (Who We Are)**: Team member profiles with role descriptions
- **Weetjes (Facts)**: Six detailed sections about cat history, senses, behavior, and more
- **Blog**: Dynamic blog system that generates content from Markdown files
- **Global Navigation**: Consistent navigation bar on every page with "Contacteer ons" button
- **Cat-themed Design**: Warm orange and cream color scheme with cat emojis throughout
- **Responsive**: Mobile-friendly design that works on all screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sofieravyts/zwerfkat.git
cd zwerfkat
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:4321`

## 📝 Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview your build locally before deploying |

## 📁 Project Structure

```
zwerfkat/
├── src/
│   ├── content/
│   │   └── blog/              # Markdown blog posts
│   ├── layouts/
│   │   └── Layout.astro       # Main layout with navigation
│   └── pages/
│       ├── index.astro        # Home page
│       ├── adopteren.astro    # Adoption page
│       ├── wie-zijn-we.astro  # Team page
│       ├── weetjes.astro      # Facts page
│       └── blog.astro         # Blog listing page
├── public/                     # Static assets
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind CSS configuration
└── package.json
```

## ✍️ Adding Blog Posts

To add a new blog post:

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with title, date, author, and excerpt:

```markdown
---
title: "Your Post Title"
date: "2025-01-20"
author: "Author Name"
excerpt: "Brief description of the post"
---

# Your Post Title

Your content here...
```

The blog page will automatically display new posts sorted by date.

## 🎨 Customization

### Colors

The theme uses custom colors defined in `tailwind.config.mjs`:
- `cat-primary`: #FF9966 (navigation and accents)
- `cat-bg`: #FFF8E7 (background)
- `cat-secondary`: #8B4513 (headings and footer)

### Team Members

Edit the `teamMembers` array in `src/pages/wie-zijn-we.astro` to update team information.

## 🛠️ Built With

- [Astro](https://astro.build) - Modern static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework

## 📄 License

This project is licensed under the terms in the LICENSE file.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Made with ❤️ for cats everywhere 🐾