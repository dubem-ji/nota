import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const AllNotes = () => {
    


    return (
        <>
            <div className="allNotes">
                <header className="header">
                    <h3 className='headerTitle'>All Notes</h3>
                    <AddOutlinedIcon className="addBtn" sx={{ color: '#00cc66', fontWeight: '900', fontSize: '2rem', cursor: 'pointer' }} />
                </header>
                <main className="main">
                    <div className="notes">

                    </div>
                </main>
            </div>
        </>
    );
};

export default AllNotes;