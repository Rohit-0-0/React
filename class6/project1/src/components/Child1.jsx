import React from 'react'
import { useContext } from 'react'
import {usercontext} from '../App'
import Child3 from './Child3'

function Child1() {
        const {count,setCount}=useContext(usercontext)
    setCount("200")
  return (
    <div>
        <p>This is count from child1  {count}</p>
        
      <Child3/>
    </div>
  )
}

export default Child1
