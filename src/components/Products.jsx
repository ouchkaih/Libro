import React, { useEffect } from "react";
import axios from "axios"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUserInfo} from "./reducers/UserReducer";
function Products() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  let userData = useSelector((state) => state.user);

  useEffect(() => {
    axios.get("http://localhost/php/w3ista/getProducts.php").then((res) => {
      setProducts(res.data);
      console.log(res.data)
    });
  }, []);

  // create table products( product_id int AUTO_INCREMENT PRIMARY key , img_url varchar(50), title varchar(30) , description varchar(50))
  return (
    <div>
      {!userData.isConnected ? (
        <div className="p-2 m-0 row d-flex justify-content-between flex-wrap w-100">
          {products.length > 0 ? (
            products.map((item) => (
              <div className="p-3 m-2 bg-light rounded-3 box_shadow_card ">
                <div className="">
                  <div>
                    <img
                      src={item.img_url}
                      alt=""
                      className="w-100 rounded-3"
                    />
                    <div className="p-1">
                      <h6 className="p-0 m-0 ">{item.title}</h6>
                      <p className="opacity-75 p-0 m-0">{item.description} </p>
                      <span className="p-0 m-0">
                        <i>{item.price}</i>
                      </span>
                    </div>
                    <div className="text-end">
                      <button className="w-100 btn btn-warning">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No product found !</div>
          )}
        </div>
      ) : (
        <div>sign up first</div>
      )}
    </div>
  );
}

export default Products