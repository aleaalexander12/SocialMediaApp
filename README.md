# Creatify - Social Media App

Creatify is a full-stack social media web application — but enhanced with a modern UI and personalized creative experience. Users can share images, like posts, comment, follow others, and more.

## Features

-  Home Feed with Posts
-  Create & Upload Posts
-  Like Toggle (Heart Animation)
-  Comment System (Add/Edit/Delete)
-  Follow/Unfollow Users
-  Edit/Delete/Update Captions
-  Profile Page with Posts & Bio
-  Responsive Design (Desktop-first, optimized for mobile later)
-  Real-time feel with smooth UX

---

## Tech Stack

###  Frontend
- React.js + React Router
- Redux Toolkit (Global State)
- Tailwind CSS (Styling)
- Axios (API requests)
- Lucide Icons (UI Icons)

###  Backend
- Node.js + Express.js
- MongoDB (Mongoose)
- Firebase (Image Upload)

---

## Getting Started

### Prerequisites

Make sure you have:
- Node.js v16+
- MongoDB running locally
- Firebase project set up (for image uploads)

---

### 🧩 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/creatify-app.git
cd creatify-app

# 2. Install dependencies for client and server
cd client && npm install
cd ../backend && npm install

# 3. Start the servers
cd backend && npm run dev      # Starts Express API at http://localhost:4000
cd ../client && npm run dev    # Starts React app at http://localhost:5173
