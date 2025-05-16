export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Impact of AI on Modern Web Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications.",
    content: `
# The Impact of AI on Modern Web Development

Artificial intelligence (AI) has dramatically transformed various industries, and web development is no exception. In this article, we'll explore how AI is revolutionizing web development practices and what it means for developers and businesses alike.

## Automated Coding Assistance

One of the most significant impacts of AI on web development is the emergence of intelligent coding assistants. Tools like GitHub Copilot, powered by OpenAI's technology, can suggest code snippets, complete functions, and even generate entire components based on natural language descriptions.

\`\`\`javascript
// Example: Ask AI to generate a React component
// Prompt: "Create a user profile card component with avatar, name, and bio"

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <img 
        src={user.avatar || '/default-avatar.png'} 
        alt={user.name} 
        className="profile-avatar"
      />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-bio">{user.bio}</p>
    </div>
  );
};

export default ProfileCard;
\`\`\`

These tools are not replacing developers but enhancing their productivity. By handling routine coding tasks, AI allows developers to focus on more complex problems and creative solutions.

## Design Automation

AI-powered design tools are changing how websites are conceptualized and built. Systems can now generate entire layouts, suggest color schemes, and even create custom illustrations based on simple text prompts.

For example, tools like:

- **Figma AI features**: Automatically suggesting layouts and design elements
- **Midjourney or DALL-E**: Generating custom images for websites
- **Uizard**: Converting sketches into functional UI designs

These advancements democratize design, making it accessible to developers who may not have formal design training.

## Personalized User Experiences

AI enables websites to deliver highly personalized experiences by analyzing user behavior and preferences. This includes:

- Dynamic content recommendation systems
- Personalized navigation paths
- Adaptive user interfaces that change based on user behavior
- Chatbots and virtual assistants that improve over time

## Performance Optimization

AI algorithms can identify performance bottlenecks and suggest optimizations for faster loading times and better user experiences:

- Automatically optimizing image sizes and formats
- Predicting and preloading resources based on user behavior
- Identifying code inefficiencies

## What This Means for Developers

As AI continues to evolve, the role of web developers is transforming:

1. **Shift in skill requirements**: Greater emphasis on AI integration, prompt engineering, and understanding machine learning principles
2. **Focus on uniqueness**: As automation handles standard elements, developers will focus more on creating unique experiences
3. **Ethical considerations**: Increased responsibility for ensuring AI implementations are ethical and unbiased
4. **Human-AI collaboration**: Learning to effectively partner with AI tools rather than competing against them

## Conclusion

AI is not replacing web developers but transforming how they work. By embracing these new tools and approaches, developers can enhance their productivity, create more personalized experiences, and focus on solving more complex and interesting problems.

The future of web development lies not in resistance to AI but in learning how to leverage it effectively while maintaining the human creativity and ethical considerations that machines cannot replicate.
    `,
    author: "Ankit Raj",
    date: "April 15, 2025",
    readTime: 5,
    category: "Technology",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: 2,
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn best practices for structuring large-scale React applications using TypeScript for type safety.",
    content: `
# Building Scalable React Applications with TypeScript

TypeScript has become an essential tool for building large-scale React applications. In this article, we'll explore best practices for creating maintainable and scalable React applications with TypeScript.

## Why TypeScript for React Projects?

TypeScript provides static type checking that helps catch errors during development rather than runtime. This is particularly valuable as React applications grow in complexity.

Key benefits include:

1. Better developer experience with autocompletion and intellisense
2. Safer refactoring
3. Clearer component props documentation
4. Reduced runtime errors

## Project Structure

A well-organized project structure is crucial for scalability. Here's a recommended approach:

\`\`\`
src/
├── assets/            # Static files like images, fonts, etc.
├── components/        # Reusable UI components
│   ├── common/        # Highly reusable components (buttons, inputs, etc.)
│   └── features/      # Components tied to specific features
├── hooks/             # Custom React hooks
├── context/           # React context definitions
├── pages/             # Route components
├── services/          # API clients and other services
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── App.tsx            # Main application component
\`\`\`

## Type Definitions

Proper typing is essential for maintainable React applications:

\`\`\`typescript
// Define reusable interfaces
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  meta?: {
    lastLogin: Date;
    preferences: Record<string, unknown>;
  };
}

// Type component props
interface UserProfileProps {
  user: User;
  isEditable?: boolean;
  onUpdate: (updatedUser: Partial<User>) => Promise<void>;
}

// Function component with typed props
const UserProfile: React.FC<UserProfileProps> = ({
  user,
  isEditable = false,
  onUpdate
}) => {
  // Component implementation
};
\`\`\`

## Custom Hooks with TypeScript

Custom hooks benefit greatly from TypeScript:

\`\`\`typescript
import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [url]);
  
  return { data, loading, error, refetch: fetchData };
}
\`\`\`

## Context API with TypeScript

TypeScript makes React's Context API much more powerful:

\`\`\`typescript
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  user: User | null;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  const login = async (credentials: Credentials) => {
    // Implementation
  };
  
  const logout = () => {
    // Implementation
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
\`\`\`

## Performance Optimization

TypeScript can help with memoization patterns:

\`\`\`typescript
import React, { memo } from 'react';

interface ExpensiveComponentProps {
  data: ExpensiveData;
  onAction: (id: string) => void;
}

// Define custom comparator for props
const areEqual = (
  prevProps: ExpensiveComponentProps,
  nextProps: ExpensiveComponentProps
): boolean => {
  return (
    prevProps.data.id === nextProps.data.id &&
    prevProps.onAction === nextProps.onAction
  );
};

const ExpensiveComponent: React.FC<ExpensiveComponentProps> = memo(
  ({ data, onAction }) => {
    // Component implementation
  },
  areEqual
);
\`\`\`

## Conclusion

TypeScript transforms React development by providing compile-time safety and better developer experience. By following these patterns and best practices, you can create React applications that scale with your team and business needs.

Remember that TypeScript is a tool to help developers, not a goal in itself. Find the right balance of type safety and development speed that works for your team.
    `,
    author: "Ankit Raj",
    date: "February 28, 2025",
    readTime: 8,
    category: "Development",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: 3,
    title: "Optimizing Web Performance for Modern Browsers",
    excerpt: "Essential techniques for improving load times and user experience in your web applications.",
    content: "# Optimizing Web Performance\n\nThis is the full content of the performance optimization article...",
    author: "Ankit Raj",
    date: "January 10, 2025",
    readTime: 6,
    category: "Performance",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  }
];