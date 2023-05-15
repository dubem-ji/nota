import React from 'react';
import Note from './note';

const Notes = ({toggleShowNoteInput, togglesShowConfirm, notesData}) => {
    return (
        <>
            {
                notesData.map((note) => {
                    return <Note key={note.id} toggleShowNoteInput={toggleShowNoteInput} togglesShowConfirm={togglesShowConfirm} note={ note} />
                })
            }
        </>
    );
};

export default Notes;