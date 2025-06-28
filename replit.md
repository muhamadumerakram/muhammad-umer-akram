# Muhammad Umer Akram Portfolio - QA Engineer

## Overview

This is a modern, professional portfolio website for Muhammad Umer Akram, a Software Quality Assurance Engineer with 2+ years of experience. The application is built as a full-stack web application showcasing his expertise in test automation, API testing, and comprehensive QA processes.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Animations**: Framer Motion for smooth transitions and interactions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Development**: Hot reload with Vite middleware integration
- **Error Handling**: Centralized error middleware with proper HTTP status codes

### Data Storage
- **Development**: In-memory storage with Map-based implementation
- **Production Ready**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management

## Key Components

### Frontend Sections
1. **Navigation**: Fixed glassmorphism navigation with smooth scrolling
2. **Hero Section**: Animated landing with professional introduction
3. **About Section**: Professional summary with key achievements
4. **Skills Section**: Interactive skill bars and technology showcase
5. **Experience Section**: Timeline-based professional history
6. **Projects Section**: Portfolio of testing projects and methodologies
7. **Tools Section**: Grid of testing tools and technologies
8. **Contact Section**: Functional contact form with validation
9. **Footer**: Additional links and professional information

### Backend Components
1. **Contact API**: Handles form submissions with validation
2. **Storage Layer**: Abstracted storage interface for scalability
3. **Request Logging**: Detailed API request/response logging
4. **Static Serving**: Production-ready static file serving

## Data Flow

### Contact Form Submission
1. User fills out contact form with name, email, subject, and message
2. Frontend validates data using Zod schema validation
3. TanStack React Query handles API request with error states
4. Backend validates request body against shared schema
5. Data is stored using the storage interface
6. Success/error response is returned to frontend
7. Toast notification displays result to user

### Development Workflow
1. Vite dev server serves frontend with hot reload
2. Express server handles API routes and middleware
3. Shared TypeScript types ensure type safety across stack
4. Drizzle schema provides single source of truth for data models

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Font Awesome**: Additional icon support

### Development Tools
- **Drizzle ORM**: Type-safe database toolkit
- **Zod**: Runtime type validation
- **TanStack React Query**: Server state management
- **Wouter**: Lightweight routing

### Backend Dependencies
- **Express**: Web application framework
- **Neon Database**: Serverless PostgreSQL provider
- **connect-pg-simple**: PostgreSQL session store (configured but not used in current implementation)

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite bundles React application to `dist/public`
2. **Backend Build**: esbuild compiles TypeScript server to `dist/index.js`
3. **Static Assets**: Frontend build output served by Express in production

### Environment Configuration
- **Development**: `NODE_ENV=development` with Vite dev server
- **Production**: `NODE_ENV=production` with static file serving
- **Database**: `DATABASE_URL` environment variable for PostgreSQL connection

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (via Neon or similar provider)
- Environment variables for database connection
- Static file serving capability

## Changelog

```
Changelog:
- June 28, 2025. Initial setup with complete portfolio
- June 28, 2025. Added profile picture upload functionality
- June 28, 2025. Implemented resume download feature
- June 28, 2025. Added FormSubmit email service for contact form
- June 28, 2025. Updated copyright to 2025
```

## Domain Configuration

The portfolio is currently accessible via the Replit development URL. To use the custom domain `muhammad-umer-akram.com`:

1. Purchase and configure the domain with a domain registrar
2. Set up DNS records to point to the Replit deployment
3. Configure the custom domain in Replit Deployments settings
4. Update any absolute URLs in the application to use the custom domain

## User Preferences

```
Preferred communication style: Simple, everyday language.
```