const loginFormRef = document.querySelector(".login-form");
loginFormRef.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();
  const fieldsValues = {
    email: loginFormRef.elements.email.value,
    password: loginFormRef.elements.password.value,
  };
  if (fieldsValues.email === "" || fieldsValues.password === "")
    alert("all fields must be filled");
  else {
    console.log(fieldsValues);
    loginFormRef.reset();
  }
}
