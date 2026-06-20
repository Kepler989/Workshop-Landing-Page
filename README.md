# Workshop Landing Page

A full-stack MERN application built for Kidrove to manage registrations for the AI & Robotics Summer Workshop. This project features a fully responsive landing page and a secure API endpoint for handling student enrollments.

## Features

- **Responsive UI:** Built with React and Tailwind CSS, fully optimized for desktop and mobile devices.
- **Form Validation:** Real-time frontend validation and robust backend validation using Zod.
- **Loading States:** Seamless user experience with visual feedback during form submission.
- **RESTful API:** Express backend with an endpoint to handle incoming registration requests.
- **Database Integration:** MongoDB integration using Mongoose to store user enquiries securely.
- **Type Safety:** 100% written in TypeScript for both frontend and backend to minimize runtime errors.

## Tech Stack

**Frontend:**
- React 18
- Vite
- TypeScript
- Tailwind CSS
- Lucide React (Icons)

**Backend:**
- Node.js
- Express.js
- TypeScript
- MongoDB & Mongoose
- Zod (Schema Validation)
- Cors & Dotenv

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- MongoDB (Running locally or a MongoDB Atlas URI)

## Project Structure

## Project Structure

```text
workshop/
├── backend/       # Express server, MongoDB models, API routes
└── frontend/      # React application, Tailwind styling, UI components
```
## Installation & Setup

### 1. Backend Setup
Navigate to the backend directory and install dependencies:
cd backend
npm install

Create a `.env` file in the `backend` root and add your configuration:
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/kidrove_db

Start the backend development server:
npm run dev

### 2. Frontend Setup
Open a new terminal window, navigate to the frontend directory, and install dependencies:
cd frontend
npm install

Start the Vite development server:
npm run dev

The application will now be running. The frontend typically runs on `http://localhost:5173` and the backend on `http://localhost:5000`.

## API Documentation

### Register for Workshop
- **Endpoint:** `/api/enquiry`
- **Method:** `POST`
- **Body:**
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 9876543210"
  }
- **Success Response:** `201 Created`
  {
    "success": true,
    "message": "Registration successful!"
  }
- **Error Response:** `400 Bad Request` (Validation errors) or `500 Server Error`

## Deployment Suggestions
- **Frontend:** Can be easily deployed on Vercel or Netlify.
- **Backend:** Can be deployed on Render, Railway, or Heroku. Make sure to update the CORS settings and database URI in production.
