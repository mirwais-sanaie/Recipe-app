import { Link } from "react-router-dom";

function RecipeItem({ recipeItem }) {
  return (
    <div className="p-4 border space-y-4 text-center border-gray-500 rounded-lg shadow-lg">
      <div>
        <img
          src={recipeItem.image_url}
          className="w-full h-48 object-cover"
          alt=""
        />
      </div>

      <p className="text-blue-600">{recipeItem.publisher}</p>

      <Link
        to={`/detail/${recipeItem.id}`}
        className="inline-block w-full hover:bg-zinc-700 bg-black text-white text-lg py-3 font-bold"
      >
        Read more
      </Link>
    </div>
  );
}

export default RecipeItem;
