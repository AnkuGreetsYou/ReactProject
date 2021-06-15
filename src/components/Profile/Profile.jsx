import React from 'react';

import MyPostsContainer from './MyPosts/MyPosts.container.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {

	return (
		<>
			<ProfileInfo
				isOwner={props.isOwner}
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
				savePhoto={props.savePhoto}
				saveProfile={props.saveProfile}
			/>
			<MyPostsContainer />
		</>

	);
}

export default Profile;