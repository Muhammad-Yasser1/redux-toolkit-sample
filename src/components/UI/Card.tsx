import { PropsWithChildren } from 'react';
import classes from './Card.module.css';

const Card = (props: PropsWithChildren<{ className?: string }>) => {
	return (
		<section
			className={`${classes.card} ${
				props.className ? props.className : ''
			}`}
		>
			{props.children}
		</section>
	);
};

export default Card;
