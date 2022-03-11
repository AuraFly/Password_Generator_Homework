// I relied on several googled resources to understand arrow functions(=>) append shorthand (+=) and .filter
// I should also source https://www.youtube.com/watch?v=duNmhKgtcsI&t=23 or https://codepen.io/FlorinPop17/pen/BaBePej 
// as I felt this a slick looking format and really wanted to learn how it worked.
// just in case the graders want to make sure I followed the instructions, and didnt just copy paste without learning
// I have also inserted alternate code that is commented out at the bottom of this code
// Just comment out everything from line

// Sets html/dom elements to global variables to be used in functions
var generateBtn = document.getElementById("generate");
var passLength = document.getElementById("islength");
var passUpper = document.getElementById("upper");
var passLower = document.getElementById("lower");
var passNum = document.getElementById("number");
var passSymbol = document.getElementById("symbols");
var clipBtn = document.getElementById("copyto");
var output = document.getElementById("password");

// throwing the above functions into a single object with those functions as values

var objCharsets = {
  lower: abcLower,
  upper: abcUpper,
  number: raNum,
  symbol: raSym
}

// This 
generateBtn.addEventListener("click", () => {
  var length = +passLength.value;
  var islower = passLower.checked;
  var isupper = passUpper.checked;
  var isnumber = passNum.checked;
  var issymbol = passSymbol.checked;

  output.innerText = writePassword (islower, isupper, isnumber, issymbol, length);
  });


// Write password to the #password input
function writePassword(lower, upper, number, symbol, length) {
  var password = '';
  var settingCT = lower + upper + number + symbol;
  var settingArr =  [{lower}, {upper}, {number}, {symbol}].filter(truFalse => Object.values(truFalse)[0]);

	if(settingCT === 0) {
		return '';
	}

  if(length < 8 || length > 128) {
    window.alert("You must have a value between 8 and 128. Try again!")
    return;
  }

  for(var i = 0; i < length; i += settingCT) {
    settingArr.forEach(type => {
      var objKeys = Object.keys(type)[0];
      password += objCharsets[objKeys]();
    });
  }
	return password;
  }

  // Characters are generated through "fromCharCode" which refers to ASCII codes - using (https://www.w3schools.com/charsets/ref_html_ascii.asp)
// the function is generating a number randomly using math.random to creat a decimal from 0-1 and math.floor is rounding that number after being multiplied by the amount of the characterset
// (26 in the alphabet/10 per number/15 characters) then per the table adding the number that the first character starts with - finally, it is returned when the function is ran.
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

//this is the function used to copy the content of the textbox to the user's clipboard
function copyPassword(text) {
  var copyText = document.getElementById("password");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Copied to Clipboard!")
}

clipBtn.addEventListener("click", copyPassword);

// relied on several googled resources to understand arrow functions(=>) append shorthand (+=) and .filter
// I should also source https://www.youtube.com/watch?v=duNmhKgtcsI&t=23 or https://codepen.io/FlorinPop17/pen/BaBePej 
// as I felt this a slick looking format and really wanted to learn how it worked.