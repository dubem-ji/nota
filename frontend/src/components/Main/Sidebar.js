import React from 'react';
import Createnote from '../Notes/createnote';
import AddLabel from '../Labels.js/AddLabel';

import NotesIcon from '@mui/icons-material/Notes';
import FolderCopySharpIcon from '@mui/icons-material/FolderCopySharp';
import StarIcon from '@mui/icons-material/Star';

const Sidebar = () => {
    return (
        <>
            <div className="top">
                <div className="menu-item notes-icon">
                    <NotesIcon sx={{ fontSize: '1rem', color:'#DC3545' }} />
                    <h4>All Notes</h4>
                </div>
                <div className="menu-item folder-icon">
                    <FolderCopySharpIcon sx={{ fontSize: '1rem', color: '#42ba96' }} />
                    <h4>Folders</h4>
                </div>
                <div className="menu-item recents-icon">
                    <StarIcon sx={{ fontSize: '1rem', color: '#f3e36f' }} />
                    <h4 >Recent</h4>
                </div>
            </div>
            <div className="bottom">
                <div className="menu-item add-label">
                    <AddLabel />
                </div>
                <div className="menu-item add-note">
                    <Createnote />
                </div>
            </div>
        </>
    );
};

export default Sidebar;