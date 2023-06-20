import React from 'react';
import NavBar from '../../General/NavBar';
import Note from './Note';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';

const AllNotes = () => {
  return (
    <div className='all-notes'>
      <NavBar />
      <div className="body">
        <div className="tabs">
          <h4 className='notes-link'>All Notes</h4>
          <h4 className='folders-link'>Folders</h4>
        </div>
        <div className="notes">
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
        <div className="add-btn">
          <AddCircleSharpIcon sx={{fontSize:'2rem' }} />
        </div>
      </div>
    </div>
  );
};

export default AllNotes;