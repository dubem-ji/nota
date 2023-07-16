import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={{
            pathname: '/folders'
          }}>
            <h4 className='folders-link'>Folders</h4>
          </Link>
        </div>
        <div className="notes">
          <Note />
        </div>
        <div className="add-btn">
          <AddCircleSharpIcon sx={{ fontSize: '2rem' }} />
        </div>
      </div>
    </div>
  );
};

export default AllNotes;