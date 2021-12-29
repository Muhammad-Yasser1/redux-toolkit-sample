import { ICartItem } from './../../../interfaces/CartItem.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type cartInitialStateType = {
	items: ICartItem[];
	totalQuantity: number;
};
const initialState: cartInitialStateType = {
	items: [],
	totalQuantity: 0,
};
const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		replaceCart(state, action: PayloadAction<typeof initialState>) {
			state.totalQuantity = action.payload.totalQuantity;
			state.items = action.payload.items;
		},
		addItemToCart(
			state,
			action: PayloadAction<{ id: string; name: string; price: number }>
		) {
			const newItem = action.payload;
			const existingItem = state.items.find(
				(item) => item.id === newItem.id
			);
			state.totalQuantity++;
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.name,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice += newItem.price;
			}
		},
		removeItemFromCart(state, action: PayloadAction<{ id: string }>) {
			const id = action.payload.id;
			const existingItem = state.items.find((item) => item.id === id)!;
			state.totalQuantity--;
			if (existingItem.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice -= existingItem.price;
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
