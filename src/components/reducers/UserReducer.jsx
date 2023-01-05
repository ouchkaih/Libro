import {createSlice} from "@reduxjs/toolkit";
const initialState = { userName : "", userEmail:"" , userId:"", password:"", isConnected :false}
export const UserReducer = createSlice(
    {
        name : "user",
        initialState, 
        reducers :
        {
            setConnection : (state , action)=>{
                state.isConnected =action.payload
            },
            setUserInfo : (state,action)=>{
                state.userName = action.payload.userName
                state.userEmail = action.payload.userEmail
                state.userId = action.payload.id;
                state.password = action.payload.userPassword;
            },
            setSignin : (state,action)=>{
                state.userName = action.payload.username
                state.userEmail = action.payload.email
                state.userId = action.payload.id;
                state.password = action.payload.password;
            }
        }
    }
)

export const { setConnection, setUserInfo, setSignin } = UserReducer.actions;
export default UserReducer.reducer 