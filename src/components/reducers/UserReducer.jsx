import {createSlice} from "@reduxjs/toolkit";
const initialState = { userName : "", userId:"", isConnected :false}
export const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setConnection: (state, action) => {
      state.isConnected = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    }
    
  },
});

export const { setConnection, setUserName, setUserId } = UserReducer.actions;
export default UserReducer.reducer 