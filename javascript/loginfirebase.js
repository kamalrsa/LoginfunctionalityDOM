// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD81imq6LnS-cOhVmTFhOG_IwiuRQbPUss",
  authDomain: "loginform-2796c.firebaseapp.com",
  projectId: "loginform-2796c",
  storageBucket: "loginform-2796c.appspot.com",
  messagingSenderId: "1038597962175",
  appId: "1:1038597962175:web:d56d28a5c6dd9ef60a090a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {
  //const signupUser = document.getElementById("newuname").value;
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));
  alert("signed Up");
}

function signIn() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  alert("signedIn");
  window.location = "https://www.campuslife.co.in";
}
function signOut() {
  auth.signOut();
}
auth.onAuthStateChanged(function (user) {
  if (user) {
    let email = user.email;

    alert("active User" + email);
  } else {
    alert("no active user");
  }
});
