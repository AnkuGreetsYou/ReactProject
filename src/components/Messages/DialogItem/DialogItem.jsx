import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './../Messages.module.css';

const DialogItem = (props) => {
	let path = "/messages/" + props.id;
	return (
		<div className={css.dialog}>
			<NavLink to={path}>{props.name}</NavLink>
		</div >
	);
}

export default DialogItem;