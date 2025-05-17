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
    title: "Introduction to Reasoning Models in AI",
    excerpt: "A beginner-friendly overview of reasoning models in artificial intelligence, with practical code examples.",
    content: `
# Introduction to Reasoning Models in AI

Reasoning models are at the core of artificial intelligence, enabling machines to draw conclusions, make decisions, and solve problems based on available information. In this article, we'll introduce the main types of reasoning in AI, discuss their applications, and provide practical code examples to help you get started.

  
## What Are Reasoning Models?

Reasoning models in AI are algorithms or systems that simulate human-like thinking to infer new information from known facts. They are essential for tasks such as expert systems, planning, diagnostics, and natural language understanding.

  
## Types of Reasoning in AI

There are several types of reasoning commonly used in AI:

1. **Deductive Reasoning**: Drawing specific conclusions from general rules or premises.
2. **Inductive Reasoning**: Inferring general rules from specific examples or observations.
3. **Abductive Reasoning**: Finding the most likely explanation for a set of observations.

  
## Example: Deductive Reasoning with Rules

Let's implement a simple rule-based system in JavaScript that uses deductive reasoning to infer whether a person can drive based on their age.

\`\`\`javascript
// Define the rules
const rules = [
  {
    condition: (person) => person.age >= 18,
    conclusion: "can drive"
  },
  {
    condition: (person) => person.age < 18,
    conclusion: "cannot drive"
  }
];

// Reasoning function
function canPersonDrive(person) {
  for (const rule of rules) {
    if (rule.condition(person)) {
      return rule.conclusion;
    }
  }
  return "unknown";
}

// Example usage
const alice = { name: "Alice", age: 20 };
console.log(\`\${alice.name} \${canPersonDrive(alice)}\`); // Alice can drive
\`\`\`

  
## Example: Inductive Reasoning with Machine Learning

Inductive reasoning is often implemented using machine learning. For example, you can train a model to predict if a person can drive based on age and other features.

\`\`\`python
# Example using scikit-learn (Python)
from sklearn.tree import DecisionTreeClassifier

# Training data: [age], can_drive (1 = yes, 0 = no)
X = [[16], [18], [21], [15], [30]]
y = [0, 1, 1, 0, 1]

model = DecisionTreeClassifier()
model.fit(X, y)

# Predict for a new person
print(model.predict([[17]]))  # Output: [0] (cannot drive)
\`\`\`

  
## Applications of Reasoning Models

- **Expert Systems**: Medical diagnosis, legal reasoning, and troubleshooting.
- **Natural Language Processing**: Understanding and generating human language.
- **Robotics**: Planning and decision-making in dynamic environments.
- **Recommendation Systems**: Suggesting products or actions based on user behavior.

  
## Conclusion

Reasoning models are fundamental to building intelligent systems that can make decisions and solve problems. By understanding and applying deductive, inductive, and abductive reasoning, you can create AI solutions that go beyond simple pattern recognition and truly "think" about the information they process.

Start experimenting with simple rule-based systems and machine learning models to see reasoning in action!
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
    content: `
# Optimizing Web Performance for Modern Browsers

Performance is a crucial aspect of modern web development. With users expecting fast, seamless experiences, optimizing your web application for modern browsers is essential. In this article, we’ll explore proven strategies to improve load times, reduce resource consumption, and deliver smooth user experiences.

  
## Why Web Performance Matters

Modern users have little patience for slow-loading websites. Even a slight delay in performance can lead to increased bounce rates and lost conversions.

**Key benefits of optimizing performance include:**

- Faster page load times  
- Improved SEO rankings  
- Better mobile experiences  
- Increased user retention and satisfaction

  
## Efficient Asset Loading

Minimizing and optimizing assets is one of the easiest ways to enhance performance.

**Best practices include:**

- Compressing images using modern formats like WebP or AVIF  
- Minifying and bundling CSS and JavaScript files  
- Lazy loading offscreen images and non-critical content  
- Optimizing font delivery by only including necessary font weights and using font-display strategies

  
## Code Splitting and Lazy Loading

As applications grow in size, loading all JavaScript upfront can hurt performance. Code splitting allows your application to load only the necessary code for a particular route or feature, improving initial load times.

Implementing lazy loading for components and modules ensures that less critical parts of the application are loaded on demand, enhancing responsiveness and user experience.

  
## Leveraging Browser Caching

Browser caching helps reduce redundant downloads by storing previously fetched resources locally. Setting cache headers and using versioned file names ensures users always get the latest versions when needed, without unnecessarily re-downloading unchanged assets.

Service workers can further enhance caching strategies by enabling offline access and caching dynamic API responses.

  
## Optimize Critical Rendering Path

The critical rendering path includes all steps the browser takes to render content to the screen. Optimizing this path ensures content appears quickly.

This can be achieved by:

- Inlining critical CSS for above-the-fold content  
- Deferring non-critical JavaScript  
- Reducing the number of render-blocking resources  
- Prioritizing fast delivery of visible elements

  
## Minimize Main Thread Work

The main thread is responsible for executing JavaScript, processing user events, and painting the UI. Heavy main thread usage can lead to sluggish performance and input delays.

Reducing unnecessary scripts, optimizing layout and reflows, and delegating expensive computations to Web Workers help ensure smoother interactions and improved responsiveness.

  
## Use Modern JavaScript and Delivery Techniques

Modern browsers support features that can significantly improve loading and execution efficiency. Serving ES modules, eliminating unused code through tree shaking, and generating differential bundles for modern and legacy browsers enhance compatibility and performance.

Adopting HTTP/2 or HTTP/3 protocols can also reduce latency and allow multiple resources to load concurrently over a single connection.

  
## Monitor and Measure Performance

Performance optimization is an ongoing process. Regularly auditing your application using tools like Lighthouse, Chrome DevTools, and WebPageTest helps identify bottlenecks and track improvements.

Paying attention to Core Web Vitals—such as Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS)—provides valuable insight into real user experience and guides optimization efforts.

  
## Conclusion

Optimizing web performance for modern browsers requires a holistic approach. From efficient asset handling and lazy loading to advanced caching and code-splitting techniques, every decision impacts the end-user experience.

By following these best practices and continuously monitoring performance metrics, developers can create fast, responsive, and enjoyable web applications that meet the expectations of today’s users.
    `,
    author: "Ankit Raj",
    date: "January 10, 2025",
    readTime: 6,
    category: "Performance",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  }
];