/*
challenge
Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

Sample Test Cases
Input:"fun&!! time"
Output:"time"

Input:"I love dogs"
Output:"love"

*/

function LongestWord(sen) {

  var arrSen = sen.match(/[a-zA-z0-9]+/gi);
  var senLongest = "";
  for (i=0;i<arrSen.length;i++){
      if (arrSen[i].length>senLongest.length){
          senLongest = arrSen[i];
      }
  }
  return senLongest;

}

// keep this function call here
//LongestWord(readline());
