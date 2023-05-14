import React, {useState} from "react";
import Header from "./components/header";
import Main from "./components/Main/Main";
import Confirm from "./components/Confirmation/Confirm";

function App() {
    const [showNotes, setShowNotes] = useState(true);
    const [showFolder, setShowFolder] = useState(false);
    const [showRecent, setShowRecent] = useState(false);
    const [showNoteInput, setShowNoteInput] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

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
    }
    

    return (
        <div className="app">
            {showConfirm && (
                <Confirm togglesShowConfirm={togglesShowConfirm} />
            )}
            
            <Header toggleShowNoteInput={toggleShowNoteInput} />
            <Main showNotes={showNotes} toggleShowNotes={toggleShowNotes} showFolder={showFolder} toggleShowFolder={toggleShowFolder} showRecent={showRecent} toggleShowRecent={toggleShowRecent} showNoteInput={showNoteInput} toggleShowNoteInput={toggleShowNoteInput} togglesShowConfirm={ togglesShowConfirm} />
        </div>
    );
};

export default App;