const Note = require("../models/Note");

exports.createNote = async (req, res) => {
    try {
        const { title, content, date } = req.body; 
        const newNote = new Note({ title, content, date });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, date } = req.body; 
        const updatedNote = await Note.findByIdAndUpdate(
            id,
            { title, content, date },
            { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        } else {
            res.status(200).json(updatedNote);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedNote = await Note.findByIdAndDelete(id);

        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        } else {
            res.status(200).json({ message: "Note deleted successfully" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
