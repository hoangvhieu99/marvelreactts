import React from "react";
import logo from '../img/logo.jpg'
import { Input } from 'semantic-ui-react'
import bg from '../img/bg.png'
import './style.scss';
const HeaderPage =()=>{

  return(
    <div>
       <div className="header">
        <img src={logo} className='logo-header'></img>
        <Input placeholder='Search...'/>
       </div>
      {/* <div className="bg">
          <img src={bg} alt="" />
      </div> */}
    </div>
  )
}
export default HeaderPage;