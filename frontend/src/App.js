import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NoteProvider } from "./Context/NotesContext";
import NotesMain from "./Components/Notes/NotesMain";


function App() {


    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route exact path="/" element={
                         <NotesMain />
                    }/>
                       
                    <Route exact path="/folders" element={
                        <>
                            This is the folders page
                        </>
                    }/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;