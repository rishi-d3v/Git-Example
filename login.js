const authenticateUser = require("./register");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function loginUser() {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (authenticateUser(username, password)) {
    console.log("User authenticated successfully.");
  } else {
    console.log("Invalid username or password.");
  }
}

module.exports = loginUser;
