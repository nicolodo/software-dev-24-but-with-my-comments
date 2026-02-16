import { Link, BrowserRouter, Routes, Route } from "react-router";
import Plain from "./pages/Plain";
import Animals from "./pages/Animals";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/animals">Animals</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Plain />} />
          <Route path="/animals" element={<Animals />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
