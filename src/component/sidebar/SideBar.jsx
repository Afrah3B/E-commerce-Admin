import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import addicon from '../../assets/add-square.svg';
import menuicon from '../../assets/menu.svg';

const SideBar = () => {
    return (
        <div className="sidebar">
            <Link to={'/addproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={addicon} alt="" />
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={menuicon} alt="" />
                    <p>Product List</p>
                </div>
            </Link>
        </div>
    );
}

export default SideBar;