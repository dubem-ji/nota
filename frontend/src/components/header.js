import React from 'react';
import Createnote from './Notes/createnote';

const Header = ({ toggleShowNoteInput }) => {
    return (
        <header className='header'>
            <div className="container">
                <div className="brand">
                    <h3>nota</h3>
                </div>
                <div className="r-header">
                    <div className="add-note" onClick={
                        () => toggleShowNoteInput()
                    }>
                        <Createnote />
                    </div>
                    <div className="profile">
                        <div className="pic">

                        </div>
                        <div className="name">
                            <h4>Dubem</h4>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header