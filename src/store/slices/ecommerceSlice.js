import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: 0,
  price: 0
}


export const ecommerceSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        increase:(state, action)=> {
            state.basket = state.basket +1
            state.price = state.price + 1.49

        },
        decrease: (state, action)=>{
    state.basket =  state.basket <= 0? 0 :state.basket -1
    state.price = state.price <=0? 0 : state.price -1.49
        }
    }

})

export const {increase, decrease} = ecommerceSlice.actions

export default  ecommerceSlice.reducer