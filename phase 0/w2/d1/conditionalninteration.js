function kelipatan (i, angka) {
  if(i%(angka+1) === 0) {
    console.log(i + " kelipatan " + (angka+1));
  }
  else {
    console.log("");
  }
}

console.log("=== GANJIL/GENAP ===");
for (i=1; i<101; i++) {
  if(i%2 === 0) {
    console.log("GENAP");
  }
  else{
    console.log("GANJIL");
  }
}

var angka = 2;
console.log("=== KELIPATAN " + (1+angka) + "===");
for (i=1; i<101; i+=angka) {
  kelipatan(i, angka);
}

var angka = 6;
console.log("=== KELIPATAN " + (1+angka) + "===");
for (i=1; i<101; i+=angka) {
  kelipatan(i, angka);
}

var angka = 9;
console.log("=== KELIPATAN " + (1+angka) + "===");
for (i=1; i<101; i+=angka) {
  kelipatan(i, angka);
}

