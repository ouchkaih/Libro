import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {setConnection, setUserInfo} from './reducers/UserReducer'

function Logout() {
  
      let dispatch = useDispatch();
      let navigate = useNavigate();
    useEffect(() => {
      dispatch(
        setUserInfo({
          userName: "",
          userEmail: "",
          userId: "",
          password: "",
        })
        
      );
      dispatch(setConnection(false));

      navigate("/products");
    }, []);
}

export default Logout