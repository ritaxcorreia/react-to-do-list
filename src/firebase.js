import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCufV1408iAA9YvKrILpZlUlei5NVqq4cY",
	authDomain: "to-do-list-a7097.firebaseapp.com",
	databaseURL: "https://to-do-list-a7097.firebaseio.com",
	projectId: "to-do-list-a7097",
	storageBucket: "to-do-list-a7097.appspot.com",
	messagingSenderId: "427243797928",
	appId: "1:427243797928:web:d429b61c092f774e48b19d",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
