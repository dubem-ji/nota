import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';;

const FolderItem = ({ folder, openFolderContent, iconSize }) => {
    const handleOpen = () => {
        openFolderContent(folder.name);
    };


    return (
        <div className='folder-item' onClick={
          () => handleOpen()
        }>
            <div style={{ color: `${folder.color}` }}><FolderIcon sx={{fontSize: `${iconSize}`, cursor: 'pointer'}} /></div>
            
            <h5>{folder.name}</h5>
        </div>
    );
};

export default FolderItem;