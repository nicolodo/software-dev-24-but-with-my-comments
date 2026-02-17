import Polling from "./components/Polling";
import UseEffectTimers from "./components/UseEffectTimer";
import UseStateFunctionalUpdate from "./components/UseStateFunctionalUpdate";

export default function App() {
  return (
    <div>
      <h2>useEffect</h2>
      {/* <UseStateFunctionalUpdate />  */}
      {/* <UseEffectTimers /> */}
      <Polling />
    </div>
  )
}