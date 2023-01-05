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

    // delete product using his Id 
    const deleteProducts=(product_id)=>{
      const format = new FormData()
      console.log(product_id)
      format.append("productId",product_id)
      axios.post(`http://localhost/php/w3ista/deleteProduct.php` , format).then(
        (res)=>{
          console.log(res)
          alert(res.data.productId);
        }
      )
    }

    const updateProduct = (product)=>{
      navigate(`/update`,{
        state: product
      });

    }
  return (
    <div>
      {!userData.isConnected ? (
        <div>
          <div>
            <Link to="/addproduct" className="p-2">
              Create New Product
            </Link>
            <div className="mt-4">
              {products.length > 0 ? (
                <div>
                  {/* <h6 className="text-center m-3">Products :</h6> */}
                  <div className="p-2">
                    <table className="table  tabel-hovered table-bordered">
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
                          <td>{item.id}</td>
                          <td className="p-4">
                            <img src={item.img_url} alt="" className='productmanagementImage'/>
                          </td>
                          <td>{item.title}</td>
                          <td>{item.description}</td>
                          <td>{item.price} Dhs</td>
                          <td>
                            <button className="btn bg-primary btn-primary m-2" onClick={()=>updateProduct(item)}>
                              update
                            </button>
                            <button
                              className="btn bg-danger btn-danger"
                              onClick={() => {
                                if (
                                  window.confirm(
                                    "Are you sure you wish to delete this item?"
                                  )
                                )
                                  deleteProducts(item.id);
                              }}
                            >
                              Delete
                            </button>
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