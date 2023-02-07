import React, {useState,useEffect} from 'react'
import {useSelector} from 'react-redux';
import {AiFillStar} from "react-icons/ai"
import {all} from 'axios';
function Books() {
  // this page is for see all books 
    let allBooks = useSelector((state) => state.books.data);
    const [category, setSelectedOption] = useState("ALL CATEGORY");
    const [filteredData, setFilteredData] = useState([]);

    // get all categorys of books there is in website without repeatition 
    const uniqueArray = [...new Set(allBooks.map((item) => item.category))];

    const [range, setRange] = useState({ min: 0, max: 100 });
    const [selectLanguage, setSelectLanguage] = useState("ALL LANGUAGES")
    const [starsNum , setStarsNum ] = useState(0)
    const [discount, setDiscount] = useState(0);
    const [sort, setSort] = useState("most_population");

  // handleChange select input
    const byCategory = (e) => {
      setSelectedOption(e.target.value);
    };

    const SelectRantingStars = (e)=>{
      setStarsNum(parseInt(e.target.value));
    }

    // handleChange Language 
    const handlChangeLanguage = (e)=>{
      setSelectLanguage(e.target.value.toUpperCase());
    }

    const handlChangeDiscount = (e)=>{
      setDiscount(parseInt(e.target.value))
    }

    const sortBy =(e)=>{
      setSort(e.target.value.toLowerCase())
    }

    useEffect(() => {
      // if the user doesn't select the category of books we check if is language selected or not
      if (category === "ALL CATEGORY") {
        if (selectLanguage === "ALL LANGUAGES") {
          // filter books with stars numbers and Discount percent
          setFilteredData(
            allBooks.filter(
              (item) => item.rating >= starsNum && item.discount >= discount
            )
          );
        } else {
          // filter the books with language and rating stars number and Discount percent
          setFilteredData(
            allBooks.filter(
              (item) =>
                item.language.toUpperCase() === selectLanguage &&
                item.rating >= starsNum &&
                item.discount >= discount
            )
          );
        }
      } else {
        // whene the user choose the category of book we check if is language is selected too
        if (selectLanguage === "ALL LANGUAGES") {
          // filter books with stars numbers and the category and Discount percent
          setFilteredData(
            allBooks.filter(
              (item) =>
                item.rating >= starsNum &&
                item.category === category &&
                item.discount >= discount
            )
          );
        } else {
          // selelct books with language, category and rating stars number and Discount percent
          setFilteredData(
            allBooks.filter(
              (item) =>
                item.language.toUpperCase() === selectLanguage &&
                item.category === category &&
                item.rating >= starsNum &&
                item.discount >= discount
            )
          );
        }
      }
    }, [category, allBooks, selectLanguage, starsNum, discount]);


    useEffect (()=>{
      let trie = false
      while(trie){
        trie = true
        for 

      }
    },[sort])
 
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
                  <input type="radio" name="star_number" value={5} onChange={SelectRantingStars} id="fiveStar" className='' style={{width:"18px" , height:"18px" }} />
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
                  <input type="radio" name="star_number" value={4} onChange={SelectRantingStars} id="fourStar" className='' style={{width:"18px" , height:"18px" }} />
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
                  <input type="radio" name="star_number" value={3} onChange={SelectRantingStars} id="treeStar" className='' style={{width:"18px" , height:"18px" }} />
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
                  <input type="radio" name="star_number" value={2} onChange={SelectRantingStars} id="twoStar" className='' style={{width:"18px" , height:"18px" }} />
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
                  <input type="radio" name="star_number" value={1} onChange={SelectRantingStars} id="oneStar" className='' style={{width:"18px" , height:"18px" }} />
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
                  <input type="radio" name="discount_number" value={50} onChange={handlChangeDiscount} id="fiveDiscount" className='' style={{width:"18px" , height:"18px" }} />
                    <label htmlFor="fiveDiscount">
                      <h6 className="gray2_color">
                        <b>50% and more</b>
                      </h6>
                    </label>
                 </div> 
                 <div className="selectDiscount">
                  <input type="radio" name="discount_number" value={40} onChange={handlChangeDiscount} id="foufourDiscountrStar" className='' style={{width:"18px" , height:"18px" }} />
                    <label htmlFor="fourDiscount">
                      <h6 className="gray2_color">
                        <b>40% and more</b>
                      </h6>
                    </label>
                 </div>   
                 <div className="selectDiscount">
                  <input type="radio" name="discount_number" value={30} onChange={handlChangeDiscount} id="treeDiscount" className='' style={{width:"18px" , height:"18px" }} />
                    <label htmlFor="treeDiscount">
                      <h6 className="gray2_color">
                        <b>30% and more</b>
                      </h6>
                    </label>
                 </div>   
                 <div className="selectDiscount">
                  <input type="radio" name="discount_number" id="twoDiscount" value={20} onChange={handlChangeDiscount} className='' style={{width:"18px" , height:"18px" }} />
                    <label htmlFor="twoDiscount">
                      <h6 className="gray2_color">
                        <b>20% and more</b>
                      </h6>
                    </label>
                 </div>   
                 <div className="selectDiscount">
                  <input type="radio" name="discount_number" id="oneDiscount" value={10} onChange={handlChangeDiscount} className='' style={{width:"18px" , height:"18px" }} />
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
                  <select onChange={sortBy}>
                    <option value="Most_population">Most Population</option>
                    <option value="publication_date">Publication date</option>
                    <option value="Alphabetically_title">Alphabetically by title</option>
                    <option value="Alphabetically_author">Alphabetically by author</option>
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