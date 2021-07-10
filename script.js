var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  userpassword = "";
  passwordCharacters = [];

  let passwordlength = prompt("Select your desired password length");

  if (passwordlength < 8 || passwordlength > 128 || isNaN(passwordlength)) {
    // IF input for password length is not long enough or is not numerical, user gets an alert
  alert("Password length must be between 8 and 128 characters and numerical.");
  return null;
  }
  
  // CONFIRM statements for password characters
    var includespecial = confirm('Would you like to include special characters?');
    var includeupper = confirm('Would you like to include uppercase characters?');
    var includelower = confirm('Would you like to include lowercase characters?');
    var includenumbers= confirm('Would you like to include numbers?');

  // CHARACTER CODES using ASCII Codes

    var uppercasecharcodes = arrayFromLowToHigh(65, 90);
    var lowercasecharcodes = arrayFromLowToHigh(97, 122);
    var numbercharcodes = arrayFromLowToHigh(48, 57);
    var specialcharcodes = arrayFromLowToHigh(33, 47).concat(
      arrayFromLowToHigh(58, 64)
      ).concat(
        arrayFromLowToHigh(91, 96)
      ).concat(
        arrayFromLowToHigh(123, 126)
      );

    // IF no options are selected, user gets an error alert
    if (!includelower && !includenumbers && !includeupper && !includespecial) {
    alert('You must choose atleast one of the options!');
    return null;
  }
    // MERGE section where all options are compiled
  if (includespecial) {
    passwordCharacters= passwordCharacters.concat(specialcharcodes);
  }if (includeupper) {
    passwordCharacters = passwordCharacters.concat(uppercasecharcodes);
  }if (includelower) {
    passwordCharacters = passwordCharacters.concat(lowercasecharcodes);
  }if (includenumbers) {
    passwordCharacters = passwordCharacters.concat(numbercharcodes);
  }

  //  TEST: console.log(lowercasecharcodes, specialcharcodes, numbercharcodes, uppercasecharcodes);

  for (var i = 0; i < passwordlength; i++) {
      userpassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return userpassword;
}
generateBtn.addEventListener("click",writePassword);

// FUNCTION for above arrayFromLowToHigh
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(String.fromCharCode(i));
  }
  return array
}