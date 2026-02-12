import { style } from "./style";
import { useState, useEffect } from "react";

export default function App() {
  const [state, setState] = useState(true);
  console.log(state);

  // another state var for re-running the 'effect'
  const [foo, setFoo] = useState(true)
  // we give useEffect a function as it's first argument
  // it's second arugment is an array - the dependancy array
  // if we put a variable in the dependency array, the 'effect' will run again when that variable changes
  // if we leave the array empty, the effect will only run the first time the component runs
  useEffect(() => {
    console.log(`%cComplex Databse operation`, style);
  }, [foo]);

    // console.log(`%cComplex Databse operation`, style);
  return (
    <div>
      <p>I am a component</p>
      <p>this is important: {`${state}`}</p>
      <button onClick={() => setState(!state)}>re-render</button>
      <button onClick={() => setFoo(!foo)}>this state var is in the use effect dep array</button>
    </div>
  );
}

// update display
// re-render -> running the function again. top to bottom
// render -> run the funciton

// A component (re-runs) (re-render) when state or props change
// in dev mode when I save the file
//////////////////////////

function sum() {
  console.log("Hello");
  const add = 5 + 5;

  return "sum";
}
