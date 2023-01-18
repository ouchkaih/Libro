import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
function Home() { 

  // create a variable for storing ads images 
  const [slideAds ,setSlideAds] = useState()
  
  // get images from database to use it in the slideshow 
  useEffect(() => {
    axios.get("http://localhost/php/w3ista/GetAdsSlide.php").then(
      (res)=>{
        setSlideAds(res.data)
      }
    );
  }, []);

  
  return (
    <div>
      <div>
        <div className="p-5 bg_orange row">
          <div className="col-3 text-end">-</div>
          <div className="col-6">
            <Link>
              <div>
                 <img src="/" alt="" width={"100%"} height="100%"/>
              </div>
            </Link>
          </div>
          <div className="col-3">-</div>
        </div>
        <div className="row bg-light me-1">
          <div className="text-center p-4"></div>
          <h4 className="text-center">
            We’re solving the biggest problems in furniture
          </h4>
          <div className="col-sm-4 text-center p-5">
            <div className="p-2">
              <img src="icons/shipping.png" alt="" className="w-25" />
            </div>
            <span>
              <b>Fast & free shipping</b>
              <br /> Every single order ships for free. No minimums, no tiers,
              no fine print whatsoever.
            </span>
          </div>
          <div className="col-sm-4 text-center p-5">
            <div className="p-2">
              <img src="icons/packaging.png" alt="" className="w-25" />
            </div>
            <span>
              <b>Modular, easy-to-move design</b>
              <br /> Our innovative modular design is driven by the belief that
              furniture should fit this home, and the next one.
            </span>
          </div>
          <div className="col-sm-4 text-center p-5">
            <div className="p-2">
              <img src="icons/tree.png" alt="" className="w-25" />
            </div>
            <span>
              <b>Durable, premium materials</b>
              <br /> We use materials like sustainably-forested wood,
              strengthened steel hardware, and top-grain Italian leather.
            </span>
          </div>
        </div>
        <div className="bg-dark p-3 text-light">
          <footer>
            <div className="row">
              <div className="col-7">
                <img src="icons/logo.png" alt="" width="40px" />
              </div>
              <div className="col-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="search"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3 p-5">
                <span>Shopping Services</span>
                <ul className="p-2 opacity-75">
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Schedule Consultation
                    </a>
                  </li>
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Showrooms
                    </a>
                  </li>
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Trade Program
                    </a>
                  </li>
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Outlet
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 p-5">
                <span>Shopping Services</span>
                <ul className="p-2 opacity-75">
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Schedule Consultation
                    </a>
                  </li>
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Showrooms
                    </a>
                  </li>
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Trade Program
                    </a>
                  </li>
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Outlet
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 p-5">
                <span>Shopping Services</span>
                <ul className="p-2 opacity-75">
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Schedule Consultation
                    </a>
                  </li>
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Showrooms
                    </a>
                  </li>
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Trade Program
                    </a>
                  </li>
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Outlet
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 p-5">
                <span>Shopping Services</span>
                <ul className="p-2 opacity-75">
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Schedule Consultation
                    </a>
                  </li>
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Showrooms
                    </a>
                  </li>
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Trade Program
                    </a>
                  </li>
                  <li className="nav-item d-block  p-2">
                    <a href="" className="nav-link text-light">
                      Outlet
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Home