import { createSelector } from "reselect";

const getAllUsersSelector = (state) => {
	return state.usersPage.users;
}

export const getAllUsers = createSelector(getAllUsersSelector, (users) => {
	return users; // 4 Example
});

export const getPageSize = (state) => {
	return state.usersPage.pageSize;
}

export const getTotalCount = (state) => {
	return state.usersPage.totalCount;
}

export const getCurrentPage = (state) => {
	return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
	return state.usersPage.isFetching;
}

export const getIsFollowingInProgress = (state) => {
	return state.usersPage.followingInProgress;
}