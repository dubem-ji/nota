import React, {useState} from "react";
import { notes, user } from "./Data/Data";
import Header from "./components/header";
import Main from "./components/Main/Main";
import Confirm from "./components/Confirmation/Confirm";
import Createfolder from "./components/Folders/createfolder";

function App() {
    const [showNotes, setShowNotes] = useState(true);
    const [showFolder, setShowFolder] = useState(false);
    const [showNoteInput, setShowNoteInput] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [showCreateFolder, setShowCreateFolder] = useState(false);
    const [notesData, setNotesData] = useState(notes);
    const [userData, setUserData] = useState(user);
    const [showFolderContent, setShowFolderContent] = useState(false);
    const [currentFolder, setCurrentFolder] = useState(''); 

    // #Toggle App Sections
    const toggleShowNotes = () => {
        setShowNotes(true);
        setShowFolder(false);
        setShowNoteInput(false);
        setShowFolderContent(false);
    };
    const toggleShowFolder = () => {
        setShowFolder(true);
        setShowNotes(false);
        setShowNoteInput(false);
        setShowFolderContent(false);
    };
    const toggleShowNoteInput = () => {
        setShowNoteInput(true);
        setShowFolder(false);
        setShowNotes(false);
        setShowFolderContent(false);
    };
    const togglesShowConfirm = () => {
        setShowConfirm(!showConfirm)
    };
    const togglesShowCreateFolder = () => {
        setShowCreateFolder(!showCreateFolder)
    };
    const openFolderContent = (folderName) => {
        setShowFolderContent(true);
        setShowNotes(false);
        setShowFolder(false);
        setShowNoteInput(false);

        setCurrentFolder(folderName);
    }

    // #confirmOption 
    const confirmOption = (option) => {
        if (option) {
            setConfirm(true)
        } else {
            setConfirm(false)
        }
    }
    // #Add note
    const addNote = (noteObject) => {
        console.log(noteObject)
    }

    // #Delete note
    const deleteNote = (currentId) => {
        // togglesShowConfirm();
        setConfirm(!confirm)
        if (window.confirm('Are you sure?')) {
            setNotesData(notesData.filter((note) => note.id !== currentId))
        }
    };

    // #Edit User Data
    const editUserData = () => [
        setUserData(userData)
    ]

    return (
        <div className="app">
            {showConfirm && (
                <Confirm togglesShowConfirm={togglesShowConfirm} confirmOption={confirmOption} />
            )}
            {showCreateFolder && (
                <Createfolder togglesShowCreateFolder={togglesShowCreateFolder} userData={userData} />
            )}
            
            <Header toggleShowNoteInput={toggleShowNoteInput} userData={ userData} />
            <Main showNotes={showNotes} toggleShowNotes={toggleShowNotes} showFolder={showFolder} toggleShowFolder={toggleShowFolder} showNoteInput={showNoteInput} toggleShowNoteInput={toggleShowNoteInput} togglesShowConfirm={togglesShowConfirm} notesData={notesData} togglesShowCreateFolder={togglesShowCreateFolder} deleteNote={deleteNote} addNote={addNote} userData={userData} openFolderContent={openFolderContent} showFolderContent={showFolderContent} currentFolder={currentFolder} editUserData={ editUserData} />
        </div>
    );
};

export default App;