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
          <div className="row pt-5">
            <div className="col-3 d-flex align-items-center">
              <div className="book bg_white d-flex ">
                
                  <div
                    className="book_cover"
                    style={{ backgroundImage: `url(${book.image})` }}
                  ></div>
              </div>
            </div>
            <div className="col-6">
              <div className="">
                <p className="book_title secondary-color ">
                  <h3>
                   <b>{book.title}  </b>
                  </h3>                
                </p>
                <p>
                  <b>
                    by <span className='secondary-color'>{book.author}</span> 
                  </b>
                </p>
                <p>
                  <b>
                    Language <span className='secondary-color'>{book.language}</span> 
                  </b>
                </p>
                <div>
                  <span className="rating p-0">
                    <img src="/icons/star.svg" alt="" width="20px" />
                    &nbsp;&nbsp;<span>{parseFloat(book.rating)}</span>
                  </span>
                </div>
                <hr />
                <p className="book_price">
                  <b>{book.price} Dhs</b>
                <span className="book_discount ms-4">{book.discount}Dhs</span>
                <span className="discount_percent ms-4">-{book.discount}%</span>
                </p>
                <hr />
                <div>
                  <img src="/images/logo/logo.svg" alt="" width="60px" />
                </div>
                <p className="shipping">free shipping</p>
                <button className="btn btn_add_toCart w-25">Add To Cart</button>
              </div>
            </div>
            <div className="col-3">
              books 
            </div>
          </div>
        ) : (
          <div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Product_details
