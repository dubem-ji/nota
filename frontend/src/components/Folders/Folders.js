import React from 'react';
import FolderItem from './FolderItem';

const Folders = ({ userData, openFolderContent }) => {
  const folders = userData.folders;


  return (
    <>
      {folders.map((folder) => {
        return <FolderItem folder={folder} key={folder.id} openFolderContent={ openFolderContent} />
      })}
    </>
  );
};

export default Folders;