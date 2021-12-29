import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Notification from '../UI/Notification';
import MainHeader from './MainHeader';

const Layout = (props) => {
	const notification = useSelector((state) => state.ui.notification);
	return (
		<Fragment>
			<Notification {...notification} />
			<MainHeader />
			<main>{props.children}</main>
		</Fragment>
	);
};

export default Layout;
