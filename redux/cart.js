import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the cart
const initialState = {
  items: [], // Array to store cart items
};

// Create a slice of the store for the cart
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart
    addItemToCart: (state, action) => {
      const { id, name, price, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        // If item already exists, update its quantity
        existingItem.quantity += quantity;
      } else {
        // Otherwise, add a new item to the cart
        state.items.push({ id, name, price, quantity });
      }
    },

    // Remove an item from the cart by ID
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    // Update the quantity of an existing item
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },

    // Increase item quantity by 1
    increaseItemQuantityByOne: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },

    // Decrease item quantity by 1
    decreaseItemQuantityByOne: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },

    // Clear all items from the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export action creators
export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  increaseItemQuantityByOne,
  decreaseItemQuantityByOne,
  clearCart,
} = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
