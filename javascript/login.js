const user = [];

function newUser() {
  const signupUser = document.getElementById("newuname").value;
  const signupEmail = document.getElementById("email").value;
  const signupPassword = document.getElementById("newpsw").value;
  const newUser = {
    username: signupUser,
    email: signupEmail,
    password: signupPassword,
  };
  let email_pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let password_pattern = /(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  if (signupUser == "") {
    alert("please enter user name.");
  } else if (signupEmail == "") {
    alert("enter the password");
  } else if (signupPassword == "") {
    alert("enter the password");
  } else if (!email_pattern.test(signupEmail)) {
    alert("Enter valid email id.");
  } else if (!password_pattern.test(signupPassword)) {
    alert(
      "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
    );
  } else {
    user.push(newUser);
    console.log(user);
    alert("Registration Complete!!!");
  }
  localStorage.setItem("item", JSON.stringify(user));

  /* headers.append("Content-Type", "application/x-www-form-urlencoded");
  headers.append("Authorization", val);
  headers.append("Origin", "http://localhost:3000");
 */
  /* fetch("http://ec2-18-193-130-177.eu-central-1.compute.amazonaws.com/users", {
    method: "POST",
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    }); */
}
function getInfo() {
  const username = document.getElementById("uname").value;
  const password = document.getElementById("psw").value;
  let userInfo = JSON.parse(localStorage.getItem("item"));
  console.log(userInfo);
  for (let i = 0; i < userInfo.length; i++) {
    if (username == userInfo[i].email && password == userInfo[i].password) {
      window.location = "https://www.campuslife.co.in";
      return;
    } else {
      alert("doesnot match");
    }
  }
}

/* function getInfo() {
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
} */
//Reset Inputfield code.
function clearLoginFunc() {
  const username = (document.getElementById("uname").value = "");
  const password = (document.getElementById("psw").value = "");
}
function clearSignupFunc() {
  const signupUser = (document.getElementById("newuname").value = "");
  const signupEmail = (document.getElementById("email").value = "");
  const signupPassword = (document.getElementById("newpsw").value = "");
}
