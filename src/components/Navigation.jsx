import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <div className="container mx-auto py-5 grid grid-cols-3 items-center">
        <div className="flex-1">
          <h1 className="font-bold text-2xl font-Roboto">Recipe App</h1>
        </div>

        <div class="relative top-1">
          <input
            type="email"
            class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter your text"
          />
          <button
            class="absolute right-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="flex ms-auto space-x-7">
          <div className="group cursor-pointer">
            <Link to="">Home</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-b-black"></div>
          </div>
          <div className="group cursor-pointer">
            <Link to={"favorates"}>Menu</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-b-black"></div>
          </div>
          <div className="group cursor-pointer">
            <Link to={"details"}>About us</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-b-black"></div>
          </div>
        </div>
        {/* 
        <div className="flex space-x-4">
          <div>
            <a href="">Add list</a>
          </div>
          <div>
            <a href="">Log in</a>
          </div>
        </div> */}
      </div>
    </nav>
  );
}
