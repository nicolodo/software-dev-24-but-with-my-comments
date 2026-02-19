import { Route, Routes } from "react-router";

export default function App() {
  return (
    <div>
      <h2 className="text-red-400">My app</h2>
      <Routes>
        <Route path="/" element={<p>Hello</p>} />
        <Route path='/animals' element={<p>Animals page</p>} />
      </Routes>
    </div>
  )
}