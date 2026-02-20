# 🧊 3D Product Viewer Web Application

## 📌 Objective

Build a functional 3D Product Viewer Web Application using the MERN stack integrated with Three.js that demonstrates:

- Frontend development skills (React + Three.js)
- Backend API development (Node.js + Express)
- Database integration (MongoDB)
- 3D rendering and interaction capabilities
- Full project structuring and version control

---

# 🏗️ System Architecture

User (Browser)
    |
    v
React Frontend (Three.js Viewer)
    |
    v
Express Backend API
    |
    v
MongoDB Database
    |
    v
Local File Storage (Uploads)


### Flow Explanation

1. User uploads a `.glb/.gltf` file from frontend.
2. Backend receives and stores the file locally.
3. Backend returns file URL.
4. Frontend loads model using Three.js.
5. Viewer settings (background color, wireframe mode) are saved to MongoDB.
6. On refresh, frontend fetches saved configuration from backend.

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Three.js
- React Three Fiber

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer (for file uploads)

## Tools
- Git & GitHub
- Postman (API Testing)
- dotenv (Environment Variables)

---

# 📁 Folder Structure

3d-product-viewer/
│
├── client/                     # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Viewer.jsx
│       │   ├── ControlsPanel.jsx
│       │   └── Loader.jsx
|       |── context/
│       │   ├── ViewerContext.jsx
|       |── services/
│       │   ├── api.js
│       ├── App.jsx
│       └── main.jsx
│
├── server/                     # Backend
│   ├── controllers/
│   │   ├── uploadController.js
│   │   └── settingsController.js
│   ├── models/
│   │   └── ViewerSettings.js
│   ├── routes/
│   │   ├── uploadRoutes.js
│   │   └── settingsRoutes.js
│   ├── uploads/                # Stored 3D models
│   ├── config/
│   │   └── db.js
│   └── server.js
│
├── .gitignore
└── README.md



---

# ⚙️ Backend Implementation

## A. Model Upload API

### Endpoint

POST /api/upload

### Functionality

- Accept `.glb` or `.gltf`
- Store file locally in `/uploads`
- Return file URL

### Example Response

```json
{
  "success": true,
  "fileUrl": "http://localhost:5001/uploads/model.glb"
}

B. Save Viewer Settings API

Endpoint
POST /api/settings

Request Body
{
  "backgroundColor": "#ffffff",
  "wireframe": false
}
Settings are stored in MongoDB with timestamp.

⸻

C. Fetch Viewer Settings API

Endpoint
GET /api/settings

Returns latest saved configuration.

⸻

🗄️ Database Schema

ViewerSettings Schema
{
  backgroundColor: String,
  wireframe: Boolean,
  createdAt: Date
}



⸻

🔑 Important Technical Decisions

1. Local File Storage

Used local storage via Multer for simplicity and faster setup.

2. MongoDB for Viewer Settings

Allows persistent configuration across refresh.

3. React Three Fiber

Chosen for better React integration instead of raw Three.js.

4. Modular Backend Structure

Separated:
	•	Routes
	•	Controllers
	•	Models
Improves scalability and maintainability.

⸻

🚀 Deployment Instructions

Local Setup

1️⃣ Clone Repository
git clone https://github.com/your-username/3d-product-viewer.git
cd 3d-product-viewer

⸻

2️⃣ Backend Setup
cd server
npm install

Create .env file:
PORT=5001
MONGO_URI=your_mongodb_connection_string

Run backend:
npm run dev

⸻

3️⃣ Frontend Setup

cd client
npm install
npm start