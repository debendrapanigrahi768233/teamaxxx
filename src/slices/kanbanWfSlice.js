import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tasks:{},
}


export const kanbanWfSlice=createSlice({
    name: 'kanbanWfSlice',
    initialState,
    reducers:{
        setTasks:(state,action)=>{
            state.tasks=action.payload
        },
    }
})

//for exporting the reducers for modifying the state
export const {setTasks} =kanbanWfSlice.actions

//for listing slices to the store
export default kanbanWfSlice.reducer