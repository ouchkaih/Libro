import React from 'react'
import PopularNow from './popular'
import {useDispatch, useSelector} from 'react-redux'
import {fetchData} from '../reducers/BookReducer'
import Books from './books'
import Landing_page from './landing_page'
function Home() { 
  const booksData = useSelector(state=> state.books.data)
  // get the books from database 
  const dispatch = useDispatch()
  if(booksData.length === 0){
    dispatch(fetchData());
  }
  return (
    <div className="Home_container">
      <div className="containe_home">
        {/* import the landing page */}
        <Landing_page/>
        <div className="bg_gray">
          <PopularNow />
          <Books />
        </div>
      </div>
    </div>
  );
}

export default  React.memo(Home)