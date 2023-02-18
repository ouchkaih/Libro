import React, {useState,useEffect} from 'react'
import {useSelector} from 'react-redux';
import {AiFillStar} from "react-icons/ai"

function Books() {
  // this page is for see all books 
    let allBooks = useSelector((state) => state.books.data);
    const [category, setSelectedOption] = useState("ALL CATEGORY");
    const [filteredData, setFilteredData] = useState([]);

    // get all categorys of books there is in website without repeatition 
    const uniqueArray = [...new Set(allBooks.map((item) => item.category))];

    const [selectLanguage, setSelectLanguage] = useState("ALL LANGUAGES")
    const [sort, setSort] = useState("MOST POPULAR");
    const [sortFilterApplied, setSortFilterApplied] = useState(false);
    const [select_no_language, setselect_no_language]= useState(true)

    // create variable to remove the selcted input anfter the user click the button clear filter 
    const [discount_selected_input, SetDiscount_selected_input] = useState({first:false, second:false , third:false, fourth:false,fifth:false, discount:0 });
    const [stars_selected_input, SetStars_selected_input] = useState({first:false, second:false , third:false, fourth:false,fifth:false, starsNum:0 });
    
    const [value, setValue] = useState({ min: 0, max: 100 });

    const handleChange = (event) => {
      setValue({
        ...value,
        [event.target.name]: event.target.value,
      });

    };

  // handleChange select input
    const byCategory = (e) => {
      setSelectedOption(e.target.value);
    };

    // this function to know the number of rating starts user select 
    function SelectRantingStars (value , name){
      SetStars_selected_input(() => ({
        starsNum: value,
        [name]: true,
      }));
      console.log(stars_selected_input
        )
    }

    // handleChange Language 
    const handlChangeLanguage = (e)=>{
      setSelectLanguage(e.target.value.toUpperCase());
      setselect_no_language(false)
    }

    // handling the descount input radio 
    const handlChangeDiscount = (value, name)=>{
      SetDiscount_selected_input(() => ({
        discount:value,
        [name]: true,
      }));
    }

    // sorting the responese 
    const sortBy =(e)=>{
      setSort(e.target.value.toUpperCase());
    }



    useEffect(()=>{
      if (selectLanguage === "ALL LANGUAGES" && category=== "ALL CATEGORY") {
          // filter books with stars numbers and Discount percent
          if(discount_selected_input.discount === 0 && stars_selected_input.starsNum === 0 ){
            setFilteredData(
            allBooks.filter(
              (item) =>
                item.rating >= stars_selected_input.starsNum &&
                item.discount >= discount_selected_input.discount
            )
          );
          }
        }
      },
    [allBooks, discount_selected_input.discount, selectLanguage, stars_selected_input.starsNum, category])

    // Note: I use this syntax because the user can select multip option for example can filter with ranting stars number with choose the language and the range price 
    function apply_Filter() {
      // if the user doesn't select the category of books we check if is language selected or not
      if (category === "ALL CATEGORY") {
        if (selectLanguage === "ALL LANGUAGES") {
          // filter books with stars numbers and Discount percent
          setFilteredData(
            allBooks.filter(
              (item) =>
                item.rating >= stars_selected_input.starsNum &&
                item.discount >= discount_selected_input.discount
            )
          );
        } else {
          // filter the books with language and rating stars number and Discount percent
          setFilteredData(
            allBooks.filter(
              (item) =>
                item.language.toUpperCase() === selectLanguage &&
                item.rating >= stars_selected_input.starsNum &&
                item.discount >= discount_selected_input.discount
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
                item.rating >= stars_selected_input.starsNum &&
                item.category === category &&
                item.discount >= discount_selected_input.discount
            )
          );
        } else {
          // selelct books with language, category and rating stars number and Discount percent
          setFilteredData(
            allBooks.filter(
              (item) =>
                item.language.toUpperCase() === selectLanguage &&
                item.category === category &&
                item.rating >= stars_selected_input.starsNum &&
                item.discount >= discount_selected_input.discount
            )
          );
        }
      }
    }
  
    
    // this function removing the filler if it applyed 
    const Clear_Filter = (e)=>{
      // affter we change to values of this states we call a useEffect that re-rende the page and initiale the table 
      setSelectLanguage("ALL LANGUAGES");
      setselect_no_language(true)
      SetStars_selected_input({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
        starsNum: 0,
      });
      SetDiscount_selected_input({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
        discount: 0,
      });
      setSelectedOption("ALL CATEGORY")
    }


    // this to handling the sorting selected I didn't use any build-in function in this part 
    useEffect (()=>{
      // first we consider that the table is note sorted as user wanted
      let is_sorted = false;
      setFilteredData(allBooks)
      switch (sort) {
        case "PUBLICATION DATE":
          // note: samme logic used in such case 
          while (is_sorted === false) {
            /*after we consider that the table is sored to make sur finish the boocle while but if there is just two values not sorted we 
            change the value of the variable is_sorted to check if there is another values not sorted, and we repeat that untile we the hole talbe
            sort */
            is_sorted = true;
            for (let i = 0; i < filteredData.length - 1; i++) {
              if (filteredData[i].date_addition < filteredData[i + 1].date_addition) {
                let firstObj = filteredData[i];
                filteredData.splice(i, 1, filteredData[i + 1]);
                filteredData.splice(i + 1, 1, firstObj);
                is_sorted = false;
              }
            }
          }
          break;
        case "ALPHABETICALLY AUTHOR":
          console.log("im here")
          while (is_sorted === false) {
            is_sorted = true;
            for (let i = 0; i < filteredData.length - 1; i++) {
              if (filteredData[i].author.toUpperCase() > filteredData[i + 1].author.toUpperCase()) {
                let firstObj = filteredData[i];
                filteredData.splice(i, 1, filteredData[i + 1]);
                filteredData.splice(i + 1, 1, firstObj);
                is_sorted = false;
              }
            }
          }
          break;
        case "ALPHABETICALLY TITLE":
          while (is_sorted === false) {
            is_sorted = true;
            for (let i = 0; i < filteredData.length - 1; i++) {
              if (filteredData[i].title.toUpperCase() > filteredData[i + 1].title.toUpperCase()) {
                let firstObj = filteredData[i];
                filteredData.splice(i, 1, filteredData[i + 1]);
                filteredData.splice(i + 1, 1, firstObj);
                is_sorted = false;
              }
            }
          }
          break;
        default:
          while (is_sorted === false) {
            is_sorted = true;
            for (let i = 0; i < filteredData.length - 1; i++) {
              if (filteredData[i].rating < filteredData[i + 1].rating) {
                let firstObj = filteredData[i];
                filteredData.splice(i, 1, filteredData[i + 1]);
                filteredData.splice(i + 1, 1, firstObj);
                is_sorted = false;
              }
            }
          }
          break;
          
      }
      setSortFilterApplied(!sortFilterApplied);
      setFilteredData(filteredData);
    },[sort, filteredData])
 
  return (
    <>
      <div>
        <h5 className="bg_white title secondary-color">
          <b className="">All Bookss</b>
        </h5>
        <div className="book_container">
          <div className="filter">
            <div>
              <div className="category_container">
                <h6 htmlFor="" >
                  <b>Category </b>
                </h6>
                <select nlabelame="" id="" className="select_style" onChange={byCategory}>
                  <option value="ALL CATEGORY" className="sort_select">
                    All Category
                  </option>
                  {uniqueArray.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <h6>
                <b>Price</b>
              </h6>
              <div className='priceContainer'> 
                <div className='minPrice'>
                    From <span><b>{value.min}</b></span> Dhs
                </div>
                <div className='maxPrice'>
                    Up To <span><b> {value.max}</b></span> Dhs
                </div>
              </div>
              <div className='' >
                <div className="range-input">
                  <input
                    type="range"
                    name="min"
                    min={0}
                    max={100}
                    value={value.min}
                    onChange={handleChange}
                    className="range-input__slider"
                  />
                  <input
                    type="range"
                    name="max"
                    min={0}
                    max={100}
                    value={value.max}
                    onChange={handleChange}
                    className="range-input__slider"
                  />
                </div>
              </div>
            </div>
            <div className="Languages_container ">
              <h6><b>Languages</b></h6>
              <select name="" id="" onChange={handlChangeLanguage} className="select_style">
                <option value="ALL LANGUAGES" selected={select_no_language}>select Language</option>
                <option value="English">English</option>
                <option value="French">French</option>
              </select>
            </div>
            <div className="evaluationClients">
              <h6><b>Evaluation Clients</b></h6>
              <div>
                 <div className="selectStar">
                  <input type="radio" name="star_number" onChange={()=>{SelectRantingStars(5, "first")}} id="fiveStar" className='' style={{width:"18px" , height:"18px" }} checked={stars_selected_input.first} />
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
                  <input type="radio" name="star_number" onChange={()=>{SelectRantingStars(4,"second")}} id="fourStar" className='' style={{width:"18px" , height:"18px" }} checked={stars_selected_input.second} />
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
                  <input type="radio" name="star_number" onChange={()=>{SelectRantingStars(3, "third")}} id="treeStar" className='' style={{width:"18px" , height:"18px" }} checked={stars_selected_input.third} />
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
                  <input type="radio" name="star_number" onChange={()=>{SelectRantingStars(2, "fourth")}} id="twoStar" className='' style={{width:"18px" , height:"18px" }} checked={stars_selected_input.fourth} />
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
                  <input type="radio" name="star_number" onChange={()=>{SelectRantingStars(1, "fifth")}} id="oneStar" className='' style={{width:"18px" , height:"18px" }} checked={stars_selected_input.fifth} />
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
                  <input type="radio" name="discount_number" onChange={()=>{handlChangeDiscount(50,"first")}} id="fiveDiscount" className='' style={{width:"18px" , height:"18px" }} checked={discount_selected_input.first}/>
                    <label htmlFor="fiveDiscount">
                      <h6 className="gray2_color">
                        <b>50% and more</b>
                      </h6>
                    </label>
                 </div> 
                 <div className="selectDiscount">
                  <input type="radio" name="discount_number"  onChange={()=>{handlChangeDiscount(40,"second")}} id="foufourDiscountrStar" className='' style={{width:"18px" , height:"18px" }} checked={discount_selected_input.second}/>
                    <label htmlFor="fourDiscount">
                      <h6 className="gray2_color">
                        <b>40% and more</b>
                      </h6>
                    </label>
                 </div>   
                 <div className="selectDiscount">
                  <input type="radio" name="discount_number"  onChange={()=>{handlChangeDiscount(30,"third")}} id="treeDiscount" className='' style={{width:"18px" , height:"18px" }} checked={discount_selected_input.third}/>
                    <label htmlFor="treeDiscount">
                      <h6 className="gray2_color">
                        <b>30% and more</b>
                      </h6>
                    </label>
                 </div>   
                 <div className="selectDiscount">
                  <input type="radio" name="discount_number" id="twoDiscount"  onChange={()=>{handlChangeDiscount(20,"fourth")}} className='' style={{width:"18px" , height:"18px" }} checked={discount_selected_input.fourth}/>
                    <label htmlFor="twoDiscount">
                      <h6 className="gray2_color">
                        <b>20% and more</b>
                      </h6>
                    </label>
                 </div>   
                 <div className="selectDiscount">
                  <input type="radio" name="discount_number" id="oneDiscount" value={10} onChange={()=>{handlChangeDiscount(10,"fifth")}} className='' style={{width:"18px" , height:"18px" }} checked={discount_selected_input.fifth}/>
                    <label htmlFor="oneDiscount">
                      <h6 className="gray2_color">
                        <b>10% and more</b>
                      </h6>
                    </label>
                 </div>                  
              </div>
            </div>
            <div className='clear_btn_container'> 
              <button className='apply_filter_btn' onClick={apply_Filter}>Apply Filter</button>
              <button className='clear_filter_btn' onClick={Clear_Filter}>Clear Filter</button>
            </div>
          </div>
          <div className="books_result">
            <div className="sort_container">
              <span className='result_number'>
                <b>
                  {filteredData.length} Results
                </b>
              </span>
              <div>
                <label htmlFor="" className="select_label">
                  <b>Sort by</b>
                </label>
                <div className="select-container_sort">
                  <img src="icons/sort.svg" alt="" width="30px" />
                  <select onChange={sortBy}>
                    <option value="Most Popular">Most Popular</option>
                    <option value="publication date">Publication date</option>
                    <option value="Alphabetically title">Alphabetically by title</option>
                    <option value="Alphabetically author">Alphabetically by author</option>
                  </select>
                </div>
              </div>
            </div>
            {filteredData.length > 0 ? (
              <div className="books_container">
                {filteredData.map((item) => (
                  <div className="book bg_white" key={item.book_id}>
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