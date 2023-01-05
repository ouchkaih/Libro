import axios from 'axios'
import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function AddProducts() {
    const [product, setProduct] = useState({image_url:"", title:"", description:"", price:""})
    const handlChange= (e)=>{
        setProduct(old=>({
            ...old,
            [e.target.name] : e.target.value
        }))
    }

    const navigate = useNavigate()
    const valider =(e)=>{
        e.preventDefault()
        console.log(product);
        if(product.image_url !=="" && product.title!=="" && product.description !== "" && product.price !== ""){
        console.log("first")
            let formdata = new FormData()
            formdata.append("img_url",product.image_url)
            formdata.append("title",product.title)
            formdata.append("description",product.description)
            formdata.append("price", product.price);
            axios.post("http://localhost/php/w3ista/AddProducts.php", formdata).then(
                (res)=>{
                    console.log(res.data)
                    if(res.data.reponse){
                        alert("Product added Successfully 👌")
                        navigate("/products");
                    }else{

                    }
                }
            );
        }else{
            alert("Pleas fill out the form befor submited !")
        }
    }
  return (
    <div>
        <div className="p-5 bg-light">
            <form action="">
                <div className="p-4 w-50">
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

export default AddProducts