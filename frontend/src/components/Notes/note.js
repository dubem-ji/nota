import React from 'react';
import Label from '../Labels.js/Label';

import FolderIcon from '@mui/icons-material/Folder';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({ toggleShowNoteInput, deleteNote, note }) => {
  const tags = note.tags

  const handleDelete = () => {
    deleteNote(note.id)
  }

  return (
    <div className='note'>
      <div className="note-content">
        <div className="head">
          <h5>{note.date}</h5>
          <h4>{note.title}</h4>
        </div>
        <div className="tags">
          {tags.map((tag) => [
            <Label key={tag.indexOf()} tag={tag} />
          ])}
        </div>
        <div className="content">
          {note.body.value}
        </div>
      </div>
      <div className="note-icon">
        <div className="note-folder">
          <FolderIcon sx={{ fontSize: '1rem' }} />
          <h5>{note.folder}</h5>
        </div>
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