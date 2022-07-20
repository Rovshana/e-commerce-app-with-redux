import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: 0,
  }

  export const homeSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action)=>{
            state.value = action.payload
        },
        incrementOne: (state, action)=>{
            state.value = state.value +1

        }
    }
  })
  export const {increment, incrementOne} = homeSlice.actions
  export default homeSlice.reducer