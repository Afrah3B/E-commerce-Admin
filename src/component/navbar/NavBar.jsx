import React from 'react';
import './NavBar.css';
import imgbox from '../../assets/img-box.svg';
import usercircle from '../../assets/user-circle.svg';

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={imgbox} alt="" className='nav-logo'/>
      <img src={usercircle} alt="" className='nav-profile' />
    </div>
  );
}

export default NavBar;