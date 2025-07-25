export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Qconnect",
    description: "A Peer-to-Peer Collaborative Learning Space where students can engage in real-time academic collaboration through peer interaction.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Node.js"],
    github: "https://github.com/araj7491/qconnect",
    demo: "https://fancy-sunshine-65bb8b.netlify.app/",
    featured: true
  },
  {
    id: 2,
    title: "Co-ordinaid",
    description: "A comprehensive platform for managing volunteer activities, recruitment, and coordination for NGOs.",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Java", "JDBC", "Spring Boot", "Spring MVC", "ThymeLeaf"],
    github: "https://github.com/araj7491/coordinaid",
    featured: true
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/araj7491/portfolio",
    demo: "https://portfolio-lac-nu-19.vercel.app/",
    featured: true
  },
  {
    id: 4,
    title: "FreshGuard",
    description: "FreshGuard is a robust web application designed to assist grocery retailers in managing product expiry dates, reducing food waste, and optimizing inventory operations.",
    image: "https://images.pexels.com/photos/8475203/pexels-photo-8475203.jpeg",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/araj7491/expiry-aware-grocer",
    demo: "https://freshguard-app.netlify.app/",
    featured: true
  }
];