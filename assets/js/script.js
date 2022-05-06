// Assignment code here

//arrays
var strAlphaCap = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var strAlphaSmall = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var spcChar = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
  "|",
  "}",
  "{",
  "]",
  "[",
  ";",
  ":",
  "?",
  "/",
  ">",
  "<",
  ".",
  ",",
];
var newArray = [];
// var questions ["How many characters do you want your password to be?", ""]
//global variables
var btn = document.querySelector("button");
var pwdLength = 0;
// var ucase = true;
// var lcase = true;

//prompt for the number of characters
// function inputCheck (data) {
//   if (!data) {
//       confirm("You didn't enter anything. Try again!")
//     if (!ask) {
//       alert("Ok.  Have a great day!!!")
//       return
//     } el

// }

function generatePwdArray() {

  var ucase = confirm(
    "do you want capital letters in the password? Click OK for YES or Cancel for No"
  );
  if (!ucase) {
    alert("you will have no caps in the password");
  } else {
    for (i = 0; i < strAlphaCap.length; i++) newArray.push(strAlphaCap[i]);
    console.log(newArray);
  }

  var lcase = confirm(
    "how about lower case letters?  Same deal.  Click OK for YES or Cancel for NO. "
  );
  if (!lcase) {
    alert("you will have no lower case letters in your password.");
  } else {
    for (i = 0; i < strAlphaSmall.length; i++) newArray.push(strAlphaSmall[i]);
    console.log(newArray);
  }

  var numeric = confirm("And how about numbers?  Ok for YES.  Cancel for NO");
  if (!numeric) {
    alert("you will have no numbers in your password");
  } else {
    for (i = 0; i < num.length; i++) newArray.push(num[i]);
    console.log(newArray);
  }

  var special = confirm("And finally, what about special characters.  OK for Yes.  Cancel for No");
  if (!special) {
    alert("you will have no special characters in your password");
  } else {
    for (i = 0; i < spcChar.length; i++) newArray.push(spcChar[i]);
    console.log(newArray);
  }

  if (!ucase && !lcase && !numeric && !special) {
    var exitApp = confirm("Wait.  What?  You didn't select anything.  You need to select some type of character.  Click OK to try again or Cancel to exit");
    if (!exitApp) {
      alert("Thanks for playing!!");
      return;
    }
    else {
      generatePwdArray()
    }

  }


};

function numCheck() {
  pwdLength = prompt(
    "How many characters do you want your password to be?  Please enter a number between 8 and 128"
  );
  if (pwdLength === null) {
    alert(
      "You hit cancel.  So we are going to just go quiet.  Click the 'Generate Password' button to restart.  Have a good day!!!"
    );
    return;
  }

  pwdLength = Number(pwdLength);

  if (
    pwdLength < 8 ||
    pwdLength > 128 ||
    Number.isInteger(pwdLength) !== true
  ) {
    alert(
      "Ok.  So you need to enter a number between 8 and 128.  You know?  Like the sign said?"
    );
    return numCheck();
  } else {
    alert(
      "Cool.  Your password is going to be " + pwdLength + " characters long."
    );
  }
  generatePwdArray();
};



// function createPasswordArray() {
//   var ucase = confirm("do you want uppercase characters in your password? Click OK for 'yes' or Cancel for 'no'");
//   console.log(">> Inside the function ucase is " + ucase);
//   if (!ucase) {
//     alert("No caps for you!!!");
//     return;
//   } else {
//     alert("You will have capital letters in your password");
//     var newArray = []

//   }
// }

//   ucase = Number(ucase)
//   if (ucase !== null)
//     ucase = Number(ucase)
// }

btn.addEventListener("click", numCheck);

// var numChar = window.prompt("How many characters do you want your password to be?");

// function getChar() {

// }

//prompt for numbers

//prompt for special characters

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
