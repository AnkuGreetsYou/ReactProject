import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from '../ProfileStatus';

describe("ProfileStatus Component", () => {

	test("status from props shld be in da state", () => {
		const component = create(<ProfileStatus status="it-kamasutra" />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("it-kamasutra");
	});

	test(`<span> creation shld be displayed`, () => {
		const component = create(<ProfileStatus status="it-kamasutra" />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span.children[0]).toBe("it-kamasutra");
	});

	test(`<input> creation shldn't be displayed`, () => {
		const component = create(<ProfileStatus status="it-kamasutra" />);
		const root = component.root;
		expect(() => {
			let input = root.findByType("input");
		}).toThrow();
	});

	test(`<input> shld be displayed in EditMode instead of <span>`, () => {
		const component = create(<ProfileStatus status="it-kamasutra" />);
		const root = component.root;
		let span = root.findByType("span");
		span.props.onClick();
		let input = root.findByType("input");
		expect(input.props.value).toBe("it-kamasutra");
	});

	test("callback shld be called", () => {
		const mockCallback = jest.fn();
		const component = create(<ProfileStatus status="it-kamasutra" updateStatus={mockCallback} />);
		const instance = component.getInstance();
		instance.deactivateEditMode();
		expect(mockCallback.mock.calls.length).toBe(1);
	});
});