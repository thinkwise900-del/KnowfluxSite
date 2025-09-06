# Knowflux Company Website

## Overview

Knowflux is a React-based company website showcasing an AI startup's portfolio of products and services. The site features a modern, responsive design built with TypeScript, React, and Tailwind CSS. It serves as a marketing and lead generation platform for the company's four MVP products: Loomiya (business process simulator), Gabi (delivery platform), Bernos (workflow automation), and PeakTalent (AI recruitment).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with minimal bundle size
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Radix UI primitives with custom shadcn/ui components for consistent, accessible interface elements
- **State Management**: TanStack Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js for HTTP server and API endpoints
- **Database Layer**: Drizzle ORM configured for PostgreSQL with schema-first approach
- **Database**: Neon Database (PostgreSQL) for cloud-hosted data persistence
- **Storage**: Memory storage implementation with interface for easy database migration
- **API Design**: RESTful endpoints with validation using Zod schemas

### Data Storage Solutions
- **ORM**: Drizzle ORM with TypeScript integration for type-safe database operations
- **Schema Management**: Centralized schema definitions in `/shared/schema.ts` for client-server consistency
- **Migrations**: Drizzle Kit for database schema migrations and version control
- **Validation**: Zod schemas for runtime type checking and data validation

### Authentication and Authorization
- Currently implements a simple contact form system without user authentication
- Session management configured with `connect-pg-simple` for future user features
- API endpoints use basic validation without authentication requirements

### Development and Build Process
- **Development**: Hot module replacement with Vite dev server and Express API proxy
- **Production**: Static site generation with server-side API deployment
- **TypeScript**: Strict type checking across client, server, and shared code
- **Code Organization**: Monorepo structure with separate client, server, and shared directories

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form with validation resolvers
- **UI Framework**: Radix UI component primitives for accessibility and customization
- **Styling**: Tailwind CSS with PostCSS for utility-first styling approach
- **Icons**: Lucide React for consistent iconography throughout the application

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database with automatic scaling
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **Database Validation**: Drizzle-Zod integration for schema validation

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Development**: tsx for TypeScript execution and hot reloading
- **Replit Integration**: Cartographer plugin and runtime error overlay for development environment

### Utility Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Class Management**: clsx and class-variance-authority for conditional styling
- **Carousel**: Embla Carousel React for product showcases and interactive elements
- **Command Interface**: cmdk for search and command functionality