import React, { useReducer, useState } from "react";

const AppContext = React.createContext();

let lang = "fr";

const initialState = {
  lang: lang,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_LANG":
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
export default AppContextProvider;
