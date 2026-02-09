import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({name}) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Hello {name}</h2>
      <p>This is another change. We are editing the JSX the app function returns</p>
    </div>
  )
}

export default App
