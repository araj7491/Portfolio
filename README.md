# Ankit Raj - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS. Features a clean design with dark/light theme toggle, project showcase, blog section, and contact form with EmailJS integration.

## → Live Demo

[View Portfolio](https://portfolio-lac-nu-19.vercel.app/)

## → Features

- **Theme Toggle** - Light/Dark mode with smooth transitions
- **Responsive Design** - Optimized for all devices
- **Project Showcase** - Detailed project cards with live demos
- **Blog Section** - Technical articles with markdown support
- **Contact Form** - EmailJS integration for direct email delivery
- **Smooth Animations** - Framer Motion powered interactions
- **Resume Download** - Direct PDF download functionality

## → Tech Stack

- **Frontend:** React 18, TypeScript, TailwindCSS
- **Animations:** Framer Motion
- **Email Service:** EmailJS
- **Build Tool:** Vite
- **Deployment:** Vercel

## → Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, Projects, Blog, Contact
│   └── ui/              # Cursor, TypeWriter, BlogPostModal
├── contexts/            # Theme context
├── data/                # Projects and blog data
└── config/              # EmailJS configuration
```

## → Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/araj7491/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## → Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service and template
3. Update `src/config/emailjs.ts` with your credentials:
   ```typescript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: 'your_service_id',
     TEMPLATE_ID: 'your_template_id', 
     USER_ID: 'your_user_id'
   };
   ```

## → Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Build Commands
```bash
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## → Customization

### Adding Projects
Edit `src/data/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    image: "image_url",
    tags: ["React", "TypeScript"],
    github: "github_url",
    demo: "demo_url",
    featured: true
  }
];
```

### Adding Blog Posts
Edit `src/data/blogPosts.ts`:
```typescript
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Blog Title",
    excerpt: "Blog excerpt",
    content: "Markdown content",
    date: "2024-01-01",
    readTime: "5 min read"
  }
];
```

## → License

MIT License - see [LICENSE](LICENSE) file for details.

## → Contact

- **Email:** [araj7491@gmail.com](mailto:araj7491@gmail.com)
- **LinkedIn:** [Ankit Raj](https://www.linkedin.com/in/ankit-raj-3594b6237/)
- **GitHub:** [araj7491](https://github.com/araj7491)
- **Portfolio:** [https://portfolio-lac-nu-19.vercel.app/](https://portfolio-lac-nu-19.vercel.app/)
