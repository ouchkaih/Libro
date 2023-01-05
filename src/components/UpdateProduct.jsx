import React, {useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'

function UpdateProduct() {
    const { state } = useLocation();
    const [product, setProduct]= useState({image_url:"", title:"", description:"", price:""})

    // get product details
    const handlChange =(e)=>{
        setProduct(oldValue=>({
            ...oldValue,
            [e.target.name]:e.target.value
        }))
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
                    <input type="text" className="form-control" onChange={handlChange} name="image_url" placeholder="https://...." />
                    <label htmlFor="" className="form-label mt-3">Title </label>
                    <input type="text" className="form-control" onChange={handlChange} name='title' Placeholder='Product title' />
                    <label htmlFor="" className="form-label mt-3">Description</label>
                    <textarea name="description" id="" cols="30" rows="10"  Placeholder="" className="form-control" onChange={handlChange}></textarea>
                    <label htmlFor="" className="form-label mt-3">Price</label>
                    <input type="text" className="form-control" onChange={handlChange} name="price" placeholder='00.00 $' />
                    <button className="btn btn-primary mt-4 w-100" onClick={valider}>Create product</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateProduct