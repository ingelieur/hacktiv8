/*
Challenge
Using the JavaScript language, have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty.

Sample Test Cases
Input:5,5,2,2,1
Output:5

Input:3,4,1,6,10
Output:-1
*/

function SimpleMode(arr) {

  var counter = {};
  var mode = -1;
  var maxCounter = 1;

  for (i=0; i<arr.length;i++) {
      if (!counter[arr[i]]) {counter[arr[i]] = 1;}
      else {counter[arr[i]] += 1;}

      if(counter[arr[i]]>maxCounter) {
          maxCounter = counter[arr[i]];
          mode = arr[i];
      }
  }

  return mode;

}

// keep this function call here
console.log(SimpleMode([5,5,2,2,1]));
