// import Home from "./Home";

export default function Navigation() {
  return (
    <nav>
      <div className="container mx-auto py-5 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl font-Roboto">Recipe App</h1>
        </div>

        <div className="flex space-x-7">
          <div className="group cursor-pointer">
            <a to="/Home">Home</a>
            <div className="mx-2 group-hover:border-b group-hover:border-b-black"></div>
          </div>
          <div className="group cursor-pointer">
            <a>Menu</a>
            <div className="mx-2 group-hover:border-b group-hover:border-b-black"></div>
          </div>
          <div className="group cursor-pointer">
            <a>About us</a>
            <div className="mx-2 group-hover:border-b group-hover:border-b-black"></div>
          </div>
          <div className="group cursor-pointer">
            <a>Contact us</a>
            <div className="mx-2 group-hover:border-b group-hover:border-b-black"></div>
          </div>
        </div>

        <div className="flex space-x-4">
          <div>
            <a href="">Add list</a>
          </div>
          <div>
            <a href="">Log in</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
