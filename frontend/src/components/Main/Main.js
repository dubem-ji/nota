import React from 'react';
import Sidebar from './Sidebar';
import Notes from '../Notes/Notes';

const Main = () => {
    return (
        <div className='main'>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="all-notes">
                <Notes />
            </div>
        </div>
    );
};

export default Main;