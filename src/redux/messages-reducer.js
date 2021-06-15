const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	messagesData: [
		{ id: 1, name: "Dymich" },
		{ id: 2, name: "Andrey" },
		{ id: 3, name: "Sveta" },
		{ id: 4, name: "Slaven" },
	],

	messagesInfo: [
		{ id: 1, message: "Hello" },
		{ id: 2, message: "How are you?" },
		{ id: 3, message: "Are you coding right now?" },
	],
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messagesInfo: [...state.messagesInfo, { id: 4, message: body }]
			};

		default:
			return state;
	}
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });


export default messagesReducer;