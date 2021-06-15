import Messages from './Messages';

import { sendMessageCreator } from '../../redux/messages-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage,
	};
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (newMessageBody) => {
			dispatch(sendMessageCreator(newMessageBody));
		},
	};
}

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps),
)(Messages);