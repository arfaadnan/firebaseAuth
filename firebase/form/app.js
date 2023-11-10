const firebaseConfig = {
  apiKey: "AIzaSyDUBKsghczmc4Js9flVNGJYzNoZ-51U_3k",
  authDomain: "fir-auth-1f3ba.firebaseapp.com",
  projectId: "fir-auth-1f3ba",
  storageBucket: "fir-auth-1f3ba.appspot.com",
  messagingSenderId: "738193974628",
  appId: "1:738193974628:web:db597bb331ed9f4fc98671"
};
  
  // Initialize Firebase
  
  var app = firebase.initializeApp(firebaseConfig);

  
  // console.log(app);
  
  // ***********************SignUp Auth*******************************
  
  function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
  
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(() => {
            alert("Email sent Successfully..");
            window.location.href  = 'dashboard.html'
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
      email.innerHTML= "";
      password.innerHTML= "";
  }
  
  // ***********************Login Auth*******************************
  
  function login() {
    var email = document.getElementById("Useremail");
    var password = document.getElementById("Userpassword");
  
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        window.location.href  = 'dashboard.html'
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      
      });
    
  }
  
  // ***********************Forget Password section*******************************
  
  function forgotPassword() {
    var email = document.getElementById("Useremail");
  
    firebase
      .auth()
      .sendPasswordResetEmail(email.value)
      .then(() => {
        alert("password reset email sent...");
        window.location.href  = 'dashboard.html'
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }
  
  // ***********************Google Login Auth*******************************
  
  function loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
  
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
  
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        window.location.href  = 'dashboard.html'
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
       alert(errorMessage);
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  
  // ***********************Github Login Auth*******************************
  
  function loginWithGithub() {
    var provider = new firebase.auth.GithubAuthProvider();
  
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
  
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = credential.accessToken;
  
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        window.location.href  = 'dashboard.html'
        // IdP data available in result.additionalUserInfo.profile.
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  // -----------------------Github------------------
  

  