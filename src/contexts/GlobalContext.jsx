import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const key = "a0952167-2907-4991-8196-94349ac396d8";

function GlobalContextProv({ children }) {
  const [params, setParams] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${params}&key=${key}`
      );
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        params: params,
        setParams: setParams,
        handleSubmit: handleSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(GlobalContext);
}

export { GlobalContextProv, useGlobalContext };
