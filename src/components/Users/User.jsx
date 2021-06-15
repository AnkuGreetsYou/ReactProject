import React from 'react';
import css from './users.module.css';
import userPhoto from '../../assets/images/User_standart_icon.png';

import { NavLink } from 'react-router-dom';

let User = ({ users, followingInProgress, unfollow, follow, }) => {

	return (
		<>
			<div>
				<span>
					<div>
						<NavLink to={'/profile/' + users.id}>
							<img className={css.userPhoto}
								src={users.photos.small != null ? users.photos.small : userPhoto}
								alt="no img" />
						</NavLink>
					</div>
					<div>
						{users.followed
							? <button disabled={followingInProgress
								.some(id => id === users.id)}
								onClick={() => { unfollow(users.id) }}>
								UnFollow
										</button>
							: <button disabled={followingInProgress.some(id => id === users.id)}
								onClick={() => { follow(users.id) }}>
								Follow</button>
						}
					</div>
				</span>
				<span>
					<span>
						<div>{users.name}</div>
						<div>{users.status}</div>
					</span>
					<div>
						<div>{"user.location.country"}</div>
						<span>{"user.location.city"}</span>
					</div>
				</span>
			</div>
		</>
	)
}

export default User;