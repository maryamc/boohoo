// variables to be used in order to generate password
// decided to only use a few special characters from keyboard
var specialCharacters = ["~", "$", "@", "&", "%", "!"]

var numericalValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//create a function to prompt user how many characters they would like their password to contain
function generatePassword() {
  var length = parseInt(prompt("How many characters would you like your password to contain?"));

  // conditional to check pass length
  if (length < 8) {
    alert("password must be at least 8 characters");
    return;
  }
  if (length > 128) {
    alert("password must be less than 128 characters");
    return;
  }

// // ask what characters and add conditionals

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button

// generateBtn.addEventListener("click", writePassword);
