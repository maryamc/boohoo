// variables to be used in order to generate password
// decided to only use a few special characters from keyboard
var totalCharacters = [];

var specialCharacters = ["~", "$", "@", "&", "%", "!"]

var numericalValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//create a function to prompt user how many characters they would like their password to contain
// also includes selectedcharacters function to prompt character selection

function generatePassword() {

  selectedCharacters();

  var length = parseInt(prompt("How many characters would you like your password to contain?"));

  // conditionals to check password length and make sure it generates
  if (isNaN(length) === true) {
    alert("password must be given with a number");
  }

  if (length < 8) {
    alert("password must be at least 8 characters");
    return;
  }
  if (length > 128) {
    alert("password must be less than 128 characters");
    return;
  }
}

  // creating variables to ask user what different types of characters they would like to include in their password

  function selectedCharacters(){

  var withSpecialCharacter = confirm("Do you want your password to include special characters?");
  var withNumericalValue = confirm("Do you want your password to include numerical values?");
  var withLowerCase = confirm("Do you want your password to include lowercase letters?");
  var withUpperCase = confirm("Do you want your password to include uppercase letters?")

if (withSpecialCharacter){
  totalCharacters = totalCharacters.concat(specialCharacters);
}
if (withNumericalValue) {
  totalCharacters = totalCharacters.concat(withNumericalValue);
}
if (withLowerCase) {
  totalCharacters = totalCharacters.concat(withLowerCase);
}
if (withUpperCase) {
  totalCharacters = totalCharacters.concant(withUpperCase);
}
  }





  // Assignment Code

  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  
  generateBtn.addEventListener("click", writePassword);
