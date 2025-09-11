import { createSlice } from "@reduxjs/toolkit";

// set the initialState of variables
const initialState ={
    currentUser:null,
    error:null,
    loading:false
}

const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
        signinStart:(state)=>{
            state.loading=true;
        },
        signinSuccess:(state,action)=>{
            state.currentUser=action.payload; // action which will fetch the response from the database.
            state.loading=false;
            state.error=null;
        },
        signinFailure:(state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
        },
    }
})

export const {signinStart,signinSuccess,signinFailure}=userSlice.actions;
export default userSlice.reducer;