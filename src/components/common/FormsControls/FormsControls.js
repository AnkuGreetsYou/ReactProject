import React from 'react';
import { Field } from 'redux-form';
import css from './FormsControl.module.css';

const FormsControl = ({ input, meta, child, element, ...props }) => {

	const hasError = meta.touched && meta.error;

	return (
		<>
			<div className={css.form_control + " " + (hasError ? css.error : "")}>
				<div>
					{props.children}
				</div>
				{hasError && <span>{meta.error}</span>}
			</div>
		</>
	);
}

export const Textarea = (props) => {
	const { input, meta, child, element, ...restProps } = props;
	return <FormsControl {...props}><textarea {...input} {...restProps} /></FormsControl>;
}

export const Input = (props) => {
	const { input, meta, child, element, ...restProps } = props;
	return <FormsControl {...props} ><input {...input} {...restProps} /></FormsControl>;
}

export const createField = (component, validators, name, placeholder, props = {}, text = "") => {
	return (
		<div>
			<Field
				component={component}
				validate={validators}
				name={name}
				placeholder={placeholder}
				{...props}
			/>{text}
		</div>
	);
}