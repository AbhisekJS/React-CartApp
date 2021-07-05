import React from 'react';
import { useGlobalContext } from '../../context';
import classes from './BasketList.module.css';

export default function BasketList({ name, count, id }) {
	const { removeItem } = useGlobalContext();

	return (
		<div className={classes.head}>
			<button className={classes.btnAdd} onClick={() => removeItem(id)}>
				x
			</button>
			<h4>
				<span className={classes.text}>{name}</span>
				<span className={classes.count}>{count}</span>
			</h4>
		</div>
	);
}
