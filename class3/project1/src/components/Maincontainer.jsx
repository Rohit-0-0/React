import React from 'react'
import Navbar from './Navbar'
import Cardcontainer from './Cardcontainer'
import "./Maincontainer.css"
function Maincontainer({changeTheme,theme}) {
  return (
    <div className='main'>
    <Navbar changeTheme={changeTheme} theme={theme} />
    <Cardcontainer theme={theme}/>
    </div>
  )
}

export default Maincontainer
