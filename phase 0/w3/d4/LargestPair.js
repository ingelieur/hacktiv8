/*
Challenge
Using the JavaScript language, have the function LargestPair(num) take the num parameter being passed and determine the largest double digit number within the whole number. For example: if num is 4759472 then your program should return 94 because that is the largest double digit number. The input will always contain at least two positive digits. 

Sample Test Cases
Input:453857
Output:85

Input:363223311
Output:63
*/

function LargestPair(num) { 

    num = num.toString();
    var pairArray = [];
    for (i=0; i<num.length-1;i++){
          pairArray[i] = (num.slice(i,i+2));
          console.log(num.slice(i,i+2));
        }
    console.log(pairArray);
    var largest = Math.max(...pairArray);
    return largest;
           
}
   
// keep this function call here 
LargestPair(readline());
