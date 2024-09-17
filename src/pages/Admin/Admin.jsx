import React from 'react'
import './Admin.css'
import SideBar from '../../component/sidebar/SideBar'
import {Routes, Route} from 'react-router-dom'
import AddProduct from '../../component/addproduct/AddProduct'
import ListProduct from '../../component/listproduct/ListProduct'

const Admin = () => {
  return (
    <div className="admin">
        <SideBar/>
        <Routes>
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/listproduct' element={<ListProduct/>} />
        </Routes>
    </div>
  )
}

export default Admin
