const user = [
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
}

//const button = document.getElementById("");
