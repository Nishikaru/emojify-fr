
'use client';

import { createContext, useContext, useState } from "react";


const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
    const [userId, setUserId] = useState('meaw');
    
    return (
        <MainContext.Provider value={{ userId, setUserId }}>
            {children}
        </MainContext.Provider>
    )
};

export const useMainContext = () => useContext(MainContext);