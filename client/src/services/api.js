import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_ASSET_BASE_URL}/api`,
});

export const uploadModel = (file) => {
  const formData = new FormData();
  formData.append("model", file);

  return API.post("/upload", formData);
};

export const saveSettings = (data) => API.post("/settings", data);

export const getSettings = () => API.get("/settings");
