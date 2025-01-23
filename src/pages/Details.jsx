import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";
import Loading from "../components/Loading";

function Details() {
  const { id } = useParams();
  const {
    loading,
    setLoading,
    detailRecipe,
    setDetailRecipe,
    handleSaveFavorate,
    favorateList,
  } = useGlobalContext();

  useEffect(
    function () {
      async function recipeDetail() {
        try {
          setLoading(true);
          const res = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
          );
          const recipe = await res.json();
          setDetailRecipe(recipe);
          console.log(recipe.data);
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      }
      recipeDetail();
    },

    [setLoading, id, setDetailRecipe]
  );

  if (loading)
    return (
      <div className="flex justify-center mt-60">
        <Loading />
      </div>
    );

  return (
    <div className="container mx-auto mt-12">
      <div className="flex">
        <div className="rounded-lg group overflow-hidden">
          <img
            className="group-hover:scale-105 object-cover duration-200"
            src={detailRecipe?.data?.recipe?.image_url}
            alt=""
          />
        </div>
        <div className="ms-10 space-y-4">
          <p className="text-blue-600">
            {detailRecipe?.data?.recipe?.publisher}
          </p>
          <h1 className="text-2xl font-black mb-5">
            {detailRecipe?.data.recipe?.title}
          </h1>
          <button
            onClick={() => handleSaveFavorate(detailRecipe?.data.recipe)}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
          >
            {favorateList &&
            favorateList.length > 0 &&
            favorateList.findIndex(
              (el) => el.id === detailRecipe.data.recipe.id
            ) !== -1
              ? "Remove from list"
              : "Add to List"}
          </button>
        </div>
      </div>
      {/* Ingredients Section */}
      <div className="mt-12 pb-12">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        <ol className="list-decimal grid grid-cols-3 gap-y-4">
          {detailRecipe?.data?.recipe?.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient.quantity && <span>{ingredient.quantity} </span>}
              {ingredient.unit && <span>{ingredient.unit} </span>}
              <span>{ingredient.description}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Details;
