import React from 'react'
import {useSelector} from 'react-redux';

function Books() {
  const url_image =
    "https://th.bing.com/th/id/R.738922b81be3dd06a937ea20ccc855ce?rik=HTRBKi6CYNx30A&pid=ImgRaw&r=0";

    const allBooks = useSelector((state) => state.books.data);


  return (
    <div>
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
                  <span className="discount_percent">-{item.discount}%</span>
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
                  <button className="btn btn_add_toCart">Add To Cart</button>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No item added</div>
      )}
    </div>
  );
}

export default Books