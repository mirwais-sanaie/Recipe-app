import { createContext, useContext } from "react";

const GlobalContext = createContext();

function GlobalContextProv({ children }) {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}

function useGlobalContext() {
  return useContext(GlobalContext);
}

export { GlobalContextProv, useGlobalContext };
