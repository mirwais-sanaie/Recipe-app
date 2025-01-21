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

      <p>{recipeItem.publisher}</p>

      <button className="w-full bg-black text-white text-lg py-3 font-bold">
        Read more
      </button>
    </div>
  );
}

export default RecipeItem;
