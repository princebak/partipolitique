import React, { useReducer, useState } from "react"

const AppContext = React.createContext();

let user = {
    firstName: "Prince",
    lastName: "Ilunga",
}

let lang = "fr"

const initialState = {
    user : user,
    lang : lang,
}
    

const reducer = (state, action) =>{
    switch(action.type){
        case "UPDATE_USER": return {...state, user : action.payload};
        case "UPDATE_LANG": return {...state, lang : action.payload};
        default: return state;
    }
}
const AppContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={{...state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => React.useContext(AppContext);
export default AppContextProvider;