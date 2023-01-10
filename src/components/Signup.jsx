import axios from 'axios';
import React, {useEffect} from 'react'
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import {setConnection, setUserId, setUserInfo, setUserName} from './reducers/UserReducer';

function Signup() {
    const [user, setUser]= useState({userName:"", userEmail:"",userPassword:""})
    const [error, setError] = useState("")
  const [users, setUsers]= useState([])
    const handlChange = (e)=>{
        setUser(oldData => (
            {
                ...oldData,
                [e.target.name]: e.target.value 
            }
        ))
    }
    
    let navigate = useNavigate()
    let dispatch = useDispatch()

    // get all user from database
    useEffect(() => {
      axios.get("http://localhost/php/w3ista/").then(
        (res)=>{
          setUsers(res.data)
        }
      )
      
    }, []);


    const createAccount = (e)=>{
        e.preventDefault()
        if(user.userName !== "" &&user.userEmail !== "" &&user.userPassword !== ""  ){
            if(!users.filter(items=>items.email === user.userEmail).length){
              let formdata = new FormData();
              formdata.append("username", user.userName);
              formdata.append("email", user.userEmail);
              formdata.append("password", user.userPassword);
              axios
                .post("http://localhost/php/w3ista/", formdata)
                .then((res) => {
                  if (localStorage.getItem("userInfo") !== undefined) {
                  } else {
                    // create localStorage variable to store user Data
                    localStorage.setItem("userInfo", JSON.stringify(user));
                  }
                });
              dispatch(setConnection(true));
              dispatch(setUserName(user.userName));
              dispatch(setUserId(user.id));
              navigate("/products");
            }else{
              setError("Please fill out the form befor submited !");
            }
        }else{
          setError("Please fill out the form befor submited !")
        }
    }
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center p-5">
        <div className="w-50 border border-2  p-3 rounded-4">
          <h5 className='text-center'>Easy to create your account 👌</h5>
          <div className="p2 text-center text-danger">
            {error}
          </div>
          <div>
            <form action="" className='p-4'>
                <label htmlFor="" className='form-label'>Username: </label>
                <input type="text" className="form-control" name='userName' onChange={handlChange} placeholder='Ex: Jack' />
                <label htmlFor="" className='form-label mt-3'>Email: </label>
                <input type="email" className="form-control" name='userEmail' onChange={handlChange} placeholder='Ex: Jack@exmaple.com' />
                <label htmlFor="" className='form-label mt-3'>Password: </label>
                <input type="password" className="form-control" name='userPassword' onChange={handlChange} placeholder='Enter at least 8 characters' />
                <button className="btn btn-primary w-100 mt-4" onClick={createAccount}>Create account</button>
                <div className="p-3 text-center">
                  <span>Already have account 😍? <b><Link to="/Signin" >Sign In</Link></b> </span>
                </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup