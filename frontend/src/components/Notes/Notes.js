import React from 'react';
import Note from './note';

const Notes = ({toggleShowNoteInput, deleteNote, notesData, userData, openFolderContent}) => {

    if (!notesData || notesData.length === 0) {
        return <p>No Notes</p>
    }
    return (
        <>
            {
                notesData.map((note) => {
                    return <Note key={note.id} toggleShowNoteInput={toggleShowNoteInput} note={note} deleteNote={deleteNote} userData={userData} openFolderContent={ openFolderContent} />
                })
            }
        </>
    );
};

export default Notes;