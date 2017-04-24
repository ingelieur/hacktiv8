// Array 1 Competency Test

function numberCruncher(numberArr) {
  numberArr.unshift(0);
  numberArr.push(0);
  var newArr = [];
  for (i=1;i<numberArr.length-1;i++){
    newArr.push (numberArr[i-1]+numberArr[i]+numberArr[i+1]);
  }
  return newArr;
}

console.log(numberCruncher([7, 1, 0, 4])); // [ 8, 8, 5, 4 ]
console.log(numberCruncher([2, 3, 1, 4, 1, 5, 0, 3])); // [ 5, 6, 8, 6, 10, 6, 8, 3 ]
console.log(numberCruncher([1, 3, 2, 5, 6, 0])); // [ 4, 6, 10, 13, 11, 6 ]
console.log(numberCruncher([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])); // [ 1, 1, 2, 1, 2, 1, 2, 1, 2, 1 ]
console.log(numberCruncher([3, 6, 8, 9, 1, 2, 3])); // [ 9, 17, 23, 18, 12, 6, 5 ]
