import React from 'react';
import css from '../Header/Header.module.css';

import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<header className={css.header}>
			<div className={css.header__logo}>
				<img className={css.header__image}
					src="https://skyrock.site/wp-content/uploads/2020/03/logo-CB-1500-RB-768x768.jpg"
					alt="" />
			</div>
			<div className={css.loginBlock}>
				{props.isAuth
					? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
					: <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	);
}

export default Header;