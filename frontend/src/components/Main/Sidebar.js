import React from 'react';
import Createnote from '../Notes/createnote';

import NotesIcon from '@mui/icons-material/Notes';
import FolderCopySharpIcon from '@mui/icons-material/FolderCopySharp';

const Sidebar = ({toggleShowNotes, toggleShowFolder, toggleShowRecent, toggleShowNoteInput}) => {
    return (
        <>
            <div className="top">
                <div className="menu-item notes-icon" onClick={
                    () => toggleShowNotes()
                }>
                    <NotesIcon sx={{ fontSize: '1rem', color:'#DC3545' }} />
                    <h4>All Notes</h4>
                </div>
                <div className="menu-item folder-icon" onClick={
                    () => toggleShowFolder()
                }>
                    <FolderCopySharpIcon sx={{ fontSize: '1rem', color: '#42ba96' }} />
                    <h4>Folders</h4>
                </div>
            </div>
            <div className="bottom">
                <div className="menu-item add-note" onClick={
                    () => toggleShowNoteInput()
                }>
                    <Createnote />
                </div>
            </div>
        </>
    );
};

export default Sidebar;