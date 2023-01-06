import React, {useState} from 'react'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import axios from "axios"

function UpdateProduct() {
    // use useLocation to get the data that we passed from the productsManagment component using Navigate 
    const { state } = useLocation();
    const [product, setProduct]= useState({image_url:state.img_url, title:state.title, description:state.description, price:state.price})
    const navigate = useNavigate()
    // get product details
    const handlChange =(e)=>{
        setProduct(oldValue=>({
            ...oldValue,
            [e.target.name]:e.target.value
        }))
    }

    // send data to php update file 
    const Update = (e)=>{
        e.preventDefault()
        const formdata = new FormData()
        formdata.append("idp", state.id);
        formdata.append("image_url", product.image_url);
        formdata.append("title", product.title);
        formdata.append("description", product.description);
        formdata.append("price", product.price);
        console.log(formdata)
        axios
          .post("http://localhost/php/w3ista/updateProduct.php", formdata)
          .then((res) => {
            alert(res.data.statut);
            navigate("/managment");
          });
    }

  return (
    <div>
        <div className="p-3 bg-light">
            <form action="" className=" d-flex justify-content-center">
                <div className="p-5 pt-4  w-50 border border-3 bg-light rounded-4">
                    <div className='pb-3'>
                        <h4 className='text-center text-primary'>Create New Product</h4>
                    </div>
                    <label htmlFor="" className="form-label">Image Url</label>
                    <input type="text" className="form-control" onChange={handlChange} value={product.image_url} name="image_url" placeholder="https://...." />
                    <label htmlFor="" className="form-label mt-3">Title </label>
                    <input type="text" className="form-control" onChange={handlChange} name='title' value={product.title} Placeholder='Product title' />
                    <label htmlFor="" className="form-label mt-3">Description</label>
                    <textarea name="description" id="" cols="30" rows="10"  Placeholder="" className="form-control" value={product.description} onChange={handlChange}></textarea>
                    <label htmlFor="" className="form-label mt-3">Price</label>
                    <input type="text" className="form-control" onChange={handlChange} name="price" value={product.price} placeholder='00.00 Dhs' />
                    <button className="btn btn-primary mt-4 w-100" onClick={Update}>Create product</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateProduct