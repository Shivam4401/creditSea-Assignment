CreditSea Report Dashboard

A full-stack web application to upload and view credit reports. The app allows users to upload XML credit report files, stores the data in MongoDB, and displays the reports in a clean React dashboard.


Features:-

    Upload XML credit report files.
    
    View user credit details in sections:
    
        Basic Details
        Report Summary
        Credit Accounts
    
    Backend built with Node.js, Express, MongoDB (Mongoose).
    
    Frontend built with React.js.
    
    Deployment-ready for platforms like Render.



Tech Stack

    ⦁Frontend: React.js, Tailwind CSS
    
    ⦁Backend: Node.js, Express
    
    ⦁Database: MongoDB (Atlas)
    
    ⦁Other Tools: Axios, Multer, xml2js, React Context API


Setup & Run Instructions

    Prerequisites
    
        Node.js & npm installed
        
        MongoDB Atlas account (or local MongoDB)
        
        Git (to clone the repository)

    1. Clone the Repository
    git clone <your-repo-url>
    cd creditsea-app

    2. Backend Setup
    cd backend
    npm install
    
    
    Create a .env file in the backend folder with:
    
    MONGO_URI=<your-mongodb-connection-string>
    PORT=3000
    
    
    Start the backend server:
    
    npm run dev
    
    
    Backend will run at http://localhost:3000

    3. Frontend Setup
    cd frontend
    npm install
    npm start
    
    
    Frontend will run at http://localhost:5173

Usage

    Open the app in the browser.
    
    Upload a credit report XML file.
    
    View the generated report dashboard with:
    
      User’s basic details
      Credit summary
      All credit accounts



Notes

  
    PAN numbers are unique in the database.
    
    
    XML files with missing PAN are allowed, but duplicates are skipped.
    
    
    React frontend fetches data from backend APIs.


Deployment

    
    Backend and frontend can be deployed on Render.
    
    
    For backend, set environment variables in Render (like MONGO_URI and PORT).
    
    
    Build the frontend (npm run build) and serve it from the backend or deploy separately as a static site.


