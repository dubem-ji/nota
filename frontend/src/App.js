import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NoteProvider } from "./context/NotaContext";
import Footer from "./components/Footer";
import AllNotes from "./pages/notes/AllNotes";
import AllFolders from "./pages/folders/AllFolders";



function App() {


    return (
        <Router>
            <Routes>
                <Route exact path="/" element={
                    <>
                        <AllNotes />
                    </>
                } />
                <Route exact path="/folders" element={
                    <>
                        <AllFolders />
                    </>
                } />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;