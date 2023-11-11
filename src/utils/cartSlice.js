import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "carts123",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, actions) => {
      state.items.push(actions.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // cannot see the data , its a proxy object
      console.log(state);
      // to see the data for debugging
      console.log(current(state));
      // mutates the state, (rtk we HAVE to mutate the state)
      state.items.length = 0; // modifies the original state
      // OR
      // return [{items : []}]; // obj will be replaced inside the original State

      // ⬇️ wont work because this way we are not mutating the state , only creating the reference
      // state.items = [] is a local copy
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
