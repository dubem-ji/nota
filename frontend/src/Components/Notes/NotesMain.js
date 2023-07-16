import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import AllNotes from './AllNotes/AllNotes';
import FullNote from './Note/FullNote';

const NotesMain = () => {
    // const [showFN, setShowFN] = useState(false);
    
    

    return (
        <div className="notes-main">
            <AllNotes />
            <FullNote />
        </div>
    );
};

export default NotesMain;