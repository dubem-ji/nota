import React from 'react';
import Note from '../Notes/note';

const FolderContents = ({ notesData, toggleShowNoteInput, deleteNote, currentFolder, userData, openFolderContent }) => {
    if (!notesData || notesData.length === 0) {
        return <p>No Notes</p>
    }

    return (
        <>
            {
                notesData.map((note) => {
                    if (note.folder === currentFolder) {
                        return <Note key={note.id} toggleShowNoteInput={toggleShowNoteInput} note={note} deleteNote={deleteNote} userData={userData} openFolderContent={ openFolderContent} />
                    } else {
                        return ''
                    }
                })
            }
        </>
    );
};

export default FolderContents;