import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import FolderItem from './FolderItem';

const Createfolder = ({ userData, togglesShowCreateFolder, editUserData, openFolderContent, getFolderSelection }) => {
    const [userEdit, setUserEdit] = useState(userData);
    const [folderName, setFolderName] = useState('');
    let folderColor = '';
    let id = 0;
    let folderList = '';

    const getFolder = (e) => {
        let children = e.target.parentElement.childNodes;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            child.removeAttribute('id');
        };
        let children1 = e.target.parentElement.parentElement.childNodes;
        let mainChild1 = children1[0].childNodes;
        for (let i = 0; i < mainChild1.length; i++) {
            let child = mainChild1[i];
            child.removeAttribute('id');
        };
        let children2 = e.target.parentElement.parentElement.childNodes;
        let mainChild2 = children2[1].childNodes;
        for (let i = 0; i < mainChild2.length; i++) {
            let child = mainChild2[i];
            child.removeAttribute('id');
        };

        e.target.setAttribute('id', 'selected')
        folderColor = e.target.className;
        id = Math.floor(Math.random() * 100);
    };

    const handleSave = () => {
        if (folderName.length < 1) {
            alert('Enter a folder name')
            folderColor = ''
            return
        };

        if (folderColor.length < 1) {
            alert('Choose a color')
            folderColor=''
            return
        };

        let checklist = userData.folders.filter((folder) => (folder.name.toLowerCase() === folderName.toLowerCase()));
        if (checklist.length > 0) {
            alert('name already exists');
            folderColor=''
            return;
        }

        let newFolder = {
            id: id,
            name: folderName,
            color: folderColor,
        }
        folderList = userData.folders         
        folderList.push(newFolder)


        let userName = userData.name;
        let userAvatar = userData.avatar
        setUserEdit({
            name: userName,
            avatar: userAvatar,
            folders: folderList,
        });

        editUserData(userEdit);
    };

    const handleFolderSelection = (e) => {
        console.log(e.target.parentElement.parentElement);
        let children = e.target.parentElement.parentElement;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            child[1].checked = false
            console.log(child);
        };
        console.log(e.target.parentElement.parentElement);
        // console.log(e.target.parentElement.children[1].checked)
        // console.log(e.target.parentElement.children[0].children[1].innerText)
        // getFolderSelection();
    }

    return (
        <div className='create-folder'>
            <div className="container">
                <div className="head">
                    <h4>Select destination folder</h4>
                </div>
                <div className="folders">
                    {userData.folders.map((folder) => {
                        return (
                            <div key={folder.id} className="option-box">
                                <FolderItem key={folder.id} folder={folder} iconSize={'1.5rem'} openFolderContent={openFolderContent} />
                                <input type="checkbox" onClick={
                                    (e) => handleFolderSelection(e)
                                } />
                            </div>
                        )
                    })}
                </div>
                <div className="folder-icon">
                    <AddIcon sx={{ fontSize: '1rem' }} />
                    <h4>Create folder</h4>
                </div>
                <div className="folder-input">
                    <input type="text"  placeholder='enter folder name' value={folderName} onChange={(e) => setFolderName(e.target.value)}/>

                    <div className="colors">
                        <div className="color-top">
                            <div className="red" id='selected' style={{ background: 'red' }} onClick={
                                (e) => getFolder(e)
                            }></div>
                            <div className="orange" style={{ background: 'orange' }} onClick={
                                (e) => getFolder(e)
                            }></div>
                            <div className="chartreuse" style={{ background: 'chartreuse' }}onClick={
                                (e) => getFolder(e)
                            }></div>
                            <div className="lime" style={{ background: 'lime' }} onClick={
                                (e) => getFolder(e)
                            }></div>
                            <div className="turquoise" style={{ background: 'turquoise' }}onClick={
                                (e) => getFolder(e)
                            }></div>
                        </div>
                        <div className="color-down">
                            <div className="aqua" style={{ background: 'aqua' }} onClick={
                                (e) => getFolder(e)
                            }></div>
                            <div className="royal-blue" style={{ background: 'royal-blue' }} onClick={
                                (e) => getFolder(e)
                            }></div>
                            <div className="navy" style={{ background: 'navy' }} onClick={
                                (e) => getFolder(e)
                            }></div>
                            <div className="crimson" style={{ background: 'crimson' }} onClick={
                                (e) => getFolder(e)
                            }></div>
                            <div className="brown" style={{ background: 'brown' }} onClick={
                                (e) => getFolder(e)
                            }></div>
                        </div>
                    </div>
                    <div className="btns">
                        <div className="cancel" onClick={
                            () => {
                                
                                togglesShowCreateFolder()
                            }
                        }>
                            <h5>Cancel</h5>
                        </div>
                        <div className="line"></div>
                        <div className="add" onClick={
                            () => {
                                handleSave();
                                // togglesShowCreateFolder()
                            }
                        }>
                            <h5>Add</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Createfolder;