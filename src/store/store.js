import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../slices/cartSlices'
export default configureStore({
  reducer: cartSlice
})