import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const initialState = {
    data:[]
}
export const BookReducer = createSlice(
    {
        name :"books",
        initialState,
        reducers:{
            getData : (state, action)=>{
                state.data= action.payload
            }
        }
    }
)

export const { getData } = BookReducer.actions;
export const fetchData = ()=>async (dispatch) =>{
  const response = await axios.get("http://localhost/php/libro/getBooks.php");
  console.trace()
  dispatch(getData(response.data))
}

export default BookReducer.reducer