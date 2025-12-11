// auth.js
import api from "./base";

//export const register = (payload) => api.post("/auth/register", payload);
export const register = async (payload) => {
  console.log("Register payload:", payload); // 🔹 debug
  try {
    const response = await api.post("/auth/register", payload);
    console.log("Register response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Registration failed:", err.response?.data || err);
    throw err;
  }
};
//export const login = (payload) => api.post("/auth/login", payload);

export const login = async (payload) => {
  console.log("Login payload:", payload); // 🔹 debug
  try {
    const response = await api.post("/auth/login", payload);
    console.log("Login response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Login failed:", err.response?.data || err);
    throw err;
  }
};