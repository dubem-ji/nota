import React from "react";
import { NoteProvider } from "./Context/NotesContext";
import NotesMain from "./Components/Notes/NotesMain";


function App() {


    return (
        <div className="app">
           <NotesMain />
        </div>
    );
};

export default App;