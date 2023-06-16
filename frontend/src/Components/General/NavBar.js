import React from 'react';
import {user} from '../../Data/Data'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="user">
                <div className="avatar">
                      
                </div>
                <div className="username">
                    <h5>{ user.username}</h5>
                </div>
            </div>
            <div className="brand">
                  <h3>nota</h3>
            </div>
        </div>
    )
};

export default NavBar;