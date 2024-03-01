  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCu5PMmDK36wbPUh2voU9OKNlJ1zZRawKA",
    authDomain: "vishnulink-c5870.firebaseapp.com",
    projectId: "vishnulink-c5870",
    storageBucket: "vishnulink-c5870.appspot.com",
    messagingSenderId: "211856155640",
    appId: "1:211856155640:web:423cc522492eae3ef8ac0d",
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
  // Initialize Firebase Authentication
  const auth = firebase.auth();
  
   function signup(req,res) {
    // var email = document.getElementById("username-input").value;
    // var username = document.getElementById("username").value;
    // var password = document.getElementById("password-input").value;

    const{username, email,password} = req.body;
    
    console.log("Email", email,"username", username ,"password", password);

    auth.createUserWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        // User signed up successfully
        var user = userCredential.user;

        // Store additional user information in Firestore
        firebase.firestore().collection('users').doc(user.uid).set({
          email: email,
          username: username
        })
        .then(function() {
          console.log('User information stored in Firestore');
        //   alert("user is successfully signed up  :)");\
        res.json({
            message:"successfully signedup"
        })

        })
        .catch(function(error) {
          console.error('Error storing user information:', error);
          res.json({
            message:error
        })

        });

        console.log('User signed up:', user);
      })
      .catch(function(error) {
        // Handle errors during signup
        var errorCode = error.code;
        var errorMessage = error.message;
        res.json({
            message:errorMessage
        })
        console.error('Signup error:', errorCode, errorMessage);
      });
}

module.exports = {
    signup
}