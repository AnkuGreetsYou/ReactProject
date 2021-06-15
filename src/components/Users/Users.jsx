import React from 'react';

import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({ totalCount, pageSize, currentPage, onPageChanged, users, ...props }) => {

	return (
		<>
			<div>
				<Paginator totalCount={totalCount}
					pageSize={pageSize}
					currentPage={currentPage}
					onPageChanged={onPageChanged}
				/>
			</div>
			{users.map(u => (
				<User key={u.id}
					users={u}
					followingInProgress={props.followingInProgress}
					unfollow={props.unfollow}
					follow={props.follow}
				/>
			))}
		</>
	)
}

export default Users;