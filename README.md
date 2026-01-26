# 🏥 Doctor--Patient--Lab Management System

A full-stack web application that enables labs to upload diagnostic
reports, doctors to review patient records, and patients to securely
view their medical test results with clear visual indicators for normal
and abnormal values.

------------------------------------------------------------------------

## 🧱 Architecture Overview

### Frontend (React + Context API)

-   Built using React (Vite)
-   Global state managed via Context API
-   Routing handled by React Router
-   Tailwind CSS for responsive UI and animations

### Backend (Node.js + Express)

-   REST API with Express.js
-   MVC-style controllers
-   Middleware for validation and error handling

### Database (MongoDB)

-   Mongoose schemas for Doctor, Patient, and Lab Records
-   Proper references between doctors and patients

------------------------------------------------------------------------

## ⚡ UI Performance

-   Minimal re-renders using Context API
-   Centralized API calls
-   Tailwind CSS for lightweight styling
-   CSS-based animations (no heavy JS libraries)

------------------------------------------------------------------------

## 🚀 How to Run

### Backend

``` bash
cd backend
npm install
npm run dev
```

Create `.env`:

``` env
PORT=4000
MONGO_URI=your_mongodb_uri
```

### Frontend

``` bash
cd frontend
npm install
npm run dev
```

Create `.env`:

``` env
VITE_BACKEND_URL=http://localhost:4000
```

------------------------------------------------------------------------

## 🎨 Features

-   Lab uploads diagnosis results
-   Doctors review patient history
-   Patients view reports with normal/abnormal indicators
-   Smooth UI animations and responsive design

------------------------------------------------------------------------

## 👨‍💻 Author

Yagyesh Goyal --- Final Year CSE Student
yagyeshgoyal456@gmail.com
8518916148
