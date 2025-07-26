# Developer Portfolio Application

## Overview

This is a full-stack web application built as a developer portfolio showcase. The application uses a modern tech stack with React frontend, Express backend, and PostgreSQL database, all configured for deployment on Replit.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: React Query for server state management
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **API Pattern**: RESTful API design
- **Error Handling**: Global error middleware for consistent error responses
- **Logging**: Custom request logging middleware for API endpoints

### Data Storage
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM for type-safe database operations
- **Development Storage**: In-memory storage implementation for development
- **Migrations**: Drizzle Kit for database schema management
- **Database Provider**: Neon Database (serverless PostgreSQL)

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure
- **Portfolio Table**: Comprehensive portfolio data including personal info, skills, experience, and projects
- **Type Safety**: Zod schemas for runtime validation

### Frontend Pages
- **Portfolio Page**: Main showcase page displaying developer information
- **404 Page**: Not found page with helpful messaging
- **Component Library**: Full Shadcn/ui component suite for consistent UI

### API Endpoints
- `GET /api/portfolio`: Returns portfolio data (currently static)
- Extensible structure for additional CRUD operations

### Development Tools
- **Hot Reload**: Vite HMR for instant development feedback
- **TypeScript**: Full type safety across frontend and backend
- **Path Aliases**: Organized imports with @ prefixes
- **Replit Integration**: Custom plugins for Replit environment

## Data Flow

1. **Client Request**: React components make API calls using React Query
2. **API Processing**: Express routes handle requests and interact with storage layer
3. **Data Storage**: Drizzle ORM manages database operations (or in-memory for development)
4. **Response**: JSON data returned to client and cached by React Query
5. **UI Update**: React components re-render with new data

## External Dependencies

### Core Dependencies
- **UI Components**: Radix UI primitives for accessible components
- **Database**: Neon Database for serverless PostgreSQL
- **Authentication**: Session management with connect-pg-simple
- **Form Handling**: React Hook Form with Zod resolvers
- **Date Handling**: date-fns for date operations
- **Icons**: Lucide React for consistent iconography

### Development Dependencies
- **Build Tools**: Vite, ESBuild for fast builds
- **Type Checking**: TypeScript with strict configuration
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer

## Deployment Strategy

### Development
- **Command**: `npm run dev` - Starts both Vite dev server and Express API
- **Storage**: In-memory storage for rapid development
- **Hot Reload**: Full stack hot reloading enabled

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations applied via `npm run db:push`

### Environment Configuration
- **DATABASE_URL**: Required for PostgreSQL connection
- **NODE_ENV**: Controls development vs production behavior
- **Static Files**: Express serves built React app in production

### Replit Optimizations
- **Error Overlay**: Custom error modal for development
- **Cartographer**: Code exploration tools in development
- **Banner Integration**: Replit development banner for external access

The application is designed to be easily extensible, with clear separation between development and production configurations, and a flexible architecture that supports both static content and dynamic database-driven features.

## Recent Changes

### January 25, 2025
- Made portfolio fully responsive for mobile, tablet, and desktop devices
- Updated skills section with comprehensive technology stack including TypeScript, Node.js, Remix, React, Kafka, Redis, Docker, JavaScript, PostgreSQL, MySQL, MongoDB, Express, Prisma, Mongoose, Git, Golang, and Turborepo
- Improved tab navigation with shorter labels on mobile devices
- Fixed CSS import order and removed duplicate imports