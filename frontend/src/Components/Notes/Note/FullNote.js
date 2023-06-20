import React from 'react';
import NavBar from '../../General/NavBar';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';

const FullNote = () => {
    return (
        <div className='full-note'>
            <NavBar />
            <div className="body">
                <div className="tabs">
                    <h4 className='notes-link'>
                        <ArrowBackIosNewSharpIcon sx={{ fontSize: '1.2rem' }}/>
                        All Notes
                    </h4>
                    <h4 className='folders-link'> </h4>
                </div>
                <div className="notes">
                    <h3>note here</h3>
                </div>
                <div className="add-btn">
                    <DeleteForeverSharpIcon sx={{ fontSize: '2rem' }} />
                </div>
            </div>
        </div>
    );
};

export default FullNote;