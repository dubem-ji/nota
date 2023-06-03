import React from 'react';
import Sidebar from './Sidebar';
import Notes from '../Notes/Notes';
import FolderContents from '../Folders/FolderContents';
import NoteInput from '../Notes/NoteInput';
import Folders from '../Folders/Folders';


const Main = ({ showNotes, toggleShowNotes, showFolder, toggleShowFolder, toggleShowRecent, showNoteInput, toggleShowNoteInput, togglesShowCreateFolder, deleteNote, addNote, notesData, userData, openFolderContent, showFolderContent, currentFolder, editUserData, folderSelection }) => {
    
    return (
        <div className='main'>
            <div className="sidebar">
                <Sidebar toggleShowNotes={toggleShowNotes} toggleShowFolder={toggleShowFolder} toggleShowRecent={toggleShowRecent} toggleShowNoteInput={ toggleShowNoteInput} />
            </div>
            {showNotes && (
                <div className="all-notes">
                    <Notes toggleShowNoteInput={toggleShowNoteInput} notesData={notesData} deleteNote={deleteNote} userData={userData} openFolderContent={openFolderContent}/>
                </div>
            )}
             {showFolder && (
                <div className="all-folders">
                    <Folders userData={userData} openFolderContent={openFolderContent} />
                </div>
            )}
            {showFolderContent && (
                <div className="folders-notes">
                    <FolderContents toggleShowNoteInput={toggleShowNoteInput} notesData={notesData} deleteNote={ deleteNote} currentFolder={currentFolder} userData={userData} openFolderContent={openFolderContent} />
                </div>
            )}
            {showNoteInput && (
                <div className="note-input">
                    <NoteInput togglesShowCreateFolder={togglesShowCreateFolder} folderSelection={folderSelection} />
                </div>
            )}
        </div>
    );
};

export default Main;