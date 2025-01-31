const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./backend/configs/db");
const noteRoutes = require("./backend/routes/note");
const userRoutes = require("./backend/routes/user"); 
const cors = require("cors");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/api/notes", noteRoutes);

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
