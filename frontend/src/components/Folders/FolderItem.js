import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';;

const FolderItem = ({ folder, openFolderContent }) => {
    const handleOpen = () => {
        openFolderContent(folder.name);
    };


    return (
        <div className='folder-item' onClick={
          () => handleOpen()
        }>
            <div style={{ color: `${folder.color}` }}><FolderIcon sx={{fontSize: '5rem', cursor: 'pointer'}} /></div>
            
            <h5>{folder.name}</h5>
        </div>
    );
};

export default FolderItem;