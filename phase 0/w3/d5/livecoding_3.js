function strtoNum(sen){

  var angka = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
  var angkaSen = [];

  arrSen = sen.split(" ");
  for (i=0;i<arrSen.length;i++){
    angkaSen[i] = arrSen[i].length;
  }

  angkaSen = angkaSen.sort(function(value1, value2) {return value1<value2;})

  for (i=0;i<arrSen.length;i++){
    angkaSen[i] = angka[angkaSen[i]-1];
  }

  return angkaSen;

}

console.log(strtoNum('Gray Fox')); //[ 'Four', 'Three' ]
console.log(strtoNum('Budi Learning JS')); //[ 'Eight', 'Four', 'Two' ]
console.log(strtoNum('Web Developer')); //[ 'Nine', 'Three' ]
console.log(strtoNum('I Become Developer')); //[ 'Nine', 'Six', 'One' ]
