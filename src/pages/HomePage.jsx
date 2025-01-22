import Loading from "../components/Loading";
import RecipeItem from "../components/RecipeItem";
import { useGlobalContext } from "../contexts/GlobalContext";

function HomePage() {
  const { loading, recipes } = useGlobalContext();

  if (loading) {
    return (
      <div className="flex justify-center mt-60">
        <Loading />
      </div>
    );
  }
  return (
    <div className="container mx-auto">
      <div className="grid gap-5 grid-cols-4 mt-12">
        {recipes && recipes.length > 0 ? (
          recipes.map((el) => <RecipeItem key={el.id} recipeItem={el} />)
        ) : (
          <div className="col-span-2">Search to get the recipe you want...</div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
