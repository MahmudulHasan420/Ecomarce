import { createSlice } from '@reduxjs/toolkit'

export const Breadcrumslices = createSlice({
  name: 'counter',
  initialState: {
    currentname:"",
    previousname:""
  },
  reducers: {
    pagename: (state,action) => {
        state.previousname = state.currentname
        state.currentname = action.payload

    },
    
  },
})

export const { pagename } = Breadcrumslices.actions

export default Breadcrumslices.reducer