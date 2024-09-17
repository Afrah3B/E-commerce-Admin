import React, { useState } from 'react'
import './AddProduct.css'
import uploadicon from '../../assets/upload.svg';

const AddProduct = () => {

    const [img, setImg]=useState(false);
    const [productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:"",
    })

    const imgHandler = (e)=>{
        setImg(e.target.files[0]);
    }

    const changeHandler=(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value});
    }

    const AddProduct = async()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData =new FormData();
        formData.append('product',img);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data});

        if(responseData.success){
            product.image=responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product),
            }).then((resp) => resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            });
        }

    }

    return (
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='product name' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler}  type="text" name='old_price' placeholder='product price' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler}  type="text" name='new_price' placeholder='product offer price' />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler}  name="category" className='add-product-selector'>
                    <option value="shop">Shop</option>
                    <option value="women">Women</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={img?URL.createObjectURL(img):uploadicon} className='addproduct-thumnail-img' />
                </label>
                <input onChange={imgHandler} type="file" name='image' id='file-input' hidden />
            </div>
            <button onClick={()=>{AddProduct()}} className='addproduct-btn'>ADD</button>
        </div>
    );
}

export default AddProduct;