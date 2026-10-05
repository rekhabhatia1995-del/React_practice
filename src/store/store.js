
import { configureStore } from '@reduxjs/toolkit'
import cartreduer from "../slice/Cartslice"
export const store = configureStore({
  reducer: {
    cart:cartreduer
    
  },
})