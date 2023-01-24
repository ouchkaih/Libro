import React, {useEffect, useState} from 'react'
import axios from "axios"
import PopularNow from './popular'
import {useDispatch, useSelector} from 'react-redux'
import {fetchData} from '../reducers/BookReducer'
import Books from './books'
function Home() { 

 

  const booksData = useSelector(state=> state.books.data)
  // get the books from database 
  const dispatch = useDispatch()
  if(booksData.length === 0){
    dispatch(fetchData());
  }
  
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
                <Books/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home