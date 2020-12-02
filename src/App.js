import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';
import toDosModule from './toDosModule';

function App() {
	const [items, setItems] = React.useState([]);

	const handleData = (dataFromDb) => {
		// The data returned from Firebase is an object. The keys of the object are the IDs of 
		// each to-do. Using Object.values, creates an array of just the values (which are objects such as { task: 'brush teeth' })
		// so newData becomes an array like so [{ task: 'brush teeth' }]
		const newData = Object.values(dataFromDb);

		// calling setItems causes the UI to re-render with the new data
		setItems(newData);
	}
	
	React.useEffect(() => {
		// useEffect is called after the component initially renders.
		// toDosModule.getToDos is a method that takes a callback. Whatever we hand it is what will happen to
		// the data that comes back from the firebase DB. In this case, we hand it the handleData function which 
		// creates an array of usable data and sets the new state with the data.
		toDosModule.getToDos(handleData);
	}, []);
	
	// this function is created here so we can access setItems and items.
	// it gets handed through props to the AddToDo component and is called when we 
	// click the Add To Do button.
	const handleAddNewItem = (value) => {
		// we create a new array of items by adding together the existing items and the new item
		const newItems = [...items, { task: value}];

		// we re-render the UI with the new items
		setItems(newItems);

		// we call the saveNewToDo method on our toDosModule to save the new item to the database
		toDosModule.saveNewToDo(value);
	}
	
  	return (
		<>
  	  		<Header headerText="Tristans To Do List" />
			<AddToDo addToDo={handleAddNewItem}/> 
			<ToDos items={items}/>
			<Footer footerText="⚡️ Built by JSD-10 ⚡️"/>
		</>
  	);
}

export default App;
