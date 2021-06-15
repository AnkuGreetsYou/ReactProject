import React from 'react';
import css from '../Navbar/Navbar.module.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className={css.navbar}>
			<div className={`${css.item} ${css.active}`}>
				<NavLink to="/profile" activeClassName={css.active}>Profile </NavLink>
			</div>
			<div className={css.item}>
				<NavLink to="/users" activeClassName={css.active}>Users</NavLink>
			</div>
			<div className={css.item}>
				<NavLink to="/messages" activeClassName={css.active}>Messages</NavLink>
			</div>
			<div className={css.item}>
				<NavLink to="/settings" activeClassName={css.active}>Settings</NavLink>
			</div>
		</nav>
	);
}

export default Navbar;