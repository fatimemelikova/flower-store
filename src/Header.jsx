import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { AnemenoLogo } from './AnemenoLogo.jsx'
import { Link, Links } from 'react-router-dom';
import { SlBasket } from "react-icons/sl";


function Header() {
    const [ openmenu , setopenmenu]  = useState(false)
  return (
    <header className={ openmenu ? "openmenu" : ""}>
        <div className="logo">
            <AnemenoLogo size={40} font />
            <h1>Gonca</h1>

        </div>
        <nav>
          <nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/products">Products</Link>
    </li>

    <li>
      <Link to="/about">About</Link>
    </li>

    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
</nav>
        </nav>
        <button className='btn-siparis-ver' > <SlBasket size={15}/>Sepetım</button>
         
         <IoMenu onClick={() => setopenmenu(!openmenu)} className='menu' size={30} />
      
        <div className="hidden-menu">
                 <ul>

                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </header>
   
  )
}

export default Header