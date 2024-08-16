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
import React from 'react';

import './Navbar.css'; // Use forward slashes and relative path from the current directory
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" />
    </div>
  );
};

export default Navbar;
