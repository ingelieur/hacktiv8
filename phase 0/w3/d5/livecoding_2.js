function rollDice(diceResultsParam) {

  var cash = 0;

  for (i=0;i<diceResultsParam.length;i++) {
    if (diceResultsParam[i] === 0) {
      cash -= 1000;
    }
    else {
      cash += (300*diceResultsParam[i]);
    }
  }

  return cash;
}

console.log(rollDice([2, 3, 4 ,5])); // 4200

console.log(rollDice([3, 3, 0, 5])); // 2300

console.log(rollDice([0, 0, 6, 7])); // 1900
