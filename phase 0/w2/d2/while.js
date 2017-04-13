function cekGenap(angka) {
  if (angka%2 === 0) {return true;}
}

var i = 1;
while (i<20) {
  if (cekGenap(i)) {
    console.log(i + " = I love coding");
  }
  i++;
}

while (i>1) {
  if (cekGenap(i)) {
    console.log(i + " = I will become a fullstack developer");
  }
  i--;
}
