import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name : 'user',
  initialState:{
    username:'',
    password:''
  },
  reducers:{
    add : (state,action)=>{
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    remove : (state)=>{
      state.username = null;
      state.password = null;
    }
  }
})

export const {add,remove} = userSlice.actions;

export default userSlice.reducer;