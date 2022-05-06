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
var newArray = [];
console.log("from initial declaration of variable " + newArray);
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

function makeThatPassword() {
  alert("Alrighty!! Are you digging all of these prompts? (Don't answer that!!).  Here comes your password!!!");


}

function generatePwdArray() {

  newArray = [];
  var menuItem = []
  console.log("now we are in the generatePwdArray function " + newArray);

  var ucase = confirm(
    "do you want uppercase letters in the password? Click OK for YES or Cancel for NO."
  );
  if (!ucase) {
    alert("You will have no uppercase letters in the password.");
  } else {
    for (i = 0; i < strAlphaCap.length; i++) newArray.push(strAlphaCap[i]);
    menuItem.push("Uppercase Letters");
    console.log(menuItem);
  }

  var lcase = confirm(
    "How about lowercase letters?  Same deal.  Click OK for YES or Cancel for NO. "
  );
  if (!lcase) {
    alert("You will have no lowercase letters in your password.");
  } else {
    for (i = 0; i < strAlphaSmall.length; i++) newArray.push(strAlphaSmall[i]);
    menuItem.push(" Lowercase Letters");
    console.log(menuItem);
  }

  var numeric = confirm("And what about numbers?  Would you like some numbers? Ok for YES.  Cancel for NO.");
  if (!numeric) {
    alert("You will have no numbers in your password.");
  } else {
    for (i = 0; i < num.length; i++) newArray.push(num[i]);
    menuItem.push(" Numbers");
    console.log(menuItem);
  }

  var special = confirm("And finally, what about special characters.  OK for YES.  Cancel for NO.");
  if (!special) {
    alert("You will have no special characters in your password.");
  } else {
    for (i = 0; i < spcChar.length; i++) newArray.push(spcChar[i]);
    menuItem.push(" Special Characters");
    console.log(menuItem);
  }


  console.log(items)

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