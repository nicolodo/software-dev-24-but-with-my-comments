import { useEffect, useState } from "react";

export default function UseEffectTimers() {
  const [cookies, setCookies] = useState(0);


  useEffect(() => {
    // setInterval returns the interval ID 
    const inveral = setInterval(() => {
        // the functional update makes sure it goes and gets the new value of cookies
      setCookies((prev) => prev + 1);
    }, 1000);

    // our useEffect can return a cleanup function - a way for you to remove things when the component unmounts

    return () => {
        // so remove the first interval before we setup the second
        clearInterval(inveral)
    }

  }, []);

  return (
    <div>
      <h2>useEfffect timers (cookie clicker)</h2>
      <p>{cookies}</p>
    </div>
  );
}
