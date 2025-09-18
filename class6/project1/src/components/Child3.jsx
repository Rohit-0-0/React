import React from 'react'
import { useContext } from 'react'
import {usercontext} from '../App'
function Child3() {
    const {count}=useContext(usercontext)
  return (
    <div>
      <p>{count} This is count value from child 3</p>
    </div>
  )
}

export default Child3
