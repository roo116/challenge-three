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
//global variables
var pwdLength = 0;

var possibleCharacters = [];
var newPwd = [];
var randomIdx = [];
var randomEl = [];

var btn = document.querySelector("button");

//generate the password
function makeThatPassword() {

  // clear out some arrays to make sure previous data isn't replicated on a new pass
  generatePassword = [];
  newPwd = [];

  alert("Alrighty!! Are you digging all of these prompts? (Don't answer that!!).  Here comes your password!!!");

  for (var i = 0; i < pwdLength; i++) {
    //this is getting random numbers and stufff from possibleCharacters
    var randomIdx = Math.floor(Math.random() * possibleCharacters.length);
    //what gets placed in here is the array character associated with the number from randomIdx
    var randomEl = possibleCharacters[randomIdx];
    // so now I need to get each of those randonLtr values pushed into an array ...
    newPwd.push(randomEl);
  }

  // ... and then joined into a string
  newPwd = newPwd.join('');

  document.querySelector("textarea").textContent = newPwd;
};

// merge arrays into possible character array based on selections
function generatePwdArray() {

  possibleCharacters = [];
  var menuItem = []

  //START prompts...

  //uppercase
  var ucase = confirm(
    "Would you like uppercase letters in the password?  Click OK for YES or Cancel for NO."
  );
  if (!ucase) {
    alert("You will have no uppercase letters in the password.");
  } else {
    for (var i = 0; i < strAlphaCap.length; i++) possibleCharacters.push(...strAlphaCap[i]);
    menuItem.push("Uppercase Letters");
  }

  // lowercase
  var lcase = confirm(
    "How about lowercase letters?  Same deal.  Click OK for YES or Cancel for NO. "
  );
  if (!lcase) {
    alert("You will have no lowercase letters in your password.");
  } else {
    for (i = 0; i < strAlphaSmall.length; i++) possibleCharacters.push(strAlphaSmall[i]);
    menuItem.push(" Lowercase Letters");
  }

  // numeric
  var numeric = confirm("And what about numbers?  Would you like some numbers?  OK for YES and 'guess' for NO. (Maybe..Cancel?)");
  if (!numeric) {
    alert("You will have no numbers in your password.");
  } else {
    for (i = 0; i < num.length; i++) possibleCharacters.push(num[i]);
    menuItem.push(" Numbers");
  }

  // special characters
  var special = confirm("And maybe some special characters with that order?  And would that be an OK for YES?  Or a Cancel for NO?");
  if (!special) {
    alert("You will have no special characters in your password.");
  } else {
    for (i = 0; i < spcChar.length; i++) possibleCharacters.push(spcChar[i]);
    menuItem.push(" Special Characters");
  }

  // if nothing has been selected, confirm and exit or recycle
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

    //confirmation that selected items are correct. if not recycle
    var items = menuItem.join()
    reset = confirm("You have selected the following: " + items + ".  If this is correct hit OK, otherwise hit cancel to select different options");
    if (!reset) {
      return generatePwdArray();
    }
  }

  // launch the generate password function

  makeThatPassword();

};

// get and confirm the length of the password
function numCheck() {

  // prompt for pw length
  pwdLength = prompt(
    "How many characters do you want your password to be?  Please enter a number between 8 and 128."
  );
  if (pwdLength === null) {
    alert(
      "You hit cancel.  So we are going to just go quiet.  Click the 'Generate Password' button to restart.  Have a good day!!!"
    );
    return;
  }

  // make it a number and check it's value
  pwdLength = Number(pwdLength);
  // check if it passes criteria
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
    // have a little fun with the prompts
    if (pwdLength > 15) {
      alert("You password is going to be " + pwdLength + " characters long.  Good luck remembering that one! :)")
    } else {
      alert(
        "Cool.  Your password is going to be " + pwdLength + " characters long."
      );
    }
  };

  //go to generate the possible characters
  generatePwdArray();

};

btn.addEventListener("click", numCheck);