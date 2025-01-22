import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";

function Details() {
  const urlParams = useParams();
  const { loading, setLoading } = useGlobalContext();

  useEffect(
    function () {
      async function recipeDetail() {
        try {
          setLoading(true);
          const res = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes/${urlParams}`
          );
          const recipe = await res.json();
          console.log(recipe);
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      }
      recipeDetail();
    },

    [setLoading, urlParams]
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Details page</h1>
    </div>
  );
}

export default Details;
