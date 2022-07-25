var firebaseConfig = {
  apiKey: "AIzaSyCZR13i4_izIDliS-byKy4dh6UkWFBx5Ig",
  authDomain: "practice-activity-40209.firebaseapp.com",
  databaseURL: "https://practice-activity-40209-default-rtdb.firebaseio.com",
  projectId: "practice-activity-40209",
  storageBucket: "practice-activity-40209.appspot.com",
  messagingSenderId: "1089713320827",
  appId: "1:1089713320827:web:56657ee4befaf474c283de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
    });
}