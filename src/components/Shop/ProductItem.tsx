import { PropsWithChildren } from 'react';
import { useAppDispatch } from '../../store';

import { cartActions } from '../../store/features/cart/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
interface IProductItem {
	id: string;
	price: number;
	name: string;
	description: string;
}
const ProductItem = (props: PropsWithChildren<IProductItem>) => {
	const dispatch = useAppDispatch();

	const { name, price, description, id } = props;

	const addToCartHandler = () => {
		dispatch(cartActions.addItemToCart({ id, name, price }));
	};

	return (
		<li className={classes.item}>
			<Card>
				<header>
					<h3>{name}</h3>
					<div className={classes.price}>${price.toFixed(2)}</div>
				</header>
				<p>{description}</p>
				<div className={classes.actions}>
					<button onClick={addToCartHandler}>Add to Cart</button>
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;
