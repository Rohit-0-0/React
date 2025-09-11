import './App.css'
import './components/Data.jsx'
import Data from './components/Data.jsx'
import User from './components/User.jsx'
function App() {
  return (
      <div>
        <p> This is an app </p>
        <Data />
        {/* <Data /> */}
        <User/>
      </div>
      
  )
}

export default App