import React from 'react';

function ToDos(props) {
	return (
		<ul>
			{/* 
			props.items.map simple creates an <li> for each item
			the key attribute is a unique identifier for reacts internal use
			*/}
			{props.items.map(item => <li key={item.task}>{item.task}</li>)}
		</ul>
	)
}

export default ToDos;
