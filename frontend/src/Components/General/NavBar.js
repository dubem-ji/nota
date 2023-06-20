import React from 'react';
import {user} from '../../Data/Data'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="brand">
                  <h3>nota</h3>
            </div>
            <div className="user">
                <div className="username">
                    <h4>{ user.username}</h4>
                </div>
                <div className="avatar">
                      
                </div>
            </div>
        </div>
    )
};

export default NavBar;