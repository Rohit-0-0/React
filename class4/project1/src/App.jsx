import { useState } from 'react'
import { useEffect} from 'react'
import './App.css'

function App() {
  // let [name, setName] = useState("rohit")

  // function changename(){
  //   if (name == "rohit")
  //   {
  //     setName("dhananjay")
  //   }
  //   else{
  //     setName("rohit")
  //   }
  // }
//  function createp(){
//         console.log("hello this is createp")
//  }
//   useEffect(() => {
//     try {
//       console.log("name changed")
//     } catch (error) {
//       console.log(error)
//     }
    
//   }
//   // createp();
// ,[name])

//   return (
//     <>
//       <div>App Component</div>
//       <p>My name is {name}</p>
      
//       <button onClick={changename}>Change name here</button>
//     </>
//   )
useEffect(()=>{
  async function callapi() {
    const data=await fetch("")
    
  }
})
return(){

}
}

export default App
