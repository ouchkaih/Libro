import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchData } from '../reducers/BookReducer'
import '../Assets/book_details.css'
import { MdOutlineLocationOn } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdSecurity } from 'react-icons/md'

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
    }
  }, [allBooks, dispatch])

  // setBook(bookSelected)
  return (
    <div>
      {book.book_id !== undefined ? (
        <div className="book_details_fullcontainer bg_gray d-flex justify-content-center p-3">

          <div className="book_details_container bg_white pt-3 pb-5 p-5 ">
            <div className="row pt-5">
              <div className="col-3 d-flex align-items-center ">
                <div className="book bg_white d-flex w-100 h-100 book_details justify-content-center align-items-center">
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
                      <b>{book.title}</b>
                    </h3>
                  </p>
                  <p className="mb-2">
                    <b>
                      by <span className="secondary-color">{book.author}</span>
                    </b>
                  </p>
                  <p className="mb-2">
                    <b>
                      Language:{' '}
                      <span className="secondary-color">{book.language}</span>
                    </b>
                  </p>
                  <div className="mb-1">
                    <span className="rating p-0">
                      <img src="/icons/star.svg" alt="" width="20px" />
                      &nbsp;&nbsp;<span>{parseFloat(book.rating)}</span>
                    </span>
                  </div>
                  <hr className="m-2" />
                  <div className="d-flex">
                    <p className="book_price d-flex p-0">
                      <h4 className="d-flex align-items-center">
                        <b>{book.price} Dhs</b>
                      </h4>
                      <span className="book_discount ms-4 d-flex align-items-center">
                        {book.discount}Dhs
                      </span>
                      <span className="discount_percent ms-4 d-flex align-items-center">
                        -{book.discount}%
                      </span>
                    </p>
                  </div>
                  <hr className="m-2" />
                  <p>
                    <b>Quantity: </b>
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="">
                      <button className="rounded-5 border-0 me-3">-</button>1
                      <button className="rounded-5 border-0 ms-3">+</button>
                    </div>
                    <div className="d-flex align-items-center ms-3">
                      <div>
                        <p className="m-0 gray_color shipping_info">
                          Additional 1% off (5 Pieces or more) <br />
                          880 Pieces available
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 d-flex align-items-bottom">
                    <div className="m-0  p-0 d-flex align-items-bottom me-2">
                      <b className="p-0">Ships to</b>
                    </div>
                    <MdOutlineLocationOn
                      style={{ width: '22px', height: '22px' }}
                    ></MdOutlineLocationOn>
                    <a
                      href="https://www.google.com/maps/?%20Morocco"
                      className="ms-2 secondary-color opacity-75 "
                    >
                      <b>Morocco</b>
                    </a>
                  </div>
                  <div>
                    <h4 className="mt-3 ">
                      <b>shipping : {book.shipping_price}</b>
                    </h4>
                    <span className="gray_color shipping_info">
                      From Casablanca to all Morocco countres via Seller's
                      Shipping Method . Estimated delivery on Oct 23
                    </span>
                  </div>
                  {/* <div>
                      <img src="/images/logo/logo.svg" alt="" width="60px" />
                    </div> */}
                  <div className="mt-4 d-flex">
                    <button className="btn btn_add_toCart w-25 rounded-1">
                      Buy Now
                    </button>
                    <button className="btn btn_add_toCart w-25 rounded-1 ms-4 btn_background_gradient">
                      Add to Cart
                    </button>
                    <button className="btn btn-light border ms-4 d-flex align-items-center">
                      <AiOutlineHeart
                        style={{
                          width: '22px',
                          height: '22px',
                          marginRight: '10px',
                        }}
                      />
                      34
                    </button>
                  </div>
                  <div className="d-flex align-items-center p-4">
                    <div>
                      <MdSecurity
                        style={{
                          width: '32px',
                          height: '32px',
                          marginRight: '10px',
                        }}
                      />
                    </div>
                    <div>
                      <b>75-Day Buyer Protection</b> <br />
                      <b>
                        <span className="text-secondary">
                          Money back guarantee
                        </span>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-end ">
                <div>
                  <div className="book bg_white another_books">
                    <div
                      className="book_cover"
                      style={{ backgroundImage: `url(${book.image})` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Product_details
