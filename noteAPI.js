import axios from "axios";
const API_URL = "http://localhost:5000/api/notes";

export const fetchNotes = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log("The response is:", response);
        return response;
    } catch (err) {
        console.error("Error fetching notes:", err);
        throw err;
    }
};

export const createNote = async (noteData) => {
    try {
        const response = await axios.post(API_URL, noteData);
        console.log("The response is:", response);
        return response;
    } catch (err) {
        console.error("Error creating note:", err);
        throw err;
    }
};

export const editNote = async (id, noteData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, noteData);
        console.log("The response is:", response);
        return response;
    } catch (err) {
        console.error("Error editing note:", err);
        throw err;
    }
};

export const deleteNote = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        console.log("The response is:", response);
        return response;
    } catch (err) {
        console.error("Error deleting note:", err);
        throw err;
    }
};
