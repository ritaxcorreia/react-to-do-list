import React from 'react';

function AddToDo(props) {

	const [inputValue, setInputValue] = React.useState('');

	// handleChange updates the value of the input, by setting the new value every time 
	// the user presses a key (it's called through the onChange property on the input)
	const handleChange = (event) => setInputValue(event.target.value);
	
	// handleAddToDo is added to the button via the onClick attribute
	// when a user clicks the button it calls toDosModule.saveNewToDo (because we pass it through props)
	// it also sets the value of the input back to an empty string so the input is ready for the next toDo
	const handleAddToDo = () => {
		props.addToDo(inputValue)
		setInputValue('');
	};
	
	return (
		<>
			<input type="text" value={inputValue} onChange={handleChange} />
			<button onClick={handleAddToDo}>Add To Do</button>
		</>
	)
}

export default AddToDo;
