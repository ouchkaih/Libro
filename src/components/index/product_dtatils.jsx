import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {fetchData} from '../reducers/BookReducer';

function Product_details() {
    //get all books from reducer 
    let allBooks = useSelector((state) => state.books.data);
    // get the books from database 
    const {prdId} = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
      console.log(allBooks.length)
      if(allBooks.length === 0){
        dispatch(fetchData());
      }
    }, [allBooks, dispatch]);
    console.log("heldasfsdl")

    let bookSelected = allBooks.filter(item => item.id === prdId)
    console.log(allBooks)
  return (
    <div>Product_details</div>
  )
}

export default Product_details


