import profileReducer from './profile-reducer.js';
import messagesReducer from './messages-reducer.js';
import sidebarReducer from './sidebar-reducer.js';

let store = {
	_state: {

		profilePage: {
			posts: [
				{ id: 1, message: "Hi, how are you?", likesCount: 4 },
				{ id: 2, message: "It's my first post in JS", likesCount: 5 },
			],

			newPostText: 'it-kamasutra.com',
		},

		messagesPage: {
			messagesData: [
				{ id: 1, name: "Dymich" },
				{ id: 2, name: "Andrey" },
				{ id: 3, name: "Sveta" },
			],

			messagesInfo: [
				{ id: 1, message: "Hello" },
				{ id: 2, message: "How are you?" },
				{ id: 3, message: "Are you coding right now?" },
			],

			newMessageBody: "",
		},

		sidebar: {},
	},
	_callSubscriber() {
		console.log('State was changed');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);

	},

}

export default store;
window.store = store;