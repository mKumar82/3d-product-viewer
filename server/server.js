import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

// Static folder for uploaded models
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const uploadPath = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}
app.use("/uploads", express.static(uploadPath));

// Routes
app.use("/api/upload", uploadRoutes);
app.use("/api/settings", settingsRoutes);

// Health Check
app.get("/", (req, res) => {
  res.send("3D Viewer Backend Running...");
});

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
