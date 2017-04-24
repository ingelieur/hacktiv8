
function findMax(numberArr) {
  return Math.max(...numberArr);
}

function findMin(numberArr) {
  return Math.min(...numberArr);
}

function findMean(numberArr) {
  var total=0;
  for (i=0;i<numberArr.length;i++){
    total += numberArr[i];
  }
  return Math.floor(total/numberArr.length);
}


function findOdds(numberArr) {
  var oddString = [];
  for (j=0;j<numberArr.length;j++){
    if (numberArr[j]%2 !== 0) {
      oddString.push(numberArr[j]);
    }
  }
  return oddString.join("-");
}

function findEvens(numberArr) {
  var evenString = [];
  for (l=0;l<numberArr.length;l++){
    if (numberArr[l]%2 === 0) {
      evenString.push(numberArr[l]);
    }
  }
  return evenString.join("-");
}

function numberProcessing(numberArr) {
  var min = findMin(numberArr);
  var max = findMax(numberArr);
  var mean = findMean(numberArr);
  var odd = findOdds(numberArr);
  var even = findEvens(numberArr);
  return ('Min: '+min+ ', Max: '+max+', Mean: '+mean+', Odds: '+odd+', Evens: '+even);
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Mean: 3, Odds: 1-3-5-1-3, Evens: 2-8-10-0"
