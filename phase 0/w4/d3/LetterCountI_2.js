/*
Challenge
Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.

Sample Test Cases
Input:"Hello apple pie"
Output:"Hello"

Input:"No words"
Output:-1
*/

function LetterCountI(str) {
  var arrLowerStr = str.toLowerCase().match(/[a-z]+/gi);
  var arrStr = str.match(/[a-z]+/gi);
  var countLetter = [[]];
  var max = [];
  var n = 1;

  for (i=0;i<arrLowerStr.length;i++) {
    countLetter.push([]);
      for (j=0;j<arrLowerStr[i].length;j++) {
          n = (arrLowerStr[i].charCodeAt(j))-97;
          if (!countLetter[i][n]) {
              countLetter[i][n] = 1;
          }
          else {
              countLetter[i][n] += 1;
          }
      }

      for (k=0;k<countLetter[i].length;k++) {
          if (!countLetter[i][k]) {
              countLetter[i][k] = 0;
          }
      }
      max.push(Math.max(...countLetter[i]));
    }

  if (Math.max(...max) === 1) {
      return -1;
    }

  return arrStr[max.indexOf(Math.max(...max))];
}

// keep this function call here
console.log(LetterCountI("Hello apple pie"));
