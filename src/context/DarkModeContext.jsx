import { createContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export const DarkModeContext=createContext()

export const DarkModeProvider=({children})=>{
    const[isDarkMode,setIsDarkMode]=useLocalStorageState(false,'isDarkMode')
    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add('dark-mode')
            document.documentElement.classList.remove('light-mode')
        }else{
            document.documentElement.classList.add('light-mode')
            document.documentElement.classList.remove('dark-mode')
        }
    },[isDarkMode])
    const toogleDarkMode=()=>{
        setIsDarkMode(dm=>!dm)
    }
    return<DarkModeContext.Provider value={{isDarkMode,toogleDarkMode}}>{children}</DarkModeContext.Provider>
}