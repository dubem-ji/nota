import { createContext, useState } from 'react';
import { folders } from "../Data/Data";

const FolderContext = createContext();

export const FolderProvider = ({ children }) => {
    const { foldersData, setFoldersData } = useState(folders);
    
    return <FolderContext.Provider value={{
        foldersData,
    }}>
        {children}
    </FolderContext.Provider>
};

export default FolderContext;