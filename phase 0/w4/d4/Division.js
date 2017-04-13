/*
Using the JavaScript language, have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3.

Sample Test Cases
Input:7 & num2 = 3
Output:1

Input:36 & num2 = 54
Output:18
*/

function Division(num1,num2) {

  if (num2 === 0) {
      return num1;
  }

  return Division (num2,num1%num2);
}

// keep this function call here
Division(readline());
