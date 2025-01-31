import React, { useState, useEffect } from "react";
import { fetchNotes, createNote, editNote, deleteNote } from "../api/noteAPI";

const NoteList = ({ isCreating }) => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [message, setMessage] = useState("");
  const [filterDate, setFilterDate] = useState("");

  useEffect(() => {
    const loadNotes = async () => {
      const { data } = await fetchNotes();
      setNotes(data);
      setFilteredNotes(data);
    };
    loadNotes();
  }, []);

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000);
  };

  const filterNotesByDate = () => {
    if (filterDate) {
      const filtered = notes.filter((note) => note.date.startsWith(filterDate));
      setFilteredNotes(filtered);
    } else {
      setFilteredNotes(notes);
    }
  };

  useEffect(() => {
    filterNotesByDate();
  }, [filterDate, notes]);

  const insertNote = async () => {
    const newNote = { title, content };
    const { data } = await createNote(newNote);
    setNotes([...notes, data]);
    setTitle("");
    setContent("");
    showMessage("Note successfully added!");
  };

  const startEdit = (note) => {
    setEditingNoteId(note._id);
    setTitle(note.title);
    setContent(note.content);
  };

  const cancelEdit = () => {
    setEditingNoteId(null);
    setTitle("");
    setContent("");
  };

  const updateNote = async () => {
    const updatedNote = { title, content };
    const { data } = await editNote(editingNoteId, updatedNote);
    setNotes(notes.map((note) => (note._id === editingNoteId ? data : note)));
    cancelEdit();
    showMessage("Note successfully updated!");
  };

  const deleteNotes = async (id) => {
    await deleteNote(id);
    setNotes(notes.filter((note) => note._id !== id));
    showMessage("Note successfully deleted!");
  };

  return (
    <div>
      <h1>{isCreating ? "Create Note" : "Note List"}</h1>

      {message && (
        <div style={{ marginBottom: "10px", color: "black", fontWeight: "bold" }}>
          {message}
        </div>
      )}

      {!isCreating && (
        <>
          <div>
            <label>Filter by Date: </label>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </div>
          <ul>
            {filteredNotes.map((note) => (
              <li key={note._id}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <p>Date: {note.date}</p>
                <button onClick={() => deleteNotes(note._id)}>Delete</button>
                <button onClick={() => startEdit(note)}>Edit</button>

                {editingNoteId === note._id && (
                  <div
                    style={{
                      marginTop: "10px",
                      border: "1px solid #ccc",
                      padding: "10px",
                    }}
                  >
                    <h4>Edit Note</h4>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Edit Title"
                    />
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Edit Content"
                      rows="4"
                    />
                    <div>
                      <button onClick={updateNote}>Save</button>
                      <button onClick={cancelEdit}>Cancel</button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      {isCreating && (
        <div className="form-container">
          <label>Note Title</label>
          <input
            type="text"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Note Content</label>
          <textarea
            placeholder="Note Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
          />
          <button onClick={insertNote}>Add Note</button>
        </div>
      )}
    </div>
  );
};

export default NoteList;
