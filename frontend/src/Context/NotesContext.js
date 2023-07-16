import { createContext, useState } from 'react';
import { notes } from "../data/Data";

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
    const { notesData, setNotesData } = useState(notes);

    
    return <NoteContext.Provider value={{
        notesData,
    }}>
        {children}
    </NoteContext.Provider>
};

export default NoteContext;