# Personal Portfolio Website

## Overview

This is a modern personal portfolio website for Bhavya, a full-stack developer. The application is built as a single-page application (SPA) showcasing skills, projects, and providing contact information. The portfolio features a dark/light theme toggle, responsive design, and interactive UI elements including a custom halo cursor effect and spotlight animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: TailwindCSS with shadcn/ui component library for consistent design system
- **State Management**: React Context for theme management, TanStack Query for server state
- **Build Tool**: Vite for fast development and optimized production builds

### Component Design
- **UI Components**: Radix UI primitives with custom styling via shadcn/ui
- **Custom Components**: 
  - HaloCursor for interactive cursor effects
  - SpotlightBox for animated content sections
  - Navbar with smooth scrolling navigation
  - ThemeProvider for dark/light mode switching
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the stack
- **Architecture Pattern**: RESTful API structure (though currently minimal)
- **Development**: Hot reloading with Vite middleware integration
- **Storage Interface**: Abstracted storage layer with in-memory implementation

### Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Shared Schema**: TypeScript schema definitions shared between client and server

### Development & Build
- **Monorepo Structure**: Client and server code in separate directories with shared types
- **Type Safety**: Full TypeScript coverage with strict configuration
- **Build Process**: Vite for client bundling, esbuild for server compilation
- **Development Server**: Integrated Vite middleware for seamless full-stack development

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express.js backend API
├── shared/          # Shared TypeScript schemas and types
├── migrations/      # Database migration files
└── attached_assets/ # Design specifications and assets
```

## External Dependencies

### Frontend Libraries
- **UI Framework**: React with shadcn/ui component system
- **Styling**: TailwindCSS with PostCSS for processing
- **Icons**: Lucide React icons and React Icons for technology logos
- **Routing**: Wouter for lightweight routing
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Hookform resolvers for validation

### Backend Services
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Storage**: connect-pg-simple for PostgreSQL session storage
- **Date Utilities**: date-fns for date manipulation

### Development Tools
- **Build Tools**: Vite with React plugin and runtime error overlay
- **TypeScript**: Full type coverage with strict configuration
- **Development**: Replit-specific plugins for cartographer and error handling
- **Package Management**: npm with lockfile for dependency consistency

### Design System
- **Component Library**: Radix UI primitives for accessibility
- **Styling Utilities**: class-variance-authority for component variants
- **CSS Processing**: Autoprefixer for vendor prefixes
- **Font Loading**: Google Fonts (Inter and Poppins) for typography

The architecture prioritizes type safety, developer experience, and modern web standards while maintaining a clean separation between frontend and backend concerns.