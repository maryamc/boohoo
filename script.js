// variables to be used in order to generate password
// decided to only use a few special characters from keyboard

var totalCharacters = [];
console.log(totalCharacters);

var specialCharacters = ["~", "$", "@", "&", "%", "!"];

var numericalValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var arr = [specialCharacters, numericalValues, lowerCaseLetters, upperCaseLetters];



//create a function to prompt user how many characters they would like their password to contain


function generatePassword() {

  var length = parseInt(prompt("How many characters would you like your password to contain?"));

  // conditionals to check password length and make sure it generates
  if (isNaN(length) === true) {
    alert("password must be given with a number");
    return;
  }

  if (length < 8) {
    alert("password must be at least 8 characters");
    return;
  }
  if (length > 128) {
    alert("password must be less than 128 characters");
    return;
  }



  // creating variables to ask user what different types of characters they would like to include in their password
  // tried using .join() like others in class said, however I cant get this to work out

  var _SpecialCharacter = confirm("Click OK to use special characters");
  if (_SpecialCharacter) {
    specialCharacters.join();
    totalCharacters.push(specialCharacters);
    console.log(_SpecialCharacter);

  }


  var _NumericalValue = confirm("Click OK to use numerical values");
  if (_NumericalValue) {
    numericalValues.join();
    totalCharacters.push(numericalValues);
    console.log(_NumericalValue);

  }


  var _LowerCase = confirm("Click OK to use lowercase letters");
  if (_LowerCase) {
    lowerCaseLetters.join();
    totalCharacters.push(lowerCaseLetters);
    console.log(_LowerCase);

  }


  var _UpperCase = confirm("Click OK to use uppercase letters");
  if (_UpperCase) {
    upperCaseLetters.join();
    totalCharacters.push(upperCaseLetters)
    console.log(_UpperCase);

  }

  // this is supposed to concatonate the string but its not working, because I still cant figure out not how to link or define variables for this part 
  for (var i = 0; i < length; ++i) {
    arr[Math.floor(Math.random() * arr.length)];
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
