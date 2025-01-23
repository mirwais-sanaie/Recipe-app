import { Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function Navigation() {
  const { params, setParams, handleSubmit } = useGlobalContext();
  return (
    <nav>
      <div className="container mx-auto py-5 grid grid-cols-3 items-center">
        <div className="flex-1">
          <Link
            to={"/"}
            className="font-bold text-2xl font-Roboto cursor-pointer"
          >
            Recipe App
          </Link>
        </div>

        <div className="relative top-1">
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              value={params || ""}
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              onChange={(e) => setParams(e.target.value)}
              placeholder="Enter your text"
            />
            <button
              className="absolute right-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>

        <div className="flex ms-auto space-x-7">
          <div className="group cursor-pointer">
            <Link to="/">Home</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-b-black"></div>
          </div>
          <div className="group cursor-pointer">
            <Link to={"/favorates"}>Favorates</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-b-black"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
