import React from 'react';
import css from '../Post/Post.module.css';

const Post = (props) => {

	return (
		<div className={css.posts}>
			<div className={css.item}>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ava_Addams_AVN_Expo_2015_3.jpg/330px-Ava_Addams_AVN_Expo_2015_3.jpg" alt="" />
				{props.message}
				<div className="like">
					<span>
						Like this {props.likesCount}
					</span>
				</div>
			</div>
		</div>
	);
}

export default Post;