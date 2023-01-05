import axios from 'axios'
import React, {useEffect} from 'react'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import {Link,  useNavigate} from 'react-router-dom'

function ProductsManagment() {
    let userData = useSelector(state=> state.user)
    let navigate = useNavigate()
    const [products ,setProducts]= useState([])
    const userNotConnected = ()=>{
        navigate("/signIn");
    }

    useEffect(()=>{
      axios.get("http://localhost/php/w3ista/getProducts.php").then(
        (res)=>{
          setProducts(res.data)
        }
      );
    })

    const deleteProducts=(Idd)=>{
      const format = new FormData()
      console.log(Idd)
      format.append("productId",Idd)
      axios.post(`http://localhost/php/w3ista/deleteProduct.php` , format).then(
        (res)=>{
          console.log(res)
          alert(res.data.productId);
        }
      )
    }
  return (
    <div>
      {!userData.isConnected ? (
        <div>
          <div>
            <Link to="/addproduct" className="btn btn-primary">
              New Product
            </Link>
            <div>
              {products.length > 0 ? (
                <div>
                  <h6 className="text-center m-3">Products :</h6>
                  <div className="p-2">
                    <table className="table border border-2 tabel-hovered table-bordered">
                      <tr>
                        <th>Id</th>
                        <th>Image URL</th>
                        <th>Title</th>
                        <th>Discription</th>
                        <th>Price</th>
                        <th>action</th>
                      </tr>
                      {products.map((item) => (
                        <tr>
                          <td >{item.id}</td>
                          <td className='w-25 p-4'>{item.img_url}</td>
                          <td>{item.title}</td>
                          <td>{item.description}</td>
                          <td>{item.price}</td>
                          <td>
                            <button className="btn bg-primary btn-primary m-2">Edit</button>
                            <button className="btn bg-danger btn-danger"  onClick={
                              () => { if (window.confirm('Are you sure you wish to delete this item?')) deleteProducts(item.id) } }>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </table>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <button onClick={userNotConnected} className="btn btn-primary">
            Go to sign in
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductsManagment