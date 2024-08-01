import React from "react";
import "../styles/Note.css";

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

    const getPriorityClass = (priority) => {
        switch (priority) {
            case 'high':
                return 'high-priority';
            case 'medium':
                return 'medium-priority';
            case 'low':
                return 'low-priority';
            default:
                return '';
        }
    };

    return (
        <div className={`note-container ${getPriorityClass(note.priority)}`}>
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>
        </div>
    );
}

export default Note;
