import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {setConnection, setUserId, setUserName} from './reducers/UserReducer'

function Logout() {
  
      let dispatch = useDispatch();
      let navigate = useNavigate();
    useEffect(() => {
      dispatch(setUserName({userName: ""}));
      dispatch(setUserId({userId: ""}));
      dispatch(setConnection(false));

      navigate("/products");
    }, []);
}

export default Logout