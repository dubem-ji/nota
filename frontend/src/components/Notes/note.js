import React, { useEffect, useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({ toggleShowNoteInput, deleteNote, note, userData, openFolderContent}) => {
  const [assignedColor, setAssignedColor] = useState('');

  const handleOpen = () => {
    openFolderContent(note.folder);
  };

  const handleDelete = () => {
    deleteNote(note.id)
  }

  const getFolderColor = () => {
    userData.folders.map((folder) => {
      if (folder.name === note.folder) {
        setAssignedColor(folder.color); 
      } 
      return ''
    })
  };

  useEffect(() => {
    getFolderColor();
  });

  return (
    <div className='note'>
      <div className="note-content">
        <div className="head">
          <h5>{note.date}</h5>
          <h4>{note.title}</h4>
        </div>
        <div className="content">
          {note.body.value}
        </div>
      </div>
      <div className="note-icon">
        {note.folder.length !== 0 ? (
          <div className="note-folder" style={{ color: `${assignedColor}` }} onClick={
            () => handleOpen()
          }>
            <FolderIcon sx={{ fontSize: '1rem' }} />
            <h5>{note.folder}</h5>
          </div>
        ) : (
          <div>
            
          </div>
        )}
        <div className="note-btns">
          <div onClick={
            () => toggleShowNoteInput()
          }>
            <BorderColorIcon sx={{ fontSize: '1rem', cursor: 'pointer' }} />
          </div>
          <div onClick={
            () => handleDelete()
          }>
            <DeleteIcon sx={{ fontSize: '1rem', cursor: 'pointer' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;