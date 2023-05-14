import React from 'react';
import Sidebar from './Sidebar';
import Notes from '../Notes/Notes';

const Main = ({showNotes, toggleShowNotes, showFolder, toggleShowFolder, showRecent, toggleShowRecent, showNoteInput, toggleShowNoteInput, togglesShowConfirm}) => {
    
    return (
        <div className='main'>
            <div className="sidebar">
                <Sidebar toggleShowNotes={toggleShowNotes} toggleShowFolder={toggleShowFolder} toggleShowRecent={toggleShowRecent} toggleShowNoteInput={ toggleShowNoteInput} />
            </div>
            {showNotes && (
                <div className="all-notes">
                    <Notes toggleShowNoteInput={toggleShowNoteInput} togglesShowConfirm={ togglesShowConfirm} />
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
                <div className="all-notes">
                    <h3>Edit note here</h3>
                </div>
            )}
        </div>
    );
};

export default Main;