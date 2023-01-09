import {createSlice} from "@reduxjs/toolkit";
const initialState = { userName : "", userId:"", isConnected :false}
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
                state.userId = action.payload.id;
            },
            setSignin : (state,action)=>{
                state.userName = action.payload.username
                state.userId = action.payload.id;
            }
        }
    }
)

export const { setConnection, setUserInfo, setSignin } = UserReducer.actions;
export default UserReducer.reducer 