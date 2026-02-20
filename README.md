# 🧊 3D Product Viewer Web Application

A full-stack MERN application that allows users to upload and interact with 3D product models using modern web technologies.

---

## 📌 Objective

The goal of this project is to build a functional **3D Product Viewer Web Application** using the **MERN stack** integrated with **Three.js** that demonstrates:

- Frontend development skills (React + Three.js)
- Backend API development (Node.js + Express)
- Database integration (MongoDB)
- 3D rendering and interaction capabilities
- Clean modular architecture
- Full project structuring and version control

---

## 🏗️ System Architecture

```
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
```

---

## 🔄 Application Flow

1. User uploads a `.glb` or `.gltf` file from the frontend UI.
2. Backend receives the file using Multer middleware.
3. The uploaded model is stored in the `/uploads` directory.
4. Backend returns a public file URL.
5. Frontend loads the 3D model using Three.js.
6. Viewer settings (background color, wireframe mode) are saved in MongoDB.
7. On refresh, frontend fetches saved settings and restores the viewer state.

---

## 🛠️ Tech Stack

### 🎨 Frontend
- React.js
- Three.js
- React Three Fiber
- Axios

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer (File Upload Handling)

### 🧰 Tools & Utilities
- Git & GitHub
- Postman (API Testing)
- dotenv (Environment Variables)

---

## 📁 Folder Structure

```
3d-product-viewer/
│
├── client/                       # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Viewer.jsx
│       │   ├── ControlsPanel.jsx
│       │   └── Loader.jsx
│       ├── context/
│       │   └── ViewerContext.jsx
│       ├── services/
│       │   └── api.js
│       ├── App.jsx
│       └── main.jsx
│
├── server/                       # Backend
│   ├── controllers/
│   │   ├── uploadController.js
│   │   └── settingsController.js
│   ├── models/
│   │   └── ViewerSettings.js
│   ├── routes/
│   │   ├── uploadRoutes.js
│   │   └── settingsRoutes.js
│   ├── uploads/                  # Uploaded 3D models
│   ├── config/
│   │   └── db.js
│   └── server.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Backend APIs

### 📤 Model Upload API

**Endpoint**
```
POST /api/upload
```

**Functionality**
- Accepts `.glb` / `.gltf` files
- Stores files locally in `/uploads`
- Returns the public file URL

**Sample Response**
```json
{
  "success": true,
  "fileUrl": "http://localhost:5001/uploads/model.glb"
}
```

---

### 💾 Save Viewer Settings API

**Endpoint**
```
POST /api/settings
```

**Request Body**
```json
{
  "backgroundColor": "#ffffff",
  "wireframe": false
}
```

**Description**
- Saves viewer configuration
- Stores data in MongoDB with timestamp

---

### 📥 Fetch Viewer Settings API

**Endpoint**
```
GET /api/settings
```

**Description**
- Fetches the most recent saved viewer configuration

---

## 🗄️ Database Schema

### ViewerSettings Schema

```js
{
  backgroundColor: String,
  wireframe: Boolean,
  createdAt: Date
}
```

---

## 🔑 Important Technical Decisions

### 1️⃣ Local File Storage
Used Multer with local storage for simplicity and quick setup. Suitable for demo and development environments.

### 2️⃣ MongoDB for Viewer Settings
Ensures viewer configuration persists across refreshes.

### 3️⃣ React Three Fiber
Chosen for better React integration compared to raw Three.js.

### 4️⃣ Modular Backend Architecture
Clear separation of:
- Routes
- Controllers
- Models

Improves scalability and maintainability.

---

## 🚀 Deployment Instructions

### 🖥️ Local Setup

#### 1️⃣ Clone Repository
```bash
git clone https://github.com/mKumar82/3d-product-viewer
cd 3d-product-viewer
```

---

#### 2️⃣ Backend Setup
```bash
cd server
npm install
```

Create `.env` file:
```
PORT=5001
MONGO_URI=your_mongodb_connection_string
```

Run backend:
```bash
npm run dev
```

---

#### 3️⃣ Frontend Setup
```bash
cd client
npm install
npm start
```

---

## 👨‍💻 Author

**Manish Kumar Yadav**  
Full Stack Developer (MERN)

---