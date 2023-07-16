import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NoteProvider } from "./context/NotesContext";


function App() {


    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <h4>Home</h4>
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;