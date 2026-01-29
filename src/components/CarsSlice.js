import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,

  reducers: {
    addItem(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1, 
        });
      }
    },

    deleteItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    increaseItemQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseItemQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);

      if (item) {
        item.quantity -= 1;

        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },

    clearItems(state) {
      state.cartItems = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearItems,
} = carsSlice.actions;

export default carsSlice.reducer;
