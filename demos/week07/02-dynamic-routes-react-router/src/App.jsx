import { Routes, Route, Link, BrowserRouter } from "react-router";
import PlantsPage from "./pages/PlantsPage";
import IndividualPlantPage from "./pages/IndividualPlantPage";

export default function App() {
  return (
    <div>
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<p>Home route</p>} />
        <Route path="/plants" element={<PlantsPage />} />
        {/* anythign after /plants/WHATEVER will render the below */}
        {/* eg /plants/2 */}
        {/* /plants/42432-sam */}
        <Route path="/plants/:id" element={<IndividualPlantPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
