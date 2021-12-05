const form = document.getElementById('form');
const userName = document.getElementById('userName');
const password = document.getElementById('password');
const userFormat = 'admin';
const passwordFormat = '1234';
const userNameError = document.getElementById('errorMessageInput');

function validation() {
  const userNameValue = userName.value.trim();
  const passwordValue = password.value.trim();

  if (userNameValue == null || userNameValue === '') {
    setErrorFor(userName, 'User name cannot be empty');
    return false;
  } else if (userNameValue.length < 5) {
    setErrorFor(userName, 'User name should be 5 characters long');
    return false;
  } else if (userNameValue.length > 5) {
    setWeakFor(userName, 'length more than 5 characters not allowed');
    return false;
  } else if (userNameValue !== userFormat) {
    setErrorFor(userName, 'Enter the correct user name');
    return false;
  } else {
    setSuccessFor(userName);
  }

  if (passwordValue == null || passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
    return false;
  } else if (isNaN(passwordValue)) {
    setErrorFor(password, 'Enter only numbers');
    password.style.borderColor = 'red';

    return false;
  } else if (passwordValue.length < 4) {
    setErrorFor(password, 'password must be 4 characters long');

    return false;
  } else if (passwordValue.length > 4) {
    setWeakFor(password, 'password length is more than 4 characters');

    return false;
  } else if (passwordValue !== passwordFormat) {
    setErrorFor(password, 'Enter the correct password');

    return false;
  } else {
    setSuccessFor(password);

    setTimeout(function () {}, 3000);
    return true;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
}
function setWeakFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control weak';
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
