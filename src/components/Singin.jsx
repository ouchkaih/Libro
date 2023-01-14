import React,{useEffect} from 'react'
import {useState} from 'react';
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux';
import {setConnection,  setUserId, setUserName} from './reducers/UserReducer';
import {useNavigate, Link} from 'react-router-dom';

function Singin() {
  const [user ,setUser]= useState({email:"", password:""})
  const [message, setMessage] = useState("")
  let userData = useSelector((state) => state.user);


  const handlChange = (e) => {
    setUser((oldData) => ({
      ...oldData,
      [e.target.name]: e.target.value,
    }));
  };


  let dispatch = useDispatch()
  let navigate = useNavigate()
  const signin = (e)=>{
    e.preventDefault()
    if(user.email !== "" && user.password !== ""){
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(user.userEmail)){
        let formData = new FormData()
        formData.append("userEmail",user.email)
        formData.append("userPassword", user.password);
        axios.post("http://localhost/php/w3ista/signin.php",formData).then(
          (res)=>{
            //if the email and the password is correct 
            if (res.data.isConnected === true) {
              // Change userName using action setUserName
              dispatch(setUserName(res.data.userName));
              // Change userId using action setUserId
              dispatch(setUserId(res.data.userId));
              // change Connection Status
              dispatch(setConnection(true));

              // create localStorage variable to store user Data userName, userId, connectionStatus
              localStorage.setItem("userInfo", JSON.stringify(res.data));
              navigate("/products");
              
            } else {
              setMessage(res.data.Error);
            }
          }
        );
      }else{
        setMessage("this Email is not valide !")
      }
    }else{
      setMessage("please fill out all form before submited")
    }
  }
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center p-5">
        <div className="w-50 border border-2  p-3  rounded-4">
          <h5 className='text-center'>Welcome back 😍</h5>
          <div>
            <div className="text-danger text-center">
              {message}
            </div>
            <form action="" className='p-4 pt-1'>
                <label htmlFor="" className='form-label mt-3'>Email: </label>
                <input type="email" className="form-control" name='email' onChange={handlChange} placeholder='Ex: Jack@exmaple.com' />
                <label htmlFor="" className='form-label mt-3'>Password: </label>
                <input type="password" className="form-control" name='password' onChange={handlChange} placeholder='Enter at least 8 characters' />
                <button className="btn btn-primary w-100 mt-4" onClick={signin}>Sign in</button>
                <div className='text-center p-4'>
                  You dont have account ?? 😱 go to <b><Link to="/signup">Sign UP</Link></b> Noooow!
                </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Singin