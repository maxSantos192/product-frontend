# Product Frontend

This is a React application for managing products and categories, connected to the Product API.

## Technologies Used

- **Vite + React + TypeScript**: Modern development environment for fast and efficient frontend building.
- **React Router DOM**: For client-side routing.
- **Axios**: For API requests.
- **Zod + React Hook Form**: For form validation and handling.
- **TailwindCSS**: For styling the components.
- **Shadcn UI**: For modern and accessible UI components.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn, npm or pnpm installed

### Installation

1. Clone the repository

2. Navigate to the API directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at http://localhost:5173.
Make sure your API server (backend) is running at http://localhost:3000, or update the API base URL in .env file if necessary.

## Pages

### Products

- `/product`: List all products.

### Product Form

- `/product/:id`: Edit an existing product.
- `/product/0`: Create a new product.
