import React, { useState } from 'react';
import css from '../ProfileInfo/ProfileInfo.module.css';

import PreLoader from '../../common/PreLoader/PreLoader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/User_standart_icon.png';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

	let [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <PreLoader />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (formData) => {
		saveProfile(formData).then(() => {
			setEditMode(false);
		});
	}

	return (
		<div>
			<div className={css.descriptionBlock}>
				<img src={profile.photos.large || userPhoto} />
				{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
				{
					editMode
						? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
						: <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />
				}
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
			</div>
		</div>
	);
}

const Contacts = ({ contactTitle, contactValue }) => {
	return (
		<div><b>{contactTitle}</b>: {contactValue}</div>
	);
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {

	return (
		<>
			{
				isOwner &&
				<div>
					<button onClick={goToEditMode}>edit</button>
				</div>
			}
			<div>
				FullName: {profile.fullName}
			</div>
			<div>
				Looking for a Job: {profile.lookingForAJob ? "Yes" : "No"}
			</div>
			{
				profile.lookingForAJob &&
				<div>
					My Proffesional skills: {profile.lookingForAJobDescription}
				</div>
			}
			<div>
				About me: {profile.aboutMe}
			</div>
			<div>
				<b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
					return (
						<Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
					);
				})}
			</div>
		</>
	);
}



export default ProfileInfo;