import React from 'react'
import {useState , useEffect} from 'react'
function Home() {
    const [userdata,setUserdata]=useState([])
    
    useEffect(()=>{
        async function callapi() {
        const res=await fetch("https://free-food-menus-api-two.vercel.app/bbqs")
        const data=await res.json()
        
        setUserdata(data)
      
    }
    callapi()
    },[])
  return (
  <div>
    <h1>BBQ Menus</h1>
    <div className="bbq-grid">
      {userdata.map((item, index) => (
        <div className="bbq-card" key={index}>
          <img src={item.img} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.dsc}</p>
        </div>
      ))}
    </div>
  </div>
);

}

export default Home
