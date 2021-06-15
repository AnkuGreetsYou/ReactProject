import React from 'react';
import css from '../common/FormsControls/FormsControl.module.css';

import { reduxForm } from 'redux-form';
import { required } from '../../utilities/validators/validators';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField(Input, [required,], "email", "email")}
			{createField(Input, [required,], "password", "password", { type: "password" })}
			{createField(Input, [], "rememberMe", null, { type: "checkbox" }, "remember me")}
			{captchaUrl && <img src={captchaUrl} />}
			{captchaUrl && createField(Input, [required], "captcha", "Write symbols for login", {})}
			{error &&
				<div className={css.formSummaryControl} >
					{error}
				</div>
			}
			<div>
				<button>Login</button>
			</div>
		</form >
	);
}

const LoginReduxForm = reduxForm({ form: "login", })(LoginForm)

const Login = (props) => {

	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
	}

	if (props.isAuth) {
		return <Redirect to={"/profile"} />
	}

	return (
		<>
			<h1>Login</h1>
			<div>
				<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
			</div>
		</>
	);
}

const mapStateToProps = (state) => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);