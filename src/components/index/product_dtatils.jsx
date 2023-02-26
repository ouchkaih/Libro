import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchData } from '../reducers/BookReducer'

function Product_details() {
  //get all books from reducer
  let allBooks = useSelector((state) => state.books.data)
  // get the books from database
  const { prdId } = useParams()
  const [book, setBook] = useState({})

  const dispatch = useDispatch()
  let bookSelected = allBooks.filter(
    (item) => parseInt(item.book_id) === parseInt(prdId),
  )

  useEffect(() => {
    if (allBooks.length === 0) {
      dispatch(fetchData())
    } else {
      setBook(bookSelected[0])
      console.log('im here')
    }
  }, [allBooks, dispatch])
  console.log('hello')

  // setBook(bookSelected)
  return (
    <div className="container">
      <div className=".container">
        {book.book_id !== undefined ? (
          <div className="row">
            <div className="col-3">
              <div className="book bg_white">
                
                  <div
                    className="book_cover"
                    style={{ backgroundImage: `url(${book.image})` }}
                  ></div>
                  <div className="">
                    <p className="book_title ">
                      {book.title.length > 21
                        ? book.title.slice(0, 21) + '...'
                        : book.title}
                    </p>
                    <p className="book_price">
                      <b>{book.price} Dhs</b>
                    </p>
                    <span className="book_discount">{book.discount}Dhs</span>
                    <span className="discount_percent">-{book.discount}%</span>
                    <div>
                      <span className="rating ">
                        <img src="icons/star.svg" alt="" width="20px" />
                        &nbsp;&nbsp;<span>{book.rating}</span>
                      </span>
                    </div>
                    <div>
                      <img src="images/logo/logo.svg" alt="" width="60px" />
                    </div>
                    <p className="shipping">free shipping</p>
                    <button className="btn btn_add_toCart">Add To Cart</button>
                  </div>
              </div>
            </div>
            <div className="col-6"></div>
            <div className="col-3">hsdlkjf</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Product_details
