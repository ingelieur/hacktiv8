// Array 2 Competency Test

function initialGrouping(studentsArr) {
  var objStud = {};
  var arrObj = [];

  for (i=0; i<studentsArr.length; i++) {
    if (!objStud[studentsArr[i].charAt(0)]) {
      objStud[studentsArr[i].charAt(0)] = [studentsArr[i].charAt(0)];
      objStud[studentsArr[i].charAt(0)].push(studentsArr[i]);
    }
    else {
      objStud[studentsArr[i].charAt(0)].push(studentsArr[i]);
    }
  }
  for (var prop in objStud) {
    arrObj.push(objStud[prop]);
  }
  return arrObj;
}

console.log(initialGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*
[
  [ 'B', 'Budi', 'Badu' ],
  [ 'J', 'Joni', 'Jono' ]
]
*/

console.log(initialGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"]));
/*
[
  [ 'M', 'Mickey' ],
  [ 'Y', 'Yusuf' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ],
  [ 'G', 'Gong' ]
]
*/

console.log(initialGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"]));
/*
[
  [ 'R', 'Rock', 'Rocker' ],
  [ 'S', 'Stone', 'Sticker' ],
  [ 'B', 'Brick' ]
]
*/
