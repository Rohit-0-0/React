import React from 'react'
import Singlecard from './Singlecard'

function Cardcontainer({theme}) {
  return (
    <div className={`${theme?"card":"lightcard"}`}>
     { [1,2,3,4,5,5,6,6,34,3,3,3].map(element=>
      <Singlecard />
)}
    </div>
  )
}

export default Cardcontainer
