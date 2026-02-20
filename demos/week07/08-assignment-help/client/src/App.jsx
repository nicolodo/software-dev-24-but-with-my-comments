import { Route, Routes } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Animals from "./pages/Animals";
import AnimalPage from "./pages/AnimalPage";

export default function App() {
  return (
    <div className="w-full mx-20 mt-5">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/animals' element={<Animals />} />
        <Route path='/animals/:id' element={<AnimalPage />} />
      </Routes>
    </div>
  )
}