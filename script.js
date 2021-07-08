
// PROMPTS for password questions:
function.getCharacterOptions('generate').addEventListener("click") {
  var length = parseInt(
    prompt('How many characters would you like your password to be?')
    );
    // Fixed .isNAN format per MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
  if (number.isNAN(length)) {
    alert("Password length must be numerical");
    return null;
  }if(length<8 || length>128) {
    alert("Password length must be between 8 and 128 characters.");
    return null;
  }

  // IF none are chosen, password generator has no options to pull from, and program ends
  if (!includelower && !includenumbers && !includeupper && !includespecial) {
  alert('You must choose atleast one of the options!');
  return null;
  }else{
  // CONFIRM messages asking for additional options
  var includespecial = confirm('Would you like to include special characters?');
  var includeupper = confirm('Would you like to include uppercase characters?');
  var includelower = confirm('Would you like to include lowercase characters?');
  var includenumbers= confirm('Would you like to include numbers?');
  }
  
  // CHARACTER CODES using ASCII Codes
  var uppercasecharcodes = arrayFromLowToHigh(65, 90)
  var lowercasecharcodes = arrayFromLowToHigh(97, 122)
  var numbercharcodes = arrayFromLowToHigh(48, 57)
  var specialcharcodes = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
    ).concat(arrayFromLowToHigh(91, 96)
    ).concat(arrayFromLowToHigh(123, 126)
    )
}

button.addEventListener("click"){

}

// var passwordCharacterOptions= [];
// if (CharacterOptions.includespecial) {
//   passwordCharacterOptions = passwordCharacterOptions.concat(specialcharcodes);
// }if (CharacterOptions.includenumbers) {
//   passwordCharacterOptions = passwordCharacterOptions.concat(numbercharcodes);
// }if (CharacterOptions.includelower) {
//   passwordCharacterOptions = passwordCharacterOptions.concat(lowercasecharcodes);
// }if (CharacterOptions.includeupper) {
//   passwordCharacterOptions = passwordCharacterOptions.concat(uppercasecharcodes);
// }



// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
