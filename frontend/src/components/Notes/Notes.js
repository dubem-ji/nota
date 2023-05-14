import React from 'react';
import Note from './note';

const Notes = ({toggleShowNoteInput, togglesShowConfirm}) => {
    return (
        <>
            <Note toggleShowNoteInput={ toggleShowNoteInput} togglesShowConfirm={togglesShowConfirm}/>
            <Note toggleShowNoteInput={ toggleShowNoteInput} togglesShowConfirm={togglesShowConfirm}/>
            <Note toggleShowNoteInput={ toggleShowNoteInput} togglesShowConfirm={togglesShowConfirm}/>
            <Note toggleShowNoteInput={ toggleShowNoteInput} togglesShowConfirm={togglesShowConfirm}/>
            <Note toggleShowNoteInput={ toggleShowNoteInput} togglesShowConfirm={togglesShowConfirm}/>
            <Note toggleShowNoteInput={ toggleShowNoteInput} togglesShowConfirm={togglesShowConfirm}/>
            <Note toggleShowNoteInput={ toggleShowNoteInput} togglesShowConfirm={togglesShowConfirm}/>
            <Note toggleShowNoteInput={ toggleShowNoteInput} togglesShowConfirm={togglesShowConfirm}/>
            <Note toggleShowNoteInput={ toggleShowNoteInput} togglesShowConfirm={togglesShowConfirm}/>
            <Note toggleShowNoteInput={ toggleShowNoteInput} togglesShowConfirm={togglesShowConfirm}/>
            <Note toggleShowNoteInput={ toggleShowNoteInput} togglesShowConfirm={togglesShowConfirm}/>
        </>
    );
};

export default Notes;