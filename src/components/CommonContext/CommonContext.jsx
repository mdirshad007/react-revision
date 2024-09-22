import { createContext } from "react";

export const ProfileContext=createContext()
export const ProfileProvider=({children})=>{
    const data={
        name:"Ishan",
        age:30
    }
    return(
        <ProfileContext.Provider value={data}>
            {children}
        </ProfileContext.Provider>
    )
}