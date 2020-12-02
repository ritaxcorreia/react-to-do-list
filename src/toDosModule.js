import firebase from './firebase';

const toDosModule = (function() {
	// we create a reference to our database
	const db = firebase.database();

	return {
		saveNewToDo: function(task) {
			// using .push creates a new unique ID in the database for each item
			db.ref('toDos/').push({ task });
		},
		getToDos: function(handleData) {
			db.ref('toDos/').once('value').then((snapshot) => handleData(snapshot.val()));
		},
	}
})();

export default toDosModule;
