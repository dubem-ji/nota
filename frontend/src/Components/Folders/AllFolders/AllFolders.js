import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../General/NavBar';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';

const AllFolders = () => {
    return (
        <div className='all-notes'>
            <NavBar />
            <div className="body">
                <div className="tabs">
                    <Link to={{
                        pathname: '/notes',
                    }}>
                        <h4 className='notes-link'>All Notes</h4>
                    </Link>
                    <h4 className='folders-link'>Folders</h4>
                </div>
                <div className="notes">
                    <h3>Folder</h3>
                </div>
                <div className="add-btn">
                    <AddCircleSharpIcon sx={{ fontSize: '2rem' }} />
                </div>
            </div>
        </div>
    );
};

export default AllFolders;