export const updateObjectInArray = (items, itemId, objPropName, newPropsObj) => {
	return items.map(u => {
		if (u[objPropName] === itemId) {
			return {
				...u,
				...newPropsObj,
			};
		}
		return u;
	});
}