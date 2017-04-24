// Recursive Competency Test

function tambahTerus(num) {
  numStr = num.toString();

  if (numStr.length === 1) {
    return num;
  }
  else {
    var arrNum = numStr.split("");
    var total = 0;
    for (i=0; i<arrNum.length;i++) {
      total += parseInt(arrNum[i]);
    }
    return tambahTerus(total);
  }
}


console.log(tambahTerus(13)); // 4
console.log(tambahTerus(54)); // 9
console.log(tambahTerus(123)); // 6
console.log(tambahTerus(5)); // 5
console.log(tambahTerus(1234)); // 1
console.log(tambahTerus(99)); // 9
console.log(tambahTerus(88888888)); // 1
console.log(tambahTerus(333)); // 9
