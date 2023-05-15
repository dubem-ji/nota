import React from 'react';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AddIcon from '@mui/icons-material/Add';

const Createfolder = () => {
    return (
        <div className='create-folder'>
            <div className="container">
                <div className="head">
                    <h4>Select destination folder</h4>
                </div>
                <div className="folders">
                    <div className="folder">
                        <FolderOutlinedIcon />
                        <h4>poems</h4>
                    </div>
                         <div className="folder">
                        <FolderOutlinedIcon />
                        <h4>personal</h4>
                    </div>
                </div>
                <div className="folder-icon">
                    <AddIcon sx={{ fontSize: '1rem' }} />
                    <h4>Create folder</h4>
                </div>
                <div className="folder-input">
                    <h4>Create folder</h4>
                    <input type="text" />
                    <div>
                        <h5>folder colour</h5>
                        <h5>..............................................</h5>
                    </div>
                    <div className="colors">
                        <div className="red"></div>
                        <div className="orange"></div>
                        <div className="chartreuse"></div>
                        <div className="lime"></div>
                        <div className="turquoise"></div>
                        <div className="aqua"></div>
                        <div className="royal-blue"></div>
                        <div className="navy"></div>
                        <div className="magneta"></div>
                        <div className="crimson"></div>
                        <div className="brown"></div>
                        <div className="rosy-browm"></div>
                    </div>
                    <div className="btns">
                        <div className="cancel">
                            <h5>Cancel</h5>
                        </div>
                        <div className="line"></div>
                        <div className="add">
                            <h5>Add</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Createfolder;