// How to make the inputted value stay where they are after alert?

submit.addEventListener('click', function (){
  var userName = document.getElementById('user-name').value;
  var email = document.getElementById('email').value;
  var confirmEmail = document.getElementById('confirm-email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;
  var alertContent = ""

  //check isEmpty
  if (userName === "") {
    alertContent += "Please choose a username. \n"
  }

  //validate email and confirmEmail
  if (email === "") {
    alertContent += "Please input a correct email. \n"
  }

  if (confirmEmail === "") {
    alertContent += "Please confirm the email. \n"
  }

  if (password === "") {
    alertContent += "Please input a password. \n"
  }

  if (confirmPassword === "") {
    alertContent += "Please confirm the password. \n"
  }

  //validate
  if (email.toLowerCase() !== confirmEmail.toLowerCase()) {
    alertContent += "Please reconfirm the email. \n";
  }

  if (password !== confirmPassword) {
    alertContent += "Please reconfirm the password. \n"
  }

  //return false
  if(alertContent !== "") {
    alert (alertContent);
    event.preventDefault();
    return false;
  }
  else {
    document.getElementById("main-form").submit();
  }
});
