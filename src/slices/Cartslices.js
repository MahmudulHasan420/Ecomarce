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
    dacrement:(state,action) =>{
      state.cartItem.map((item) => { 
        if (item.pname == action.payload.pname) {
            if(item.quantity>1){
              item.quantity = item.quantity - 1
            }
            else{
              state.cartItem.map((item,index) => { 
                if (item.pname == action.payload.pname) {
                   
                   state.cartItem.splice(index,1)
                }
            });
            }
           
        }
    });
    },
    increment:(state,action) =>{
      state.cartItem.map((item) => { 
        if (item.pname == action.payload.pname) {
            item.quantity = item.quantity + 1
           
        }
    });
    },
    remove:(state,action) =>{
      state.cartItem.map((item,index) => { 
        if (item.pname == action.payload.pname) {
           
           state.cartItem.splice(index,1)
        }
    });
    },

  },
})

export const { addtocart , dacrement, increment ,remove } = Cartslices.actions

export default Cartslices.reducer