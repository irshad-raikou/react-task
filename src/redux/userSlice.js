import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name : 'user',
  initialState:{
    name:'',
    password:''
  },
  reducers:{
    add : (state,action)=>{
      state.name = action.payload.name;
      state.password = action.payload.password;
    },
    remove : (state)=>{
      state.name = null;
      state.password = null;
    }
  }
})

export const {add,remove} = userSlice.actions;

export default userSlice.reducer;