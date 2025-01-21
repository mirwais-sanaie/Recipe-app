import Loading from "../components/Loading";
import RecipeItem from "../components/RecipeItem";
import { useGlobalContext } from "../contexts/GlobalContext";

function HomePage() {
  const { loading, recipes } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="grid grid-cols-4">
      {recipes && recipes.length > 0 ? (
        recipes.map((el) => <RecipeItem recipeItem={el} />)
      ) : (
        <div>Search to get the recipe you want...</div>
      )}
    </div>
  );
}

export default HomePage;
