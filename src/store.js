import { configureStore } from '@reduxjs/toolkit'
import Breadcrumslices from './slices/Breadcrumslices'

export default configureStore({
  reducer: {
    Breadcrum : Breadcrumslices,
  },
})