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
  
  // Setup login function
  function login() {
    var username = document.getElementById("username-input").value;
    var password = document.getElementById("password-input").value;
  
    console.log("Email", username, "password", password);
  
    // Use Firebase Authentication to sign in the user
    auth.signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("User signed in:", user);
  
        // Redirect to the desired page upon successful login
        window.location.href = "index.html";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Login error:", errorCode, errorMessage);
        alert("Login failed. Please check your username and password.");
      });
  }
  
  
  //sign-up process
  
module.exports = {
    login
}  