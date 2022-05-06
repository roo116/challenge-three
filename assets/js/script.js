// Assignment code here

//arrays
var strAlphaCap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'X', 'Z'];
var strAlphaSmall = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var spcChar = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '|', '}', '{', ']', '[', ';', ':', '?', '/', '>', '<', '.', ',']
// var questions ["How many characters do you want your password to be?", ""]
//global variables
var btn = document.querySelector("button");
var pwdLength = 0;
var ucase = 0;
var lcase = 0;


//prompt for the number of characters
// function inputCheck (data) {
//   if (!data) {
//       confirm("You didn't enter anything. Try again!")
//     if (!ask) {
//       alert("Ok.  Have a great day!!!")
//       return
//     } el

 

// }


function numCheck() {
  pwdLength = prompt("How many characters do you want your password to be?  Please enter a number between 8 and 128");
    if( pwdLength !== null ){
      pwdLength = Number(pwdLength);
      if (pwdLength < 8 || pwdLength > 128 || Number.isInteger(pwdLength) !== true) {
        alert("Ok.  So you need to enter a number between 8 and 128.  You know?  Like the sign said?")
            return numCheck() 
      }else {
        alert("Cool.  Your password is going to be " + pwdLength + " characters long.");
      }
    } else {
      alert("You hit cancel.  So we are going to just go quiet.  Click the 'Generate Password' button to restart.  Have a good day!!!");
      return;
    };
      
            
}


//   pwdLength = Number(pwdLength);

//   
//   }
//   else {
//     alert("Your password will be " + pwdLength + " characters long.");
//   }

//   pwdLength = pwdLength
// };

function ucaseCheck() {
  ucase = prompt("how many uppercase characters would you like in your password?");
}

btn.addEventListener("click", numCheck)

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
