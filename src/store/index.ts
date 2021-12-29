import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import uiSliceReducer from './features/ui/ui-slice';
import cartSliceReducer from './features/cart/cart-slice';

const store = configureStore({
	reducer: { ui: uiSliceReducer, cart: cartSliceReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
