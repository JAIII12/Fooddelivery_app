// import React from 'react'

// import { assets } from '../../assets/assets'
// import 'proj\frontend\src\components\Navbar\Navbar.css'

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//     <img src={assets.logo} alt="" />
//     </div>
//   )
// }

// export default Navbar
import React, { useState } from 'react';

import './Navbar.css'; // Use forward slashes and relative path from the current directory
import { assets } from '../../assets/assets';

const Navbar = () => {
  const[menu,setmenu]=useState("menu");

  return (
    <div className='navbar'>
     <img src={assets.logo} alt="" className="logo" />
     <ul className="navbar-menu">
      <li onClick={ ()=>setmenu("home")} className={menu==="home"?"active":"" }> home</li>
      <li onClick={ ()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</li>
      <li onClick={ ()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
      <li onClick={ ()=>setmenu("contact us")} className={menu==="contact us"?"active":""}>contact us</li> 
     </ul>
     <div className="navbar-right">
      <img src={assets.search_icon} alt=""  />
      <div className="navbar-search-icon">
        <img src={assets.basket_icon}   alt=""  />
        <div className="dot"></div>
      </div>
      <button>sign in</button>
     </div>

    </div>
  );
};

export default Navbar;
