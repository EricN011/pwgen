var pw = "dynopass";
// defined function
function showPrompt() {
  var charNum = prompt("How many characters would you like for your password?");
  var charSpec = confirm("Would you like to use special characters?");
  var charNum = confirm("Would you like to use any numeric characters?");
  var charLow = confirm("Would you like to use lowercase characters?");
  var charUp = confirm("Would you like to use uppercase characters?");
  pwBox.innerHTML = pw;
}

// genBtn.addEventListener("click", showAlert);

// number of characters for the password (between 8 and 128)
// special characters
// numeric characters
// lowercase characters
// uppercase characters

// change this pw into dynamic random pw
// document.write(pw);
