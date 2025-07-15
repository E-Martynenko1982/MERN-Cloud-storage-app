import axios from "axios"

const API_URL = "http://localhost:5000/api/auth";

export const registerUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_URL}/registration`, {
      email,
      password
    })
    alert(response.data.message)
    return response.data;
  } catch (error) {
    alert(error.response.data.message)
  }
}

export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    })
    localStorage.setItem("token", response.data.token)
    return response.data.user;
  } catch (error) {
    alert(error.response.data.message)
  }
}

export const checkAuthRequest = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const response = await axios.get(`${API_URL}/auth`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    localStorage.setItem("token", response.data.token);
    return response.data.user;
  } catch (error) {
    alert(error.response.data.message);
    localStorage.removeItem("token");
  }

}