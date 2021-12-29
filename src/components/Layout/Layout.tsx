import { Fragment, PropsWithChildren, ReactNode } from 'react';
import { useAppSelector } from '../../store';
import Notification from '../UI/Notification';
import MainHeader from './MainHeader';

const Layout = (props: PropsWithChildren<ReactNode>) => {
	const notification = useAppSelector((state) => state.ui.notification);
	return (
		<Fragment>
			<Notification {...notification} />
			<MainHeader />
			<main>{props.children}</main>
		</Fragment>
	);
};

export default Layout;
