/*
Challenge
Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

Sample Test Cases
Input:"hello world"
Output:"Hello World"

Input:"i ran there"
Output:"I Ran There"
*/

function LetterCapitalize(str) {

  var arrStr = str.split(" ");

  for(var i in arrStr) {
      arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].substring(1);
  }
  return arrStr.join(" ");

}

// keep this function call here
LetterCapitalize(readline());
