import React, { useContext, useReducer } from 'react';
import reducer from './reducer';
const AppContext = React.createContext();

const initialState = {
	basketListItems: [],
	totalItems: 0
};

const AppProvider = ({ children }) => {
	const addItemToList = (item) => {
		dispatch({ type: 'ADD', payload: item });
	};

	const removeItem = (id) => {
		dispatch({ type: 'REMOVE', payload: id });
	};
	const removeAll = () => {
		dispatch({ type: 'REMOVE_ALL' });
	};
	const [cartState, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider
			value={{
				basketListItems: cartState.basketListItems,
				totalItems: cartState.totalItems,
				addItemToList,
				removeItem,
				removeAll
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
