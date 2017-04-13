/*
Challenge
Using the JavaScript language, have the function ProductDigits(num) take the num parameter being passed which will be a positive integer, and determine the least amount of digits you need to multiply to produce it. For example: if num is 24 then you can multiply 8 by 3 which produces 24, so your program should return 2 because there is a total of only 2 digits that are needed. Another example: if num is 90, you can multiply 10 * 9, so in this case your program should output 3 because you cannot reach 90 without using a total of 3 digits in your multiplication. 

Sample Test Cases
Input:6
Output:2

Input:23
Output:3
*/

function ProductDigits(num) {

  var mul1 = 0;
  var mul2 = 0;
  var mulDigits = (num.toString().length)*2;
  var tmulDigits = mulDigits;
  for (i=1;i<Math.sqrt(num);i++) {
      if (num%i === 0) {
          mul1 = i;
          mul2 = num/i;
          tmulDigits = mul1.toString().length + mul2.toString().length;
          if (tmulDigits<mulDigits){
              mulDigits = tmulDigits;
          }
      }
  }
  return mulDigits;
}

// keep this function call here
ProductDigits(readline());
