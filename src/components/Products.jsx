import React, { useEffect } from "react";
import axios from "axios"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUserInfo} from "./reducers/UserReducer";
import {useNavigate} from "react-router-dom";
function Products() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  // get user data from reducer 
  let userData = useSelector((state) => state.user);

  const navigate = useNavigate();
  
  useEffect(()=>{
    axios.get("http://localhost/php/w3ista/getProducts.php").then((res) => {
      setProducts(res.data);
    });
    if(localStorage.getItem("userInfo") === null){
      navigate("/signIn");
    }else{
      setUser(JSON.parse(localStorage.getItem("userInfo")));
    }
  },[])

 
  // create table products( product_id int AUTO_INCREMENT PRIMARY key , img_url varchar(50), title varchar(30) , description varchar(50))
  return (
    <div>
      {user.connected ? (
        <div className="p-2 m-0 row d-flex  flex-wrap w-100">
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
                      <h6 className="p-0 mb-2 opacity-75">
                        {
                          // check if the title is very long
                          item.title.length > 30
                            ? item.title.slice(0, 30) + "..."
                            : item.title
                        }
                      </h6>
                      <span className="mt-3">
                        <h5>
                          <i>
                            <b>{item.price} Dhs</b>
                          </i>
                        </h5>
                      </span>
                    </div>
                    <div className="text-end">
                      <button className="w-100 btn btn-primary">
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
        <div>goo to sign in</div>
      )}
    </div>
  );
}

export default Products