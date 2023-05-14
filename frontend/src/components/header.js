import React from 'react';
import Createnote from './Notes/createnote';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="brand">
                    <h3>nota</h3>
                </div>
                <div className="profile">
                    <Createnote />
                    <div className="pic">

                    </div>
                    <div className="name">
                        <h4>Dubem</h4>
                    </div>
                </div>
          </div>
        </header>
    );
};

export default Header