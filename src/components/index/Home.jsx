import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
function Home() { 

  // create a variable for storing ads images 
  const [slideImages, setSlideImages] = useState([
    "https://images.unsplash.com/photo-1579273166152-d725a4e2b755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    
  ]);
  const [slideIndex, setSlideIndex] = useState(0);


  // get images from database to use it in the slideshow 
  useEffect(() => {
    axios.get("http://localhost/php/w3ista/GetAdsSlide.php").then(
      (res)=>{
        setSlideImages(res.data)
      }
    );
  }, []);

  // show the next image 
  const nextSlide = (e)=>{
    // check if the current image is the last image then go to the first image
    if (slideIndex === slideImages.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }

  // show the previously image 
  const previouslySlide = (e) => {
    // check if the current image is the first image then go to the last image
    if (slideIndex === 0) {
      setSlideIndex(slideImages.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };


  setTimeout(()=>{nextSlide()},3000)

  return (
    <div>
      <div>
        <div className="p-5 bg_orange row w-100 m-0" >
          <div className="col-1 text-end d-flex justify-content-end align-items-center">
              <button onClick={nextSlide}  className="bg-0 border-0 bg-transparent">
                    <FiArrowLeftCircle size="30px" color='white'/>
              </button>
          </div>
          <div className="col-10">
            <Link>
              <div>
                 <img src={slideImages[slideIndex]} className="slideImage" alt="" width={"100%"} height="400px"/>
              </div>
            </Link>
          </div>
          <div className="col-1 d-flex align-items-center">
            <button onClick={previouslySlide}  className="bg-0 border-0 bg-transparent">
               <FiArrowRightCircle size="30px" color='white'/>
              </button>
          </div>
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