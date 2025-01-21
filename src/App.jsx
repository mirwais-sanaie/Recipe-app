import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import Favorates from "./pages/Favorates";
import Details from "./pages/Details";
import { GlobalContextProv } from "./contexts/GlobalContext";

export default function App() {
  return (
    <div>
      <GlobalContextProv>
        <Navigation />

        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="favorates" element={<Favorates />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </GlobalContextProv>
    </div>
  );
}
