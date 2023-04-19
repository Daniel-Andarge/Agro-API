import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
   const [show, setShow] = useState(true)
   const handleShow = () =>{
      setShow(current=>!current)
   }
  return ( 
     <header>
        <div className="logo">
          AgroAPI
        </div>
        {show &&
         <div  className="display-menu">
            <Link className='menu' to={"/"}>Home</Link>
            <Link className='menu' to={"/About"}>About</Link>
            <Link className='menu' to={"/ApiDoc"}>API</Link>
            <Link className='menu' to={"/Contact"}>Contact</Link>
          
         </div>
}
<button onClick={handleShow} className='toggle'><MenuIcon/></button>
         
     </header>
    
  )
}

export default Navbar
