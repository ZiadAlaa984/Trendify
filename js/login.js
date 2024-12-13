const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const passwordRegex = /^[A-Za-z0-9]{6,}$/;

const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
console.log(inputEmail, inputPassword);
// Validation function
function validation(regex, input) {
  if (regex.test(input.value)) {
    input.nextElementSibling.classList.add("d-none");
    return true;
  } else {
    input.nextElementSibling.classList.remove("d-none");
    return false;
  }
}
function submit() {
  if (
    validation(passwordRegex, inputPassword) &&
    validation(emailRegex, inputEmail)
  ) {
    return alert("success");
  }
  return alert("fail try again");
}
