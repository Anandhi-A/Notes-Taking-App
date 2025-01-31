const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: String, default: () => new Date().toISOString() }, // Automatically set the current date
});

module.exports = mongoose.model("Note", noteSchema);
