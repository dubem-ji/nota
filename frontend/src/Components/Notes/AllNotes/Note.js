import React from 'react';
import { Link } from 'react-router-dom';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import FolderSharpIcon from '@mui/icons-material/FolderSharp';

const Note = () => {
    return (
        <div className='note'>
            <div className="note-info">
                <div className="date">
                    <WatchLaterSharpIcon sx={{fontSize:'1.2rem' }} />
                    <h5>June 2, 2023</h5>
                </div>
                <div className="title">
                    <h3>Excepteur sint occaeuiecat</h3>
                </div>
            </div>
            <div className="note-content">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, blanditiis. Harum repellat quaerat distinctio expedita cupiditate quae rem at odio.</p>
            </div>
            <div className="note-folder">
                <FolderSharpIcon sx={{fontSize:'1.2rem' }} />
                <h5>personal</h5>
            </div>
        </div>
    )
};

export default Note;