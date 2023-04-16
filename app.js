const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = form.elements.username.value;
  const password = form.elements.password.value;

  if (username === "" || password === "") {
    errorMessage.innerText = "Please enter your username and password.";
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    message.style.display = "none";
  } else if (username !== "admin" || password !== "pwd") {
    errorMessage.innerText = "Invalid username/password.";
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    message.style.display = "none";
  } else {
    message.innerText = `Welcome, ${username}!`;
    message.style.color = "green";
    message.style.display = "block";
    errorMessage.style.display = "none";
  }
});
