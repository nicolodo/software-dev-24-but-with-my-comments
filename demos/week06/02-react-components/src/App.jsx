import Header from "./components/Header"
import Otter from "./components/Ottter"

export default function App() {
  return (
    <div>
      <h2>Working with components</h2>
      <header>different things</header>
      {/* Components must start with capital letters */}
      <Header />
      {/* We can use the same component multiple times */}
      <Otter />
      <Otter />
      <Otter />
      <Otter />
      <Otter />
      <Otter />
      <Otter />
    </div>
  )
}