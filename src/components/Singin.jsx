import React,{useEffect} from 'react'
import {useState} from 'react';
import axios from "axios"
import {useDispatch} from 'react-redux';
import {setConnection, setSignin, setUserInfo} from './reducers/UserReducer';
import {useNavigate, Link} from 'react-router-dom';

function Singin() {
  const [users , setUsers]= useState({})
  const [user ,setUser]= useState({email:"", password:""})
  const [userInfo , setUserInfos]=useState({})
   useEffect(() => {
     axios.get("http://localhost/php/w3ista/").then((res) => {
       setUsers(res.data);
     });
   }, []);
   useEffect(()=>{
    if(localStorage.getItem("userInfo") === "undefined"){
      localStorage.setItem("userInfo",)
    }
   })

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
    if(user.email !== ""&& user.password !== ""){
      let userCheck = users.filter(itmes=> itmes.email === user.email)
      if(userCheck.length){
        console.log(userCheck[0]);
        if( userCheck[0].password === user.password){
          
          dispatch(setSignin(userCheck[0]));
          setUserInfos()
          dispatch(setConnection(true))
          navigate("/products")
        }else{
          alert ("Email or password doesn't incorrect !")
        }
      }
    }
  }
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center p-5">
        <div className="w-50 border border-2  p-3  rounded-4">
          <h5 className='text-center'>Welcome back 😍</h5>
          <div>
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