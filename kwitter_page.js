//YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyC5Cpe2wLs2mJyZeAfEMr8ZV9vpyyb_czk",
      authDomain: "kwitter-50aae.firebaseapp.com",
      databaseURL: "https://kwitter-50aae-default-rtdb.firebaseio.com",
      projectId: "kwitter-50aae",
      storageBucket: "kwitter-50aae.appspot.com",
      messagingSenderId: "888540658985",
      appId: "1:888540658985:web:94f8af8411bf5de6144b38"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
          msg = document.getElementById("msg").value;

          firebase.database().ref(room_name).push({
                name : user_name,
                message : msg,
                like : 0
          });

          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
row = "<div>"
//End code
      } });  }); }
getData();


