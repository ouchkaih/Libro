import React, {useState,useEffect} from 'react'
import {useSelector} from 'react-redux';

function Books() {
  // this page is for see all books 
    let allBooks = useSelector((state) => state.books.data);
    const [selectedOption, setSelectedOption] = useState("ALL CATEGORY");
    const [filteredData, setFilteredData] = useState([]);

    // get all categorys of books there is in website 
    const uniqueArray = [...new Set(allBooks.map((item) => item.category))];

  // handleChange select input
    const byCategory = (e) => {
      setSelectedOption(e.target.value);
    };


    useEffect(() => {
      if (selectedOption === "ALL CATEGORY") {
        // in the first load and if the use want to see all books 
        setFilteredData(allBooks);
      } else {
        // whene the use filtred using select 
        setFilteredData(
          allBooks.filter((item) => item.category === selectedOption)
        );
      }
    }, [selectedOption, allBooks]);

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
                <select name="" id="" className="select_category" onChange={byCategory}>
                  <option value="ALL CATEGORY" className="sort_select">
                    All Category
                  </option>
                  {uniqueArray.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="" className="select_label">
                  <b>Sort by</b>
                </label>
                <div class="select-container_sort">
                  <img src="icons/sort.svg" alt="" width="30px" />
                  <select>
                    <option value="Publication date">Publication date</option>
                    <option value="Alphabetically by title">Alphabetically by title</option>
                    <option value="Alphabetically by author">Alphabetically by author</option>
                    <option value="Most Population">Most Population</option>
                  </select>
                </div>
              </div>
            </div>
            {filteredData.length > 0 ? (
              <div className="books_container">
                {filteredData.map((item) => (
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
                          &nbsp;&nbsp;<span>{item.rating}</span>
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