import { createSlice } from '@reduxjs/toolkit'

export const Cartslices = createSlice({
  name: 'cart',
  initialState: {
    cartItem : [],
  },
  reducers: {
   addtocart: (state,action) => {

    if (state.cartItem.length > 0){
      let arr = []
          state.cartItem.map((item) => { 
          if (item.pname == action.payload.pname) {
              item.quantity = item.quantity + 1
              arr.push(item.pname);
          }
      });

      if (arr.indexOf(action.payload.pname) == -1) {
        state.cartItem.push(action.payload);
      }

  }else{

      state.cartItem.push(action.payload);
  }

    },
    
  },
})

export const { addtocart } = Cartslices.actions

export default Cartslices.reducer