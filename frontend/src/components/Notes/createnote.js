import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const Createnote = () => {
    return (
        <div className='create-note'>
            <AddIcon sx={{ fontSize: '1rem' }} />
            <h4>New note</h4>
        </div>
    );
};

export default Createnote;