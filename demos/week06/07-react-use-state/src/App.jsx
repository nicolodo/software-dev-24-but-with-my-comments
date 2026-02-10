import { useState } from "react";
import Counter from "./components/Counter";

export default function App() {
  const [dislikes, setDislikes] = useState(0)


  return (
    <div>
      <Counter dislikes={dislikes} setDislikes={setDislikes}/>
      <Counter dislikes={dislikes} setDislikes={setDislikes}/>
    </div>
  )
}