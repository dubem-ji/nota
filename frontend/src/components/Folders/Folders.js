import React, { useState } from 'react';
import FolderItem from './FolderItem';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';

const Folders = ({ userData, openFolderContent }) => {
  const folders = userData.folders;
  const [folderId, setFolderId] = useState('id');

  const allowDrop = (ev) => {
    ev.preventDefault();
    setFolderId(ev.target.children)
  };
  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
     ev.dataTransfer.clearData()

  };
  const drop = (ev) => {
    // ev.preventDefault();
     console.log(folderId)
    
  };


  return (
    <>
      <div className="folder-trash" style={{ color: 'grey'}} onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
        <FolderDeleteIcon sx={{ fontSize: '5rem' }} />
        <h5>trash</h5>
      </div>
      {folders.map((folder) => {
        return (
          <FolderItem onDragStart={(e) => drag(e)} folder={folder} id={folder.id} key={folder.id} openFolderContent={openFolderContent} iconSize={'5rem'} />
        )
      })}
    </>
  );
};

export default Folders;