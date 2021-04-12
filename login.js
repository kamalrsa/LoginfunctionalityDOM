const user = [
  { username: "kamal", password: "k1234" },
  { username: "kamal12", password: "k1234" },
];

function getInfo() {
  const username = document.getElementById("uname").value;
  const password = document.getElementById("psw").value;
  for (let i = 0; i < user.length; i++) {
    if (username == user[i].username && password == user[i].password) {
      alert("login successfull");
      return;
    } else {
      alert("doesnot match");
    }
  }
}

//const button = document.getElementById("");
