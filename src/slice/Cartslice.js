import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addtocart: (state, action) => {
      const product = action.payload;

      const existingItem = state.item.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        state.item.push({
          ...product,
          quantity: product.quantity || 1,
        });
      }
    },

    removetocart: (state, action) => {
      state.item = state.item.filter(
        (item) => item.id !== action.payload
      );
    },

    clearcart: (state) => {
      state.item = [];
    },
  },
});

export const {
  addtocart,
  removetocart,
  clearcart,
} = cartSlice.actions;

export default cartSlice.reducer;





// store
// slice=>action payload reducer
// dispatch
// useselectore