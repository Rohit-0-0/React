import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext } from 'react'
import Child1 from './components/Child1'
import Child2 from './components/Child2'

export const usercontext = createContext();

function App() {

  const [count, setCount] = useState(100)

  return (
    <>
      <usercontext.Provider value={{count,setCount}}>
        <Child1/>
        <Child2/>

      </usercontext.Provider>
    </>
  )
}

export default App
