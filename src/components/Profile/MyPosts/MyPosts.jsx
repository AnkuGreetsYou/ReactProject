import React from 'react';

import Post from '../MyPosts/Post/Post.jsx';

import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utilities/validators/validators.js';
import { Textarea } from '../../common/FormsControls/FormsControls.js';

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field name={"newPostText"}
				component={Textarea}
				placeholder={"Написать сообщение..."}
				validate={[required, maxLength10]}
			/>
			<button>Add post</button>
		</form>
	);
}

AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = React.memo(props => {

	let postsElements =
		[...props.posts]
			.reverse()
			.map(post =>
				<Post message={post.message}
					likesCount={post.likesCount}
					key={post.id}
				/>);

	let newPostElement = React.createRef();

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	}

	return (
		<>
			<h3>My posts</h3>
			<AddNewPostForm onSubmit={onAddPost} />
			{postsElements}
		</>
	);
});




export default MyPosts;