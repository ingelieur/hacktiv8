/*
HACKTIV8 Online Live Coding 1

Nama:

================
Crack The Number
================

Mike Hammer adalah seorang detektif yang di minta untuk memecahkan sebuah kasus pembunuhan berantai yang terjadi di sebuah kota
di pedalaman eropa. Di tempat kejadian peristiwa, sang pembunuh selalu meninggalan urutan angka, yang ternyata adalah urutan alphabetic dan apabila di gabungkan menjadi sebuah Nama.
Sebagai seorang detektif Mike Hammer di minta untuk mencegah terjadinya pembunuhan selanjutnya dengan cara,
memecahkan angka tersebut untuk di gantikan menjadi nama seseorang yang menjadi target si pembunuh,

Contoh urutan angka:

angka = [1,12,1,19,20,1,9,18,0,1,18,3,8,9,5] // Alastair Archie
angka = [2,1,12,20,8,1,26,1,18,0,6,5,18,7,21,19] //Balthazar Fergus

[PERINTAH]
-  Tersedia fungsi nextTargetName, dimana fungsi tersebut dapat merubah uturan angka tersebut menjadi sebuah
   susunan alphabetic
 - Apabila di temukan angka 0 pada susunan angka, itu berarti adalah sebuah spasi
 - Buatlah susunan huruf itu menjadi sebuah string

*/

function numberToLetter(num) {
  if (num === 0){
    return " ";
  }

  var letter = String.fromCharCode(num+96);
  return letter;
}

function nextTargetName(angka){
  var nama = numberToLetter(angka[0]).toUpperCase();

  for (i=1;i<angka.length;i++) {
    if (angka[i-1] === 0){
      nama += numberToLetter(angka[i]).toUpperCase();
    }
    else {
      nama += numberToLetter(angka[i]);
    }
  }
  return nama;
}

console.log(nextTargetName([1,12,1,19,20,1,9,18,0,1,18,3,8,9,5])); // Alastair Archie
