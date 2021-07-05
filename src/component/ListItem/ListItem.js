import React from 'react';
import { useGlobalContext } from '../../context';
import classes from './ListItem.module.css';
export default function ListItem({ name, categoryId, id }) {
	const { addItemToList } = useGlobalContext();
	function handleClick(name, categoryId, id) {
		const item = {
			name,
			categoryId,
			id,
			count: 1
		};
		addItemToList(item);
	}

	return (
		<div className={classes.head}>
			<button
				className={classes.btnAdd}
				onClick={() => handleClick(name, categoryId, id)}>
				+
			</button>
			<h4>
				<span className={classes.text}>{name}</span>
			</h4>
		</div>
	);
}
