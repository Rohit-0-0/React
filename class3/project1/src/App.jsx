import Maincontainer from './components/Maincontainer.jsx'
import './App.css'
import { useState } from 'react'
function App() {
  const [theme, setTheme] = useState(true);

  function changeTheme(){
    setTheme(!theme)
  }
  
  return (
    <div className ={`${theme?"light":"dark"}`}>
      <Maincontainer changeTheme={changeTheme} theme={theme} />
    </div>
  )
}

export default App
