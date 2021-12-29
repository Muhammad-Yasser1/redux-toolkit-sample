import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {
	initCart,
	updateCartOnServer,
} from './store/features/cart/cart-actions';

function App() {
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const isCartInitiated = useRef(false);
	const cartChanged = useRef(false);
	useEffect(() => {
		if (isCartInitiated.current && !cartChanged.current) {
			return (cartChanged.current = true); // to skip the first cart update because it will happen due to initCart
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

export default App;
