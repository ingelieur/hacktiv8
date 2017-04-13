/*
Challenge
Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. 

Sample Test Cases
Input:99946
Output:9-9-946

Input:56730
Output:567-30
*/

function DashInsert(str) { 

  var oddIndex = [0];
  var dashedStr = "";

  for (i=0;i<str.length-1;i++) {
      if ((parseInt(str[i])%2)!==0 && (parseInt(str[i+1])%2)!==0) {
          oddIndex.push(i+1);
      }
  }

  for (j=1;j<oddIndex.length;j++) {
      dashedStr += str.slice(oddIndex[j-1],oddIndex[j]) + "-";
  }

  dashedStr += str.slice(oddIndex[oddIndex.length-1]);

  return dashedStr;

}

// keep this function call here
DashInsert(readline());
