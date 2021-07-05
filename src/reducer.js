const reducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalItems = state.totalItems + action.payload.count;

		const existingCartItemIndex = state.basketListItems.findIndex(
			(item) => item.id === action.payload.id
		);
		const existingCartItem = state.basketListItems[existingCartItemIndex];

		let updatedItems;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				count: existingCartItem.count + 1
			};

			console.log(updatedItem);
			updatedItems = [...state.basketListItems];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.basketListItems.concat(action.payload);
		}
		return {
			...state,
			basketListItems: updatedItems,
			totalItems: updatedTotalItems
		};
	}

	if (action.type === 'REMOVE') {
		const existingCartItemIndex = state.basketListItems.findIndex(
			(item) => item.id === action.payload
		);
		const existingItem = state.basketListItems[existingCartItemIndex];
		const updatedTotalItems = state.totalItems - 1;

		let updatedItems;

		if (existingItem.count === 1) {
			updatedItems = state.basketListItems.filter(
				(item) => item.id !== action.payload
			);
		} else {
			const updatedItem = { ...existingItem, count: existingItem.count - 1 };
			updatedItems = [...state.basketListItems];
			updatedItems[existingCartItemIndex] = updatedItem;
		}

		return {
			basketListItems: updatedItems,
			totalItems: updatedTotalItems
		};
	}

	if (action.type === 'REMOVE_ALL') {
		return {
			...state,
			basketListItems: [],
			totalItems: 0
		};
	}
	return state;
};
export default reducer;
