// global variables
var generateBtn = document.getElementById("generate");
var clipBtn = document.getElementById("copyto");
var output = document.getElementById("password");
var critArr = [];
var passLength = "";
var lwrYes = "";
var uprYes = "";
var numYes = "";
var symYes = "";
var secInt = "";

// Functions to grab random characters from ascii table.
function abcLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }
function abcUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }
function raNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }
function raSym () {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33)
  }

// Function for password criteria stores true/false and increases count of type via "secInt" variable.
  function pwCriteria () {
    var passLower = window.confirm("Do you want LowerCase Alphabet in your password?")
    if (passLower === true) {
      lwrYes = true;
      secInt++;
    }

    var passUpper = window.confirm("Do you want UpperCase Alphabet in your password?")
    if (passUpper === true) {
      uprYes = true;
      secInt++;
    }

    var passNum = window.confirm("Do you want Numbers in your password?")
    if (passNum === true) {
      numYes = true;
      secInt++;
    }

    var passSymbol = window.confirm("Do you want Special Characters in your password?")
    if (passSymbol === true) {
      symYes = true;
      secInt++;
  }
}

// Primary function for generating password. In a nutshell, a loop will continue until the values
// stored in the array is equal to the length specified. Otherwise, it runs one of the character
// randomizers above again and stores the character into the array. It randomized the array also every loop.
// Once the array = length, it stops running the loop, stores the joined array without commas as a password.
 function generatePassword() {
  var password = "";
  var passLength = window.prompt("How many characters?\n(Min 8 - Max 128)")
  if (isNaN(passLength)) {
    alert("You must enter a numerical value!");
    pwCriteria();
    return; }
  if(passLength < 8 || passLength > 128) {
    window.alert("You must have a value between 8 and 128.")
    pwCriteria();
    return;}

  for (let i = 0; i < passLength; i+=secInt) {
    if (lwrYes === true && i <= passLength) {
    critArr.push(abcLower())};

    if (uprYes === true && i <= passLength) {
    critArr.push(abcUpper())};

    if (numYes === true && i <= passLength) {
    critArr.push(raNum())};

    if (symYes === true && i <= passLength) {
    critArr.push(raSym())};

    critArr.sort(() => 0.5 - Math.random());
  }
  var password = critArr.join("");
  return password;
}

// Takes the output of the generator and adds it to the text field.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Makes the generate button kick off the process on-click.
generateBtn.addEventListener("click", writePassword);

// Added function to copy the contents of the textbox to the clipboard.
function copyPassword(text) {
  var copyText = document.getElementById("password");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Copied to Clipboard!")
}

// Allows the copy to clipboard button to work on click.
clipBtn.addEventListener("click", copyPassword);

pwCriteria();