import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const key = "a0952167-2907-4991-8196-94349ac396d8";

function GlobalContextProv({ children }) {
  const [params, setParams] = useState();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [detailRecipe, setDetailRecipe] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${params}&key=${key}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipes(data?.data?.recipes);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setParams("");
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        params: params,
        setParams: setParams,
        handleSubmit: handleSubmit,
        loading: loading,
        recipes: recipes,
        setLoading,
        detailRecipe,
        setDetailRecipe,
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
