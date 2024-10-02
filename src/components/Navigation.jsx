import { Link } from "react-router";
// import Home from "./Home";

export default function Navigation() {
  return (
    <nav>
      <div className="container mx-auto py-10 flex">
        <div>
          <h1>Recipe App</h1>
        </div>
        <div>
          <div>
            <Link to="/Home">Home</Link>
            <div></div>
          </div>
          {/* <div>
            <Link>Menu</Link>
            <div></div>
          </div>
          <div>
            <Link>About us</Link>
            <div></div>
          </div>
          <div>
            <Link></Link>
            <div></div>
          </div> */}
        </div>
        <div></div>
      </div>
    </nav>
  );
}
