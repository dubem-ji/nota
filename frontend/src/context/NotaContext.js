import { createContext, useState } from 'react';
import { notes, folders, user } from "../data/Data";

const NotaContext = createContext();

export const NotaProvider = ({ children }) => {
    const { notesData, setNotesData } = useState(notes);
    const { foldersData, setFoldersData } = useState(folders);
    const { userData, setUserData } = useState(user);

    
    return <NotaContext.Provider value={{
        notesData, foldersData, userData
    }}>
        {children}
    </NotaContext.Provider>
};

export default NotaContext;