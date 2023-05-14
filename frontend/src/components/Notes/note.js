import React from 'react';
import Label from '../Labels.js/Label';

import FolderIcon from '@mui/icons-material/Folder';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = () => {
  return (
    <div className='note'>
      <div className="note-content">
        <div className="head">
          <h5>20 APR</h5>
          <h4>The Title</h4>
        </div>
        <div className="tags">
          <Label />
          <Label />
        </div>
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi enim iusto esse. Animi dignissimos amet corrupti, minus inventore quibusdam!</p>
        </div>
      </div>
      <div className="note-icon">
        <div className="note-folder">
          <FolderIcon sx={{fontSize:'1rem'}} />
          <h5>Personal</h5>
        </div>
        <div className="note-btns">
          <BorderColorIcon sx={{fontSize:'1rem', cursor: 'pointer'}}/>
          <DeleteIcon sx={{fontSize:'1rem', cursor: 'pointer'}}/>
        </div>
      </div>
    </div>
  )
}

export default Note;