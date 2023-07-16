import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NoteProvider } from "./Context/NotesContext";
import NotesMain from "./Components/Notes/NotesMain";
import FolderMain from "./Components/Folders/FolderMain";


function App() {


    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <h4>Auth</h4>
                        </>
                    } />
                    <Route exact path="/notes/*" element={
                         <NotesMain />
                    }/>
                       
                    <Route exact path="/folders" element={
                        <>
                            <FolderMain/>
                        </>
                    }/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;