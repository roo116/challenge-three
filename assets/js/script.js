// Assignment code here

//arrays
var strAlphaCap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'X', 'Z'];
var strAlphaSmall = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var spcChar = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '|', '}', '{', ']', '[', ';', ':', '?', '/', '>', '<', '.', ',']

//global variables
var btn = document.querySelector("button");

//prompt for the number of characters


function numCheck (val) {
  var val = prompt("How many characters do you want your password to be? Please enter a number between 8 and 128");
  if(val === null) {
    alert("Ok.  Have a great day!!!");
    return;
  } 

  val = Number(val)
  console.log(val);
  
  if (!val || val < 8 || val > 128  || Number.isInteger(val) !== true) {
    // || val < 8 || !Number.isInteger(val)) {
    alert("Ok.  So you need to enter a number between 8 and 128.  You know?  Like the sign said?")
    return numCheck()
  }
  else{
    window.alert("Your password will be " + val + " characters long.");
    }
  };


  btn.addEventListener("click", numCheck)
  // var numChar = window.prompt("How many characters do you want your password to be?");







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
