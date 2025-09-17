import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";
import Login from "./components/Login";

function App() {
  const [id, setid] = useState(1);
  const [data, setData] = useState(null);
  async function callapi(url) {
    try {
      const apiresponse = await fetch(url);
      const data =await apiresponse.json();
      setData(data)
      console.log(data)
      setid(data?.id);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    callapi(`https://fakestoreapi.com/products/${id}`);
  }, [id]);
  function increment(){
    if(id>=20)
    {
      setid("20")
      return;
    }
    setid(id+1)
  }
  function decrement(){
    if(id<1){
      setid("1")
      return;
    }
    setid(id-1)
  }
  return (<>
  <Login/>
  <Card data={data} id={id}/>
  <button onClick={()=>increment()}>increment</button>
  <p>{id}</p>
  <button onClick={()=>decrement()}>decrement</button>
  </>
)
}

export default App;


