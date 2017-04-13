/*
Challenge
Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. 

Sample Test Cases
Input:"Hello-LOL"
Output:"hELLO-lol"

Input:"Sup DUDE!!?"
Output:"sUP dude!!?"
*/

function SwapCase(str) {

  var strSwap = str.split("");
  for (i=0;i<strSwap.length;i++){
      if (strSwap[i] === strSwap[i].toLowerCase()){
          strSwap[i] = strSwap[i].toUpperCase();
      }
      else {
          strSwap[i] = strSwap[i].toLowerCase();
      }
  }
  return strSwap.join("");

}

// keep this function call here
SwapCase(readline());
