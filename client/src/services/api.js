import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api",
});

export const uploadModel = (file) => {
  const formData = new FormData();
  formData.append("model", file);

  return API.post("/upload", formData);
};

export const saveSettings = (data) => API.post("/settings", data);

export const getSettings = () => API.get("/settings");
