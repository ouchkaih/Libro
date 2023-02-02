import React, {useState,useEffect} from 'react'
import {useSelector} from 'react-redux';
import {AiFillStar} from "react-icons/ai"
import {all} from 'axios';
function Books() {
  // this page is for see all books 
    let allBooks = useSelector((state) => state.books.data);
    const [selectedOption, setSelectedOption] = useState("ALL CATEGORY");
    const [filteredData, setFilteredData] = useState([]);

    // get all categorys of books there is in website without repeatition 
    const uniqueArray = [...new Set(allBooks.map((item) => item.category))];

    const [range, setRange] = useState({ min: 0, max: 100 });
    const [selectLanguage, setSelectLanguage] = useState("ALL LANGUAGES")

  // handleChange select input
    const byCategory = (e) => {
      setSelectedOption(e.target.value);
    };

  // handleChange Language 
  const handlChangeLanguage = (e)=>{
    setSelectLanguage(e.target.value.toUpperCase());
  }

    useEffect(() => {
      if (selectLanguage !== "ALL LANGUAGES") {
        setFilteredData(
          filteredData.filter(
            (item) => item.language.toUpperCase() === selectLanguage
          )
        );
      } else {
        if(selectedOption !== "ALL CATEGORY"){
          setFilteredData(filteredData);
        }else{
          setFilteredData(allBooks);

        }
      }
    }, [selectLanguage]);

    useEffect(() => {
      if (selectedOption === "ALL CATEGORY") {
        // in the first load and if the use want to see all books 
        setFilteredData(allBooks)        
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
            <div>
              <h6>
                <b>Price</b>
              </h6>
              <div className='priceContainer'> 
                <div className='minPrice'>
                    From <span><b>200</b></span> Dhs
                </div>
                <div className='maxPrice'>
                    Up To <span><b>200</b></span> Dhs
                </div>
              </div>
              <div className='' >
                <input type="range" name="" id="" />
              </div>
            </div>
            <div className="Languages_container ">
              <h6><b>Languages</b></h6>
              <select name="" id="" onChange={handlChangeLanguage} className='select_style'>
                <option value="ALL LANGUAGES">select Language</option>
                <hr />
                <option value="English">English</option>
                <option value="French">French</option>
              </select>
            </div>
            <div className="evaluationClients">
              <h6><b>Evaluation Clients</b></h6>
              <div>
                 <div className="selectStar">
                  <input type="radio" name="star_number" id="fiveStar" className='' style={{width:"18px" , height:"18px" }} />
                 {/* stars icons  */}
                    <label htmlFor="fiveStar">
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="primary_color" />
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="primary_color"/>
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="primary_color"/>
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="primary_color"/>
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="primary_color"/>
                    </label>
                 </div>
                 <div className="selectStar">
                  <input type="radio" name="star_number" id="fourStar" className='' style={{width:"18px" , height:"18px" }} />
                 {/* stars icons  */}
                    <label htmlFor="fourStar">
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="primary_color" />
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="primary_color"/>
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="primary_color"/>
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="primary_color"/>
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="gray2_color"/>
                    </label>
                 </div>
                 <div className="selectStar">
                  <input type="radio" name="star_number" id="treeStar" className='' style={{width:"18px" , height:"18px" }} />
                 {/* stars icons  */}
                    <label htmlFor="treeStar">
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="primary_color" />
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="primary_color"/>
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="primary_color"/>
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="gray2_color"/>
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="gray2_color"/>
                    </label>
                 </div>
                 <div className="selectStar">
                  <input type="radio" name="star_number" id="twoStar" className='' style={{width:"18px" , height:"18px" }} />
                 {/* stars icons  */}
                    <label htmlFor="twoStar">
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="primary_color" />
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="primary_color"/>
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="gray2_color"/>
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="gray2_color"/>
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="gray2_color"/>
                    </label>
                 </div>
                 <div className="selectStar">
                  <input type="radio" name="star_number" id="oneStar" className='' style={{width:"18px" , height:"18px" }} />
                 {/* stars icons  */}
                    <label htmlFor="oneStar">
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="primary_color" />
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="gray2_color"/>
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="gray2_color"/>
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="gray2_color"/>
                      <AiFillStar style={{width:"25px" , height:"25px" , marginLeft:"8px"}} className="gray2_color"/>
                    </label>
                 </div>
              </div>
            </div>
            <div className="discount_Container">
              <h6>
                <b>Discount</b>
              </h6>
              <div>
                <div className="selectDiscount">
                  <input type="radio" name="star_number" id="fiveDiscount" className='' style={{width:"18px" , height:"18px" }} />
                    <label htmlFor="fiveDiscount">
                      <h6 className="gray2_color">
                        <b>50% and more</b>
                      </h6>
                    </label>
                 </div> 
                 <div className="selectDiscount">
                  <input type="radio" name="star_number" id="foufourDiscountrStar" className='' style={{width:"18px" , height:"18px" }} />
                    <label htmlFor="fourDiscount">
                      <h6 className="gray2_color">
                        <b>40% and more</b>
                      </h6>
                    </label>
                 </div>   
                 <div className="selectDiscount">
                  <input type="radio" name="star_number" id="treeDiscount" className='' style={{width:"18px" , height:"18px" }} />
                    <label htmlFor="treeDiscount">
                      <h6 className="gray2_color">
                        <b>30% and more</b>
                      </h6>
                    </label>
                 </div>   
                 <div className="selectDiscount">
                  <input type="radio" name="star_number" id="twoDiscount" className='' style={{width:"18px" , height:"18px" }} />
                    <label htmlFor="twoDiscount">
                      <h6 className="gray2_color">
                        <b>20% and more</b>
                      </h6>
                    </label>
                 </div>   
                 <div className="selectDiscount">
                  <input type="radio" name="star_number" id="oneDiscount" className='' style={{width:"18px" , height:"18px" }} />
                    <label htmlFor="oneDiscount">
                      <h6 className="gray2_color">
                        <b>10% and more</b>
                      </h6>
                    </label>
                 </div>                  
              </div>
            </div>
          </div>
          <div className="books_result">
            <div className="sort_container">
              <div>
                <label htmlFor="" className="select_label">
                  <b>Category </b>
                </label>
                <select name="" id="" className="select_style" onChange={byCategory}>
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