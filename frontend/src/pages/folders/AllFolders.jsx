import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const AllFolders = () => {
    return (
        <div className="allFolders">
            <header className="header">
                <h3 className='heaederTitle'>All Folders</h3>
                <AddOutlinedIcon className="addBtn" sx={{ color: '#00cc66', fontWeight: '900', fontSize: '2rem', cursor: 'pointer' }} />
            </header>
            <main className="main">
                <div className="folders">
                        
                </div>
            </main>
        </div>
    );
};

export default AllFolders;