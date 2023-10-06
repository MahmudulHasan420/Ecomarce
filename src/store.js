import { configureStore } from '@reduxjs/toolkit'
import Breadcrumslices from './slices/Breadcrumslices'
import Cartslices from './slices/Cartslices'

export default configureStore({
  reducer: {
    Breadcrum : Breadcrumslices,
    cart : Cartslices,
  },
})