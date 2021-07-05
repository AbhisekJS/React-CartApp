import React from 'react';
import classes from './BasketList.module.css';

export default function BasketList({ name, count, id }) {
	function handleClick(id) {}
	return (
		<div className={classes.head}>
			<button className={classes.btnAdd} onClick={() => handleClick(id)}>
				x
			</button>
			<h4>
				<span className={classes.text}>{name}</span>
				<span className={classes.count}>{count}</span>
			</h4>
		</div>
	);
}
