import React from 'react';
import css from './../Messages.module.css';

const Message = (props) => {
	return <div className={css.message}>{props.message}</div>;
}

export default Message;