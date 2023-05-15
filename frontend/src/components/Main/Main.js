import React from 'react';
import Sidebar from './Sidebar';
import Notes from '../Notes/Notes';
import NoteInput from '../Notes/NoteInput';

const Main = ({showNotes, toggleShowNotes, showFolder, toggleShowFolder, showRecent, toggleShowRecent, showNoteInput, toggleShowNoteInput, togglesShowConfirm, notesData}) => {
    
    return (
        <div className='main'>
            <div className="sidebar">
                <Sidebar toggleShowNotes={toggleShowNotes} toggleShowFolder={toggleShowFolder} toggleShowRecent={toggleShowRecent} toggleShowNoteInput={ toggleShowNoteInput} />
            </div>
            {showNotes && (
                <div className="all-notes">
                    <Notes toggleShowNoteInput={toggleShowNoteInput} togglesShowConfirm={ togglesShowConfirm} notesData={notesData} />
                </div>
            )}
             {showFolder && (
                <div className="all-notes">
                    <h3>All folders</h3>
                </div>
            )}
             {showRecent && (
                <div className="all-notes">
                    <h3>Recent</h3>
                </div>
            )}
            {showNoteInput && (
                <div className="note-input">
                    <NoteInput />
                </div>
            )}
        </div>
    );
};

export default Main;