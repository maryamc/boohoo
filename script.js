// variables

var specialCharacters = ["~","$","@","&"]

var numericalValues = ["1","2","3","4","5","6","7","8","9","0"];

var lowerCaseLetters = 

//create a function to prompt user
function getPasswordOptions() {
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );
}

if (isNaN(length) === true){
  alert("password length must be provided with a number");
  return;
}

//conditional to check pass length

if (length < 8){
  alert("password must be at least 8 characters");
  return;
}
if (length > 128){
  alert("password must be less than 128 characters");
  return;


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
