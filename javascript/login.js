/* const user = [
  { username: "kamal", password: "Kk12345678" },
  { username: "kamal12", password: "Kk12345678" },
];

function getInfo() {
  const username = document.getElementById("uname").value;
  const password = document.getElementById("psw").value;

  for (let i = 0; i < user.length; i++) {
    if (username == user[i].username && password == user[i].password) {
      location.assign("http://w3schools-fa.ir/jsref/met_loc_assign.html");
      return;
    } else {
      alert("doesnot match");
    }
  }
} */

function getInfo() {
  const username = document.getElementById("uname").value;
  const password = document.getElementById("psw").value;
  let username_pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let password_pattern = /(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  if (username == "") {
    alert("please enter user name.");
  } else if (password == "") {
    alert("enter the password");
  } else if (!username_pattern.test(username)) {
    alert("Enter valid email id.");
  } else if (!password_pattern.test(password)) {
    alert(
      "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
    );
  } else {
    window.location = "https://www.campuslife.co.in";
  }
}
//Reset Inputfield code.
function clearFunc() {
  const username = (document.getElementById("uname").value = "");
  const password = (document.getElementById("psw").value = "");
}
