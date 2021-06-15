import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import css from '../../common/FormsControls/FormsControl.module.css';


const ProfileDataForm = ({ handleSubmit, profile, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<button>save</button>
			</div>
			{error &&
				<div className={css.formSummaryControl} >
					{error}
				</div>
			}
			<div>
				FullName: {createField(Input, [], "fullName", "full name")}
			</div>
			<div>
				Looking for a Job: {createField(Input, [], "lookingForAJob", null, { type: "checkbox" })}
			</div>
			<div>
				My Proffesional skills: {createField(Textarea, [], "lookingForAJobDescription", "Your skills...")}
			</div>
			<div>
				About me: {createField(Textarea, [], "aboutMe", "Write about yourself")}
			</div>
			<div>
				<b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
					return (
						<div key={key}>
							<b>{key}:{createField(Input, [], "contacts." + key, key)}</b>

						</div>
					);
				})}
			</div>
		</form>
	);
}

const ProfileReduxDataForm = reduxForm({ form: "edit-profile", })(ProfileDataForm)

export default ProfileReduxDataForm;