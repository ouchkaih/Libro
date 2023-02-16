import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../reducers/BookReducer';

function PopularNow() {
  
    const booksData = useSelector((state) => state.books.data).filter(item=> item.rating > 4);
    // get the books from database
    const dispatch = useDispatch();
    if (booksData.length === 0) {
        dispatch(fetchData());
    }
  return (
    <div className="">
      {booksData.length > 0 ? (
        <div className="popularBook">
          <h5 className="bg_white title secondary-color">
            <b className="">Popular Now</b>
          </h5>
          <div className="Popular_books_container">
            {booksData.map((item) => (
              <div className="book bg_white" key={item.book_id}>
                <a href="">
                  <div
                    className="book_cover"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="">
                    <p className="book_title ">{item.title}</p>
                    <p className="book_author">
                      <b>{item.author}</b>
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default PopularNow