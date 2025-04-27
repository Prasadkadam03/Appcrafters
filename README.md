# Resource Manager

Resource Manager is a full-stack web application for managing resources (items, assets, etc.) with create, read, update, and delete (CRUD) functionality. It uses **React** (with TypeScript and TailwindCSS) for the frontend and **Node.js** with **Express** (and TypeScript) for the backend. Both frontend and backend use **Zod** for data validation, and **Axios** for API requests.

## Features

- **CRUD Operations**: Create, read, update, and delete resources through a simple web interface.  
- **Data Validation**: User input and API data are validated on both frontend and backend using Zod schemas.  
- **API Communication**: Frontend communicates with the backend using Axios for easy HTTP requests.  
- **Responsive UI**: Built with React and styled using TailwindCSS for a clean, responsive design.  

## Technology Stack

- **Frontend:** React, TypeScript, TailwindCSS  
- **Backend:** Node.js, Express, TypeScript  
- **Validation:** Zod (frontend & backend)  
- **API:** Axios for handling HTTP requests  

## Prerequisites

- **Node.js** (version 14 or higher) installed on your system.  
- **npm** (comes with Node.js) or **Yarn** package manager.  

Verify installation by running in your terminal:
```bash
node -v
npm -v
# or if using Yarn
yarn -v
```

## Setup Instructions

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/Prasadkadam03/Appcrafters.git
   cd resource-manager
   ```

2. **Install backend dependencies:**  
   ```bash
   cd backend
   npm install
   # or yarn install
   ```

3. **Install frontend dependencies:**  
   ```bash
   cd ../frontend
   npm install
   # or yarn install
   ```

4. **Run the backend server:**  
   In the `backend` directory, start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```  
   The backend server should start (commonly on `http://localhost:5000`).

5. **Run the frontend development server:**  
   In the `frontend` directory, start the React app:
   ```bash
   npm run dev
   # or if using Create React App: npm start
   ```
   This will start the frontend (commonly at `http://localhost:3000`) and open it in your browser.

6. **View the app:**  
   Open your browser and navigate to `http://localhost:3000` (or the URL shown in the terminal) to use the Resource Manager app. 

## Project Structure

The project is organized into two main folders, each with its own source code and dependencies:

```
ResourceManager/
├── backend/         # Node.js + Express API code
│   ├── src/
│   │   ├── routes/ 
│   │        ├── resources.ts     # Express route definitions
│   │   
│   ├── package.json
│   └── tsconfig.json
├── frontend/             # React (TypeScript) client
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── hooks/        # Hooks  
│   │   ├── pages/        # Page-level components
│   │   └── App.tsx       # Main app component
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
└── README.md        # This file
```

- The **backend** folder contains the Express server code (written in TypeScript). Zod schemas validate incoming requests.  
- The **frontend** folder contains the React application code. Forms and inputs use Zod for client-side validation, and Axios to call the backend API.  
- Each part has its own `package.json` and is run separately.

## Author

Built by @prasadkadam03