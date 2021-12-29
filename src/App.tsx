import { useEffect, useRef } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useAppDispatch, useAppSelector } from './store';
import {
	initCart,
	updateCartOnServer,
} from './store/features/cart/cart-actions';

export function App() {
	const showCart = useAppSelector((state) => state.ui.cartIsVisible);
	const cart = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();
	const isCartInitiated = useRef(false);
	const cartChanged = useRef(false);

	useEffect(() => {
		if (isCartInitiated.current && !cartChanged.current) {
			cartChanged.current = true; // to skip the first cart update because it will happen due to initCart
			return;
		}
		if (isCartInitiated.current && cartChanged.current) {
			dispatch(updateCartOnServer(cart));
		}
	}, [cart, dispatch]);

	useEffect(() => {
		dispatch(initCart(isCartInitiated));
	}, [dispatch]);

	return (
		<Layout>
			{showCart && <Cart />}
			<Products />
		</Layout>
	);
}
