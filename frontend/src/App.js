import React, {useState} from "react";
import { notes } from "./Data/Data";
import Header from "./components/header";
import Main from "./components/Main/Main";
import Confirm from "./components/Confirmation/Confirm";
import Createfolder from "./components/Folders/createfolder";

function App() {
    const [showNotes, setShowNotes] = useState(true);
    const [showFolder, setShowFolder] = useState(false);
    const [showRecent, setShowRecent] = useState(false);
    const [showNoteInput, setShowNoteInput] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [showCreateFolder, setShowCreateFolder] = useState(false);
    const [notesData, setNotesData] = useState(notes);

    // #Toggle App Sections
    const toggleShowNotes = () => {
        setShowNotes(true);
        setShowFolder(false);
        setShowRecent(false);
        setShowNoteInput(false);
    };
    const toggleShowFolder = () => {
        setShowFolder(true);
        setShowNotes(false);
        setShowRecent(false);
        setShowNoteInput(false);
    };
    const toggleShowRecent = () => {
        setShowRecent(true);
        setShowFolder(false);
        setShowNotes(false);
        setShowNoteInput(false);
    };
    const toggleShowNoteInput = () => {
        setShowNoteInput(true);
        setShowRecent(false);
        setShowFolder(false);
        setShowNotes(false);
    };
    const togglesShowConfirm = () => {
        setShowConfirm(!showConfirm)
    };
    const togglesShowCreateFolder = () => {
        setShowCreateFolder(!showCreateFolder)
    };

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
        if (window.confirm('Are you sure?')) {
            setNotesData(notesData.filter((note) => note.id !== currentId))
        }
    };

    return (
        <div className="app">
            {showConfirm && (
                <Confirm togglesShowConfirm={togglesShowConfirm} confirmOption={confirmOption} />
            )}
            {showCreateFolder && (
                <Createfolder togglesShowCreateFolder={togglesShowCreateFolder} />
            )}
            
            <Header toggleShowNoteInput={toggleShowNoteInput} />
            <Main showNotes={showNotes} toggleShowNotes={toggleShowNotes} showFolder={showFolder} toggleShowFolder={toggleShowFolder} showRecent={showRecent} toggleShowRecent={toggleShowRecent} showNoteInput={showNoteInput} toggleShowNoteInput={toggleShowNoteInput} togglesShowConfirm={togglesShowConfirm} notesData={notesData} togglesShowCreateFolder={togglesShowCreateFolder} deleteNote={deleteNote} addNote={ addNote} />
        </div>
    );
};

export default App;