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
];
var possibleCharacters = [];
console.log("from initial declaration of variable " + possibleCharacters);
// var questions ["How many characters do you want your password to be?", ""]
//global variables
var btn = document.querySelector("button");
var pwdLength = 0;
var newPwd = [];
var randomIdx = [];
var randomEl = [];
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

function postThatPassword(newPwd) {
  var showNewPwd = document.getAttribute("placeholder", string);
  

}

function makeThatPassword() {
  generatePassword = [];
  newPwd = [];
  alert("Alrighty!! Are you digging all of these prompts? (Don't answer that!!).  Here comes your password!!!");
// console.log("This one is from the makeThatPassword function ");
// console.log(possibleCharacters);

for (var i = 0; i < pwdLength; i++) {
  //this is getting random numbers and stufff from possibleCharacters
  var randomIdx = Math.floor(Math.random() * possibleCharacters.length);
  //what gets logged are the numbers that the function is randomly generating based on length of possibleCharacters[].
  console.log(randomIdx)
  //what gets placed in here is the array character associated with the number from randomIdx
  var randomEl = possibleCharacters[randomIdx];
//and these are being logged here
  console.log(randomEl);
  // so now I need to get each of those randonLtr values pushed into an array ...
  newPwd.push(randomEl);
  //console.log(newPwd);
}
console.log("new password values are " + newPwd);
// console.log(newPwd);

// ... and then joined into a string
newPwd = newPwd.join('');
alert("Your new password is " + newPwd);


  // newPwd = Array.join(randomLtr);
  // console.log(newPwd);
 
  // newPwd = newPwd.push(randomIdx);
  // console.log(newPwd);

  // possibleCharactersArray.push(...numberArray)
};

function generatePwdArray() {

  possibleCharacters = [];
  var menuItem = []

  var ucase = confirm(
    "Would you like uppercase letters in the password?  Click OK for YES or Cancel for NO."
  );
  if (!ucase) {
    alert("You will have no uppercase letters in the password.");
  } else {
    for (var i = 0; i < strAlphaCap.length; i++) possibleCharacters.push(...strAlphaCap[i]);
    menuItem.push("Uppercase Letters");
    console.log(menuItem);
  }

  var lcase = confirm(
    "How about lowercase letters?  Same deal.  Click OK for YES or Cancel for NO. "
  );
  if (!lcase) {
    alert("You will have no lowercase letters in your password.");
  } else {
    for (i = 0; i < strAlphaSmall.length; i++) possibleCharacters.push(strAlphaSmall[i]);
    menuItem.push(" Lowercase Letters");
    console.log(menuItem);
  }

  var numeric = confirm("And what about numbers?  Would you like some numbers?  OK for YES and 'guess' for NO. (Maybe..Cancel?)");
  if (!numeric) {
    alert("You will have no numbers in your password.");
  } else {
    for (i = 0; i < num.length; i++) possibleCharacters.push(num[i]);
    menuItem.push(" Numbers");
    console.log(menuItem);
  }

  var special = confirm("And maybe some special characters with that order?  And would that be an OK for YES?  Or a Cancel for NO?");
  if (!special) {
    alert("You will have no special characters in your password.");
  } else {
    for (i = 0; i < spcChar.length; i++) possibleCharacters.push(spcChar[i]);
    menuItem.push(" Special Characters");
    console.log(menuItem);
  }

  // for (i=0; i < menuItems.length; i++) 

  if (!ucase && !lcase && !numeric && !special) {
    var exitApp = confirm("Wait.  What?  You didn't select anything.  You need to select some type of character.  Click OK to try again or Cancel to exit");
    if (!exitApp) {
      alert("Ok.  Be that way.  Just leave without a password.. :( ");
      return;
    }
    else {
      return generatePwdArray()
    }
  }
  else {
    var items = menuItem.join()
    reset = confirm("You have selected the following: " + items + ".  If this is correct hit OK, otherwise hit cancel to select different options");
    if (!reset) {
      return generatePwdArray();
    }
  }
  console.log("now we are in the generatePwdArray function " + possibleCharacters);
  console.log(possibleCharacters);
  makeThatPassword();
};

function numCheck() {
  pwdLength = prompt(
    "How many characters do you want your password to be?  Please enter a number between 8 and 128."
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
      "Ok.  So you need to enter a number between 8 and 128.  You know?  Like the prompt said?"
    );
    return numCheck();
  } else {
    if (pwdLength > 15) {
      alert("You password is going to be " + pwdLength + " characters long.  Good luck remembering that one! :)")
    } else {
      alert(
        "Cool.  Your password is going to be " + pwdLength + " characters long."
      );
    }
  };
  generatePwdArray();
};

btn.addEventListener("click", numCheck);