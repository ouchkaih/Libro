import React from 'react'
import {useSelector} from 'react-redux';

function Books() {
    const allBooks = useSelector((state) => state.books.data);


  return (
    <>
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
                <label htmlFor="" className="select_label">
                  <b>Category </b>
                </label>
                <select name="" id="">
                  <option value="All Category" className="sort_select">
                    All Category
                  </option>
                  {allBooks.map((item) => (
                    <option value={item.category}>{item.category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="" className="select_label">
                  <b>Sort by</b>
                </label>
                <div class="select-container">
                  <img src="icons/star.svg" alt="" width="20px"/>
                  <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            {allBooks.length > 0 ? (
              <div className="books_container">
                {allBooks.map((item) => (
                  <div className="book bg_white">
                    <div
                      className="book_cover"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="">
                      <p className="book_title ">{item.title} </p>
                      <p className="book_price">
                        <b>{item.price} Dhs</b>
                      </p>
                      <span className="book_discount">{item.discount}Dhs</span>
                      <span className="discount_percent">
                        -{item.discount}%
                      </span>
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
                ))}
              </div>
            ) : (
              <div>No item added</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Books