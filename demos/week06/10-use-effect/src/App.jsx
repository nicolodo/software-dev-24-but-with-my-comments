import { useState, useEffect } from "react";
import { style, style2 } from "./style";
import DisplayData from "./components/DisplayData";

export default function App() {
  const [count, setCount] = useState(0);

  // react runs our comonents twice in dev mode
  console.log("%cApp component running....", style);

  // takes two arguments:
  // a callback function -> inside that cbf, put the code in that you only want to run at certain times
  // a 'dependency' array. That array controls when the code inside the effect should run. If it's an empty array, the code inside the effect on runs on the *first* render of th component
  useEffect(() => {
    console.log("%cVery important code!!!!!! That will cause destruction if run more than once", style2);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Update state</button>
      <DisplayData />
    </div>
  );
}
