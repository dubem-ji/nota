import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import FolderItem from './FolderItem';

const Createfolder = ({ userData }) => {

    return (
        <div className='create-folder'>
            <div className="container">
                <div className="head">
                    <h4>Select destination folder</h4>
                </div>
                <div className="folders">
                    {userData.folders.map((folder) => {
                        return (
                            <div className="option-box">
                                <FolderItem key={folder.id} folder={folder} iconSize={'1.5rem'} />
                                <input type="checkbox" />
                            </div>
                        )
                    })}
                </div>
                <div className="folder-icon">
                    <AddIcon sx={{ fontSize: '1rem' }} />
                    <h4>Create folder</h4>
                </div>
                <div className="folder-input">
                    <input type="text" />

                    <div className="colors">
                        <div className="color-top">
                            <div className="red selected" style={{ background: 'red' }}></div>
                            <div className="orange" style={{ background: 'orange' }}></div>
                            <div className="chartreuse" style={{ background: 'chartreuse' }}></div>
                            <div className="lime" style={{ background: 'lime' }}></div>
                            <div className="turquoise" style={{ background: 'turquoise' }}></div>
                        </div>
                        <div className="color-down">
                            <div className="aqua" style={{ background: 'aqua' }}></div>
                            <div className="royal-blue" style={{ background: 'grey' }}></div>
                            <div className="navy" style={{ background: 'navy' }}></div>
                            <div className="crimson" style={{ background: 'crimson' }}></div>
                            <div className="brown" style={{ background: 'brown' }}></div>
                        </div>
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