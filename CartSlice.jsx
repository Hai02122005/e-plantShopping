import { createSlice } from "@reduxjs/toolkit";

const initialState = {
cartItems: []
};

const cartSlice = createSlice({
name: "cart",
initialState,
reducers: {
addItem: (state, action) => {},
removeItem: (state, action) => {},
incrementQuantity: (state, action) => {},
decrementQuantity: (state, action) => {}
}
});

export const {
addItem,
removeItem,
incrementQuantity,
decrementQuantity
} = cartSlice.actions;

export default cartSlice.reducer;

updateQuantity: (state, action) => {
const { id, quantity } = action.payload;

const item = state.cartItems.find(
item => item.id === id
);

if (item) {
item.quantity = quantity;
}
}
