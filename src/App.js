import './styles.css';
import Data from './data';
import { Fragment, useState } from 'react';
import ListItem from './component/ListItem/ListItem';
import BasketList from './component/BasketList/BasketList';
import { useGlobalContext } from './context';
import Header from './component/Header/Header';

export default function App() {
	const [state, setState] = useState(Data);
	const {
		basketListItems,
		addItemToList,
		totalItems,
		removeAll
	} = useGlobalContext();
	console.log(totalItems, 'gg');

	return (
		<div className="App">
			<Header />
			<div className="main">
				<div className="Groceries">
					<ul>
						{state.map((items) => {
							const { name, categoryId, id } = items;
							return (
								<li key={id}>
									<ListItem
										name={name}
										categoryId={categoryId}
										addItemToList={addItemToList}
										id={id}
									/>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="Basket">
					<ul>
						{basketListItems.map((items) => {
							const { name, count, id } = items;
							return (
								<li key={id}>
									<BasketList name={name} count={count} id={id} />
								</li>
							);
						})}
					</ul>
					{totalItems ? (
						<Fragment>
							<h3 className="totalItems">
								Total Items: <span>{totalItems}</span>
							</h3>
							<button className="btn-remove" onClick={removeAll}>
								Clear Cart
							</button>
						</Fragment>
					) : (
						<h3 className="cart-empty">Cart is empty</h3>
					)}
					<div className="removeAll"></div>
				</div>
			</div>
		</div>
	);
}
