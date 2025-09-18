import React from 'react'
import { useContext } from 'react'
import {usercontext} from '../App'
function Child2() {
    const {count} = useContext(usercontext)
  return (
    <div>
      <p>this is count from chhild2        {count}</p>
    </div>
  )
}

export default Child2
