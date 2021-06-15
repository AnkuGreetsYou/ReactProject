import React from 'react';
import store from './redux/redux-store';
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';

import LoginPage from './components/Login/Login';

import PreLoader from './components/common/PreLoader/PreLoader';

import { initializedApp } from './redux/app-reducer';
import { Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';

const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
	catchAllUnhandledErrors = (PromiseRejectionEvent) => {
		alert("some error");
	}
	componentDidMount() {
		this.props.initializedApp();
		window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
	}

	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
	}

	render() {

		if (!this.props.initialization) {
			return <PreLoader />
		}

		return (
			<div className="container" >
				<HeaderContainer />
				<main className="content">
					<Navbar />
					<div className="main__content">
						<Switch>
							<Route exact path="/"
								render={() => { return <Redirect to={"/profile"} /> }} />

							<Route path="/login"
								render={() => <LoginPage />} />

							<Route path='/profile/:userId?'
								render={withSuspense(ProfileContainer)} />

							<Route path="/messages"
								render={withSuspense(MessagesContainer)} />

							<Route path="/settings"
								render={() => <Settings />} />

							<Route path="/users"
								render={() => <UsersContainer />} />

							{/* <Route path="*"
								render={() => <div>404 not found</div>} /> */}
						</Switch>
					</div>
				</main>
				<Footer />
			</div >
		);
	}
}

const mapStateToProps = (state) => ({
	initialization: state.app.initialization,
});

let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializedApp }),

)(App);

const SamuraiJSApp = (props) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	);
}

export default SamuraiJSApp;