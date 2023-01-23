import React, {useEffect, useState} from 'react'
import axios from "axios"
import PopularNow from './popular'
import {useSelector} from 'react-redux'
function Home() { 
  const url_image = "https://th.bing.com/th/id/R.738922b81be3dd06a937ea20ccc855ce?rik=HTRBKi6CYNx30A&pid=ImgRaw&r=0"
  // variable to store all books 
  const [books, setBooks] = useState([])

  const booksData = useSelector(state=> state.books)
  // get the books from database 
  useEffect(() => {
    
  }, [])
  return (
    <div>
      <div>
        <div className="p-5 bg_orange row w-100 m-0">
          <div className="col-4 pt-5 pb-5 p-3">
            <h1 className="p-3 pt-5 pb-5 mb-5">
              <b>
                <span> Get Your</span>
                <div
                  className="p-1 d-inline-block bg-light"
                  style={{ width: "140px" }}
                ></div>
                <br />
                <span className="" style={{ fontSize: "64px" }}>
                  New Book
                </span>
                <br />
                <div
                  className="p-1 d-inline-block bg-light"
                  style={{ width: "100px" }}
                ></div>
                <span className=""> Collection</span>
              </b>
            </h1>
          </div>
        </div>
        <div className="bg_gray">
          <PopularNow/>
          <div>
            <h5 className="bg_white title secondary-color">
              <b className="">All Book</b>
            </h5>
            <div className="book_container">
              <div className="filter">
                <h6>
                  <b>Price</b>
                </h6>
              </div>
              <div className="books_result">
                <div className="sort_container">
                  <div>
                    <label htmlFor="">
                      <b>Category</b>
                    </label>
                    <input type="text" placeholder="All Category" />
                  </div>
                  <div>
                    <label htmlFor="">
                      <b>Category</b>
                    </label>
                    <input type="text" placeholder="All Category" />
                  </div>
                </div>
                <div className="books_container">
                  <div className="book bg_white">
                    <div
                      className="book_cover"
                      style={{ backgroundImage: `url(${url_image})` }}
                    ></div>
                    <div className="">
                      <p className="book_title ">book title </p>
                      <p className="book_price">
                        <b>80 Dhs</b>
                      </p>
                      <span className="book_discount">199 Dhs</span>
                      <span className="discount_percent">-20%</span>
                      <div>
                        <span className="rating ">
                          <img src="icons/star.svg" alt="" width="20px" />
                          &nbsp;&nbsp;<span>4.5</span>
                        </span>
                      </div>
                      <div>
                        <img src="images/logo/logo.svg" alt="" width="60px" />
                      </div>
                      <p className="shipping">free shipping</p>
                      <button className="btn btn_add_toCart">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home