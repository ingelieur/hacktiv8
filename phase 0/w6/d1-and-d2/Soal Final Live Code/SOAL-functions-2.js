// Function 2 Competency Test

function removeDash(str) {
  var arrStr = str.split('-');
  return arrStr.join(' ');
}

function capitalizeString(str) {
  var arrStr = str.split(' ');
  for (i=0;i<arrStr.length;i++){
    arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].substring(1);
  }
  return arrStr.join(" ");
}


function transformTextToNumber(str) {
  var arrStr = str.toLowerCase().split("");
  for (j=0;j<arrStr.length;j++) {
    if (arrStr[j] === "i") arrStr[j] = 1;
    if (arrStr[j] === "e") arrStr[j] = 3;
    if (arrStr[j] === "s") arrStr[j] = 5;
    if (arrStr[j] === "o") arrStr[j] = 0;
    if (arrStr[j] === "a") arrStr[j] = 4;
  }
  return arrStr.join("");
}

function stringManipulator(str) {
  var numStr = transformTextToNumber(str);
  var remStr = removeDash(numStr);
  var capStr = capitalizeString(remStr);
  return capStr;
}

console.log(stringManipulator("Hello-world,-tHis-IS-aN-eXAMple-seNTence"));
// H3ll0 W0rld, Th15 15 4n 3x4mpl3 53nt3nc3

console.log(stringManipulator("lORem-IpSUM DolOR sIt-AmeT"));
// L0r3m 1p5um D0l0r 51t 4m3t

console.log(stringManipulator("d1s i5-v3Ry e4sy-I can-do th1s"));
// D15 15 V3ry 345y 1 C4n D0 Th15
