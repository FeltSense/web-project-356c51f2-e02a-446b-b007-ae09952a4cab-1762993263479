export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  readingTime: number;
  featured: boolean;
  coverImage: string;
  seoTitle?: string;
  seoDescription?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14: A Complete Guide',
    slug: 'getting-started-nextjs-14',
    excerpt: 'Learn how to build modern web applications with Next.js 14, exploring the new app directory, server components, and enhanced performance features.',
    content: `# Getting Started with Next.js 14: A Complete Guide

Next.js 14 introduces revolutionary changes that make building web applications faster and more intuitive than ever before. In this comprehensive guide, we'll explore the key features and best practices.

## What's New in Next.js 14

The latest version of Next.js brings several exciting features:

- **Turbopack**: Lightning-fast bundler for development
- **Server Actions**: Simplified data mutations
- **Partial Prerendering**: Optimal performance for dynamic content
- **Enhanced App Router**: Improved routing capabilities

## Setting Up Your First Project

To get started with Next.js 14, run the following command:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

This will create a new Next.js application with all the latest features enabled by default.

## Key Concepts

### App Directory Structure

The new app directory provides a more intuitive way to organize your application:

\`\`\`
app/
├── layout.tsx
├── page.tsx
├── globals.css
└── components/
\`\`\`

### Server Components

Server Components render on the server, reducing client-side JavaScript and improving performance:

\`\`\`tsx
// This is a Server Component by default
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js 14</h1>
    </div>
  );
}
\`\`\`

## Best Practices

1. Use Server Components by default
2. Leverage TypeScript for better development experience
3. Optimize images with the Image component
4. Implement proper error boundaries
5. Use Suspense for loading states

## Conclusion

Next.js 14 represents a significant leap forward in web development, offering improved performance, better developer experience, and more powerful features for building modern applications.`,
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/authors/sarah-johnson.jpg',
      bio: 'Senior Frontend Developer with 8+ years of experience in React and Next.js development.'
    },
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:30:00Z',
    tags: ['Next.js', 'React', 'Web Development', 'JavaScript'],
    category: 'Development',
    readingTime: 8,
    featured: true,
    coverImage: '/images/blog/nextjs-14-guide.jpg',
    seoTitle: 'Complete Next.js 14 Guide - Modern Web Development',
    seoDescription: 'Master Next.js 14 with our comprehensive guide covering app directory, server components, and best practices for modern web development.'
  },
  {
    id: '2',
    title: 'Building Scalable React Applications with TypeScript',
    slug: 'scalable-react-typescript',
    excerpt: 'Discover how to architect large-scale React applications using TypeScript, focusing on maintainability, type safety, and developer productivity.',
    content: `# Building Scalable React Applications with TypeScript

Creating maintainable and scalable React applications requires careful planning and the right tools. TypeScript has become an essential part of the React ecosystem, providing type safety and enhanced developer experience.

## Why TypeScript for React?

TypeScript offers several advantages for React development:

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Self-Documenting Code**: Types serve as documentation
- **Easier Refactoring**: Confident code changes across large codebases

## Project Structure

A well-organized project structure is crucial for scalability:

\`\`\`
src/
├── components/
│   ├── common/
│   ├── forms/
│   └── layout/
├── hooks/
├── types/
├── utils/
├── services/
└── pages/
\`\`\`

## Type Definitions

Define clear interfaces for your application data:

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  createdAt: Date;
}

interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}
\`\`\`

## Component Patterns

### Generic Components

Create reusable components with TypeScript generics:

\`\`\`tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li key={keyExtractor(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
\`\`\`

### Custom Hooks

Build type-safe custom hooks:

\`\`\`tsx
function useApi<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };
}
\`\`\`

## State Management

Use TypeScript with your preferred state management solution:

\`\`\`tsx
interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  notifications: Notification[];
}

type Action = 
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'ADD_NOTIFICATION'; payload: Notification };

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'ADD_NOTIFICATION':
      return { 
        ...state, 
        notifications: [...state.notifications, action.payload] 
      };
    default:
      return state;
  }
}
\`\`\`

## Testing with TypeScript

Write type-safe tests:

\`\`\`tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserProfile } from './UserProfile';

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user',
  createdAt: new Date()
};

test('displays user information correctly', () => {
  render(<UserProfile user={mockUser} />);
  
  expect(screen.getByText(mockUser.name)).toBeInTheDocument();
  expect(screen.getByText(mockUser.email)).toBeInTheDocument();
});
\`\`\`

## Best Practices

1. **Start with strict TypeScript configuration**
2. **Use utility types for transformations**
3. **Implement proper error boundaries**
4. **Leverage TypeScript's discriminated unions**
5. **Use const assertions for immutable data**

## Conclusion

TypeScript transforms React development by providing type safety, better tooling, and improved maintainability. By following these patterns and best practices, you can build robust, scalable applications that are easier to maintain and extend over time.`,
    author: {
      name: 'Michael Chen',
      avatar: '/images/authors/michael-chen.jpg',
      bio: 'Full Stack Developer and TypeScript enthusiast with experience in building large-scale applications.'
    },
    publishedAt: '2024-01-10T09:00:00Z',
    updatedAt: '2024-01-15T16:45:00Z',
    tags: ['React', 'TypeScript', 'Architecture', 'Best Practices'],
    category: 'Development',
    readingTime: 12,
    featured: true,
    coverImage: '/images/blog/react-typescript-scale.jpg',
    seoTitle: 'Scalable React Apps with TypeScript - Complete Guide',
    seoDescription: 'Learn to build maintainable, type-safe React applications with TypeScript. Best practices, patterns, and architecture for large-scale projects.'
  },
  {
    id: '3',
    title: 'Modern CSS Techniques: Grid, Flexbox, and Container Queries',
    slug: 'modern-css-techniques',
    excerpt: 'Explore the latest CSS features including CSS Grid, Flexbox, and Container Queries to create responsive and maintainable layouts.',
    content: `# Modern CSS Techniques: Grid, Flexbox, and Container Queries

CSS has evolved tremendously in recent years, providing developers with powerful layout tools that make creating responsive designs easier and more intuitive. Let's explore the most important modern CSS techniques.

## CSS Grid: The Ultimate Layout System

CSS Grid is a two-dimensional layout system that gives you complete control over both rows and columns:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  padding: 2rem;
}

.grid-item {
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
}
\`\`\`

### Advanced Grid Techniques

\`\`\`css
.complex-grid {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\`

## Flexbox: Perfect for One-Dimensional Layouts

Flexbox excels at distributing space and aligning items in a single dimension:

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.flex-item {
  flex: 1 1 200px; /* grow shrink basis */
  min-width: 0; /* Prevents overflow issues */
}
\`\`\`

### Centering with Flexbox

\`\`\`css
.center-everything {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
\`\`\`

## Container Queries: Responsive Components

Container queries allow components to respond to their container's size, not just the viewport:

\`\`\`css
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 1rem;
  }
  
  .card-image {
    order: -1;
  }
}
\`\`\`

## Custom Properties (CSS Variables)

Modern CSS leverages custom properties for maintainable and dynamic styling:

\`\`\`css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --border-radius: 8px;
  --spacing-unit: 1rem;
  --font-size-base: 16px;
  --line-height-base: 1.6;
}

.button {
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  padding: calc(var(--spacing-unit) * 0.5) var(--spacing-unit);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
}

.button--secondary {
  background-color: var(--secondary-color);
}
\`\`\`

## Logical Properties

Use logical properties for better internationalization support:

\`\`\`css
.content {
  margin-block: 2rem; /* margin-top and margin-bottom */
  margin-inline: 1rem; /* margin-left and margin-right */
  padding-block-start: 1rem; /* padding-top */
  border-inline-end: 1px solid #ccc; /* border-right */
}
\`\`\`

## Modern Selectors

Take advantage of new CSS selectors:

\`\`\`css
/* :is() selector */
:is(h1, h2, h3, h4, h5, h6) {
  font-family: 'Heading Font', sans-serif;
  line-height: 1.2;
}

/* :where() selector (lower specificity) */
:where(ul, ol) :where(ul, ol) {
  margin-block: 0;
}

/* :has() selector (parent selector) */
.card:has(.card-image) {
  display: grid;
  grid-template-columns: 200px 1fr;
}
\`\`\`

## Clamp() for Fluid Typography

Create responsive typography without media queries:

\`\`\`css
.fluid-text {
  font-size: clamp(1.125rem, 2.5vw, 2rem);
  line-height: clamp(1.4, 1.5, 1.6);
}

.container {
  width: clamp(16rem, 90vw, 70rem);
  margin-inline: auto;
}
\`\`\`

## Practical Example: Responsive Card Layout

Here's a complete example combining these techniques:

\`\`\`css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  padding: clamp(1rem, 5vw, 3rem);
}

.card {
  container-type: inline-size;
  background: white;
  border-radius: var(--border-radius, 8px);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  overflow: hidden;
}

@container (min-width: 400px) {
  .card-content {
    display: flex;
    gap: 1rem;
  }
  
  .card-image {
    flex: 0 0 150px;
  }
}

.card-title {
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  margin-block: 0 0.5rem;
}
\`\`\`

## Browser Support and Progressive Enhancement

Always consider browser support and implement progressive enhancement:

\`\`\`css
.layout {
  /* Fallback for older browsers */
  display: flex;
  flex-wrap: wrap;
}

@supports (display: grid) {
  .layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@supports (container-type: inline-size) {
  .responsive-component {
    container-type: inline-size;
  }
}
\`\`\`

## Conclusion

Modern CSS provides incredible power and flexibility for creating responsive, maintainable layouts. By combining CSS Grid, Flexbox, Container Queries, and other modern features, you can build interfaces that adapt beautifully to any screen size while keeping your code clean and semantic.

The key is understanding when to use each technique and how they work together to create cohesive, responsive designs that provide excellent user experiences across all devices.`,
    author: {
      name: 'Emily Rodriguez',
      avatar: '/images/authors/emily-rodriguez.jpg',
      bio: 'CSS specialist and UI/UX designer passionate about modern web standards and responsive design.'
    },
    publishedAt: '2024-01-05T14:00:00Z',
    updatedAt: '2024-01-12T11:20:00Z',
    tags: ['CSS', 'Responsive Design', 'Web Standards', 'Layout'],
    category: 'Design',
    readingTime: 10,
    featured: false,
    coverImage: '/images/blog/modern-css-techniques.jpg',
    seoTitle: 'Modern CSS Techniques - Grid, Flexbox & Container Queries',
    seoDescription: 'Master modern CSS with Grid, Flexbox, and Container Queries. Learn responsive design techniques for creating maintainable, flexible layouts.'
  }
];

export const categories = [
  'All',
  'Development',
  'Design',
  'Tutorial',
  'News',
  'Opinion'
];

export const tags = [
  'Next.js',
  'React',
  'TypeScript',
  'JavaScript',
  'CSS',
  'Web Development',
  'UI/UX',
  'Performance',
  'Best Practices',
  'Tutorial'
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === 'All') return blogPosts;
  return blogPosts.filter(post => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getRelatedBlogPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const related = blogPosts
    .filter(post => post.id !== currentPost.id)
    .filter(post => 
      post.category === currentPost.category || 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .sort((a, b) => {
      const aScore = (a.category === currentPost.category ? 2 : 0) +
                     a.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const bScore = (b.category === currentPost.category ? 2 : 0) +
                     b.tags.filter(tag => currentPost.tags.includes(tag)).length;
      return bScore - aScore;
    })
    .slice(0, limit);

  return related;
}