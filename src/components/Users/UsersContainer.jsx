import React from 'react';

import Users from './Users';
import PreLoader from '../common/PreLoader/PreLoader.js';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { follow, unfollow, setCurrentPage, toggleIsFollowingInProgress, getUsers, }
	from '../../redux/users-reducer';
import { getPageSize, getTotalCount, getAllUsers, getCurrentPage, getIsFetching, getIsFollowingInProgress, }
	from '../../redux/selectors/users-selectors';


class UsersContainer extends React.Component {

	componentDidMount() {
		const { currentPage, pageSize } = this.props;
		this.props.getUsers(currentPage, pageSize);
	}

	onPageChanged = (pageNumber) => {
		const { pageSize } = this.props;
		this.props.getUsers(pageNumber, pageSize);
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <PreLoader /> : null}
				<Users totalCount={this.props.totalCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		)
	}
}


let mapStateToProps = (state) => {
	return {
		users: getAllUsers(state),
		pageSize: getPageSize(state),
		totalCount: getTotalCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getIsFollowingInProgress(state),
	};
}

export default compose(
	connect(
		mapStateToProps,
		{
			follow,
			unfollow,
			setCurrentPage,
			toggleIsFollowingInProgress,
			getUsers,
		},
	)(UsersContainer));