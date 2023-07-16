import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NoteProvider } from "./context/NotaContext";


function App() {


    return (
        <Router>
            <Routes>
                <Route exact path="/" element={
                    <>
                        <h4>Home</h4>
                    </>
                } />
            </Routes>
        </Router>
    );
};

export default App;