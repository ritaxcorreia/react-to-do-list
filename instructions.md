# How to connect your React application to your firebase database:

## Use the users module that we created on Tuesday as a reference!!

1. Create a new file called toDosModule.js in your src folder and import firebase (from the firebase.js file)

create a reference to your firebase database:

```
const db = firebase.database();
```

2. Create a module called toDos (don't forget to make it an IIFE!)

3. Add a method to it called saveNewToDo.


### remember: firebase needs unique ids for each item!! 

[Read this documentation to find out how to do that](https://firebase.google.com/docs/database/admin/save-data)

saveNewToDo should create a new toDo in your firebase database - this is how we did it for users, so adapt the code for toDos.

```
		createUser: function(userId, userName, email) {
			db.ref('users/' + userId).set({
				userName: userName,
				email: email,
			});
```

4. Dont forget to export default toDosModule!

5. import toDosModule into your app.js

6. Add to the handleAddNewItem function, so after your setItems, you should also call toDosModule.saveNewToDo(value) which will add an item to a toDos collection in your firebase db!

7. Go to firebase and check to see if the item is there

8. Create a getAllToDos method in your toDos module. It should take a callback and use that callback to handle the result of the api call

```
		getToDos: function(handleData) {
			db.ref('toDos/').once('value').then((snapshot) => handleData(snapshot.val()));
		},
```

9. use React.useEffect to call the data when app.js loads. Inside the function, call toDosModule.getAllToDos and pass it setItems as the callback

```
		React.useEffect(() => {
			toDosModule.getToDos(setItems);
		}, []);
```

10. Inspect the data that is now being handed through the props to ToDos.js and adapt the code to render the to do text in each of the list items.

## BONUS TASK

Delete a to do