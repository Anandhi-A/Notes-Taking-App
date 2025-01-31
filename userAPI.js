import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export const signupUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        console.log("Signup response:", response);
        return response;
    } catch (err) {
        console.error("Error signing up user:", err);
        throw err;
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        console.log("Login response:", response);
        return response;
    } catch (err) {
        console.error("Error logging in user:", err.response?.data || err.message);
        throw err;
    }
};
