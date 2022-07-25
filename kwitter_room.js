var firebaseConfig = {
  apiKey: "AIzaSyBou49edJ2yp2q1Awc8RpzzGmC7QJfpYG4",
  authDomain: "kwitter-8f8e4.firebaseapp.com",
  databaseURL: "https://kwitter-8f8e4-default-rtdb.firebaseio.com",
  projectId: "kwitter-8f8e4",
  storageBucket: "kwitter-8f8e4.appspot.com",
  messagingSenderId: "458266627644",
  appId: "1:458266627644:web:5c36a2094236d2305d3d39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
