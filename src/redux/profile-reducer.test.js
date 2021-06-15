import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let newState = profileReducer({}, {});

let initialState = {
	posts: [
		{ id: 1, message: "Hi, how are you?", likesCount: 4 },
		{ id: 2, message: "It's my first post in JS", likesCount: 5 },
	],
};


test('Length of Posts Shld be (3)', () => {
	// 1 test data;
	let action = addPostActionCreator("Shld it work?");
	// 2 action;
	let newState = profileReducer(initialState, action);
	// 3 expactation;
	expect(newState.posts.length).toBe(3);
});

test('Message of new Post Shld be correct', () => {
	// 1 test data;
	let action = addPostActionCreator("Shld it work?");
	// 2 action;
	let newState = profileReducer(initialState, action);
	// 3 expactation;
	expect(newState.posts[2].message).toBe("Shld it work?");
});

test('Length of messages Shld be decremented', () => {
	// 1 test data;
	let action = deletePost(1);
	// 2 action;
	let newState = profileReducer(initialState, action);
	// 3 expactation;
	expect(newState.posts.length).toBe(1);
});

test('Length of messages Shldn\'t be changed, if postId is incorrect', () => {
	// 1 test data;
	let action = deletePost(1000);
	// 2 action;
	let newState = profileReducer(initialState, action);
	// 3 expactation;
	expect(newState.posts.length).toBe(2);
});