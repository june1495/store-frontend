import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    order: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    addOrder: (state, action) => {
      state.order.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    cleanCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, cleanCart, addOrder } = cartSlice.actions;
export default cartSlice.reducer;
