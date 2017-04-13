/*
Challenge
Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
 
Sample Test Cases
Input:"hello*3"
Output:"Ifmmp*3"

Input:"fun times!"
Output:"gvO Ujnft!"
*/

function LetterChanges(str) { 

  var modStr = "";
  var vChecker = "";
  
  for (var i in str) {
      if (str[i] === "z") {
          modStr += "A";
      }
      
      else if (/[a-z]/i.test(str[i])) {
          vChecker = String.fromCharCode((str.charCodeAt(i))+1);
          if (vChecker === "i" || vChecker === "u" || vChecker === "e" || vChecker === "o") {
              modStr += vChecker.toUpperCase();
          }
          else {
              modStr += vChecker;
          }
      }
      
      else {
          modStr += str[i];
      }
  }
  return modStr; 
         
}
   
// keep this function call here 
LetterChanges(readline());
