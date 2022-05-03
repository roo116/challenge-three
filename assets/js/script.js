// Assignment code here

//arrays
var strAlphaCap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'X', 'Z'];
var strAlphaSmall = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var spcChar = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '|', '}', '{', ']', '[', ';', ':', '?', '/', '>', '<', '.', ',']


//prompt for the number of characters


var numCheck = function () {
  val = Number(numChar) ;
  
  if (val === NaN || val === "") {
    alert("You need to enter a whole number.  Please try again")  
  }

  else if(Number.isInteger(val) !== true) {
    alert("You need to enter a whole number.  Please try again");
  }
  else{
    window.alert("Your password will be " + val + " characters long.");
    }
  };

  var numChar = window.prompt("How many characters do you want your password to be?");
numCheck();





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
