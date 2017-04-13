/*
Challenge
Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

Sample Test Cases
Input:"Hello apple pie"
Output:"Hello"

Input:"No words"
Output:-1
*/

function letterCount(word) {
    var wordLC = word.toLowerCase();
    var letter = {};
    var maxCount = 0;

    for (i=0; i<wordLC.length; i++) {
        if (!letter[wordLC[i]]) {
            letter[wordLC[i]] = 1;
        }
        else {
            letter[wordLC[i]] += 1;
        }
    }

    for (j in letter) {
        if (maxCount < letter[j]) {
            maxCount = letter[j];
        }
    }

    return maxCount;
}

function LetterCountI(str) {

  var arrStr = str.match(/[a-z]+/gi);
  var maxWord = 0;
  console.log(arrStr.length);
  var maxCount = [];
  for (k=0;k<arrStr.length;k++) {
      maxCount.push(letterCount(arrStr[k]));
  }
  console.log(maxCount);

  if (Math.max(...maxCount) === 1) {
      return -1;
  }

  return arrStr[maxCount.indexOf(Math.max(...maxCount))];

}

// keep this function call here
LetterCountI(readline());
