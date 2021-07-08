var generateBtn = document.querySelector("#generate");

// CHARACTER CODES using ASCII Codes
var uppercasecharcodes = arrayFromLowToHigh(65, 90)
var lowercasecharcodes = arrayFromLowToHigh(97, 122)
var numbercharcodes = arrayFromLowToHigh(48, 57)
var specialcharcodes = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
  ).concat(arrayFromLowToHigh(91, 96)
  ).concat(arrayFromLowToHigh(123, 126)
  )
var passwordlength = "";


function displayPassword() {
  var password = generatePassword();
  var passwordCharacters = document.querySelector('#password');

  passwordCharacters.value = password;
}

function generatePassword() {
  userPassword = "";
  passwordCharacters = "";

  let passwordlength = prompt("Select your desired password length");

  if(passwordlength<8 || passwordlength>128) {
    // IF input for password length is not long enough, user gets an alert
  alert("Password length must be between 8 and 128 characters.");
  return null;
  }
    var includespecial = confirm('Would you like to include special characters?');
    var includeupper = confirm('Would you like to include uppercase characters?');
    var includelower = confirm('Would you like to include lowercase characters?');
    var includenumbers= confirm('Would you like to include numbers?');

    // IF no options are selected, user gets an error alert
    if (!includelower && !includenumbers && !includeupper && !includespecial) {
    alert('You must choose atleast one of the options!');
    return null;
  }
    // MERGE section where all options are compiled
  if (includespecial) {
    passwordCharacters += lowercasecharcodes;
  }if (includeupper) {
    passwordCharacters += uppercasecharcodes;
  }if (includelower) {
    passwordCharacters += lowercasecharcodes;
  }if (includenumbers) {
    passwordCharacters += numbercharcodes;
  }for (var i = 0; i <passwordlength; i++) {
    userPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }return userPassword;
}
generateBtn.addEventListener("click",displayPassword);
