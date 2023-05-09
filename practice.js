var firebaseConfig = {
  apiKey: "AIzaSyDI5IpFsKVj7Kdj0KMp6Okju1d13tevw_k",
  authDomain: "conversa-928d8.firebaseapp.com",
  databaseURL: "https://conversa-928d8-default-rtdb.firebaseio.com",
  projectId: "conversa-928d8",
  storageBucket: "conversa-928d8.appspot.com",
  messagingSenderId: "872961403304",
  appId: "1:872961403304:web:b51a89d536930e8fe7959d"
};
  
  
  
    firebase.initializeApp(firebaseConfig);


function addUser()
{
  userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose : "adding user"
  });
}