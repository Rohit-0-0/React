import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    let [name,setName] = useState("Rohit")
    let [age, setAge] = useState(21)
    let [gender, setGender] = useState("Male")
    let [address, setAddress] = useState("Noida")
  function op (){
    setName("hello world")
    setAge(22)
    setAddress("Delhi")
  }
  return (
    <>

      <div className='card'>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>Gender : {gender}</p>
        <p>Address : {address}</p>
        </div>
        <button onClick={op}> Change Name</button>
    </>
  )
}

export default App
