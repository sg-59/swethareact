import {createSlice} from "@reduxjs/toolkit"

const loginfo=createSlice({
    name:"loginfo",
    initialState:{
        logdata:null
    },
    reducers:{
        addLoginData:(state,action)=>{
            console.log("action payload value...........",action);
            
state.logdata=action.payload
        },
        removedatas:(state,action)=>{
            state.logdata=null
        }
    }
})
export const {addLoginData,removedatas}=loginfo.actions
export default loginfo.reducer