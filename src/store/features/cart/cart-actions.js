import { uiActions } from '../ui/ui-slice';
import { cartActions } from './cart-slice';

export const updateCartOnServer = (cart) => (dispatch) => {
	dispatch(
		uiActions.showNotification({
			title: 'Pending...',
			message: 'Your cart is being stored',
		})
	);
	fetch(`${process.env.REACT_APP_FIREBASE_URL}/cart.json`, {
		method: 'PUT',
		body: JSON.stringify(cart),
	})
		.then((res) => {
			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Success',
					message: 'Your cart has been sent successfully!',
				})
			);
			if (res.ok) {
				return res.json();
			} else {
				throw new Error('Network problem');
			}
		})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error',
					message: err.message,
				})
			);
		});
};

export const initCart = (isCartInitiated) => (dispatch) => {
	dispatch(
		uiActions.showNotification({
			title: 'Pending...',
			message: 'Your cart is being initiated',
		})
	);
	fetch(`${process.env.REACT_APP_FIREBASE_URL}/cart.json`)
		.then((res) => {
			if (res.ok) {
				return res.json();
			} else {
				throw new Error('Network problem');
			}
		})
		.then((cart) => {
			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Success!',
					message: 'Your cart were initiated successfully!',
				})
			);
			isCartInitiated.current = true;
			dispatch(cartActions.replaceCart(cart));
		})
		.catch((err) => {
			console.log(err);
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Something went wrong when initiating your cart!',
				})
			);
		});
};
