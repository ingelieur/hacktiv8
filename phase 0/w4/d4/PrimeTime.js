/*
Challenge
Using the JavaScript language, have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.

Sample Test Cases
Input:19
Output:true

Input:110
Output:false
*/

function PrimeTime(num) {

  if (num===2) {return true;}
  else if (!num%2) {return false;}
  else {
      for (i=2;i<num;i++) {
          if (!(num%i)) {return false;}
      }
  }
  return true;

}

// keep this function call here
PrimeTime(readline());
