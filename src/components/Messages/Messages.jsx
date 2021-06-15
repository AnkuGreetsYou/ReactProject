import React from 'react';
import css from '../Messages/Messages.module.css';
import AddMessagesForm from './AddMessageForm/AddMessageForm';

import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';



const Messages = (props) => {

	let state = props.messagesPage;

	let messagesDataElements =
		state.messagesData.map(message => <DialogItem name={message.name}
			key={message.id}
			id={message.id} />);
	let messagesInfoElements =
		state.messagesInfo.map(message => <Message message={message.message}
			key={message.id} />);

	let newMessageBody = state.newMessageBody;

	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	}

	return (
		<div className={css.messages__container}>
			<div className={css.dialogs}>
				<div className={css.dialogs__items}>
					{messagesDataElements}
				</div>
			</div>
			<div className={css.messages}>
				<div>{messagesInfoElements}</div>
				<AddMessagesForm onSubmit={addNewMessage} />
			</div>
		</div>
	);
}



export default Messages;