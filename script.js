
// PROMPTS for password questions:
function getPasswordCharacters() {
  var length = parseInt(
    prompt('How many characters would you like your password to be?')
    );
  if (length.isNAN) {
    alert("Password length must be between 8 and 128 characters.");
    return null;
  }if(length<8) {
    alert("Password length must be between 8 and 128 characters.");
    return null;
  }if(length>128) {}
    alert('"Password length must be between 8 and 128 characters."');
    return null;
}

var includespecial
var includeupper
var includelower
var includenumbers



var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
