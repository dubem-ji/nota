import React from 'react';
import Note from './note';

const Notes = ({toggleShowNoteInput, deleteNote, notesData}) => {

    if (!notesData || notesData.length === 0) {
        return <p>No Notes</p>
    }
    return (
        <>
            {
                notesData.map((note) => {
                    return <Note key={note.id} toggleShowNoteInput={toggleShowNoteInput} note={ note} deleteNote={deleteNote} />
                })
            }
        </>
    );
};

export default Notes;