const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function validateForm() {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username.length < 5 || password.length < 5) {
    console.log("Username and password must be at least 5 characters long.");
    return false;
  } else {
    console.log("Registration form validated successfully.");
    return true;
  }
}

module.exports = validateForm;
