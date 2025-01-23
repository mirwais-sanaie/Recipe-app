import RecipeItem from "../components/RecipeItem";
import { useGlobalContext } from "../contexts/GlobalContext";

function Favorates() {
  const { favorateList } = useGlobalContext();
  return (
    <div className="container mx-auto">
      <div className="grid gap-5 grid-cols-4 mt-12">
        {favorateList && favorateList.length > 0 ? (
          favorateList.map((el) => <RecipeItem key={el.id} recipeItem={el} />)
        ) : (
          <div className="col-span-2">
            No favorite recipes found. Add some to your favorites! <br />
            <span role="img" aria-label="heart">
              &#x2764;
            </span>
            by clicking on the heart icon in the recipe details.
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorates;
