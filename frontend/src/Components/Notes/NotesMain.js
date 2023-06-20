import React from 'react';
import AllNotes from './AllNotes/AllNotes';
import FullNote from './Note/FullNote';

const NotesMain = () => {
    return (
        <div className="notes-main">
        <AllNotes />
        <FullNote />
        </div>
    )
};

export default NotesMain;