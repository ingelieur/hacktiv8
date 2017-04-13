/*
HACKTIV8 Online Live Coding 2

Nama :

======================
Gambler's Slot Machine
======================

[DESKRIPSI]

Seorang pejudi memiliki kredit balance di Slot Machine sebanyak 5000 DOLLARS melakukan pemutaran Slot Machine. Slot machine adalah sebuah
permainan judi kasino yang akan menghasilkan tiga angka (range angka hanya 1-9).

Rules:
1. Apabila ia mendapatkan 3 angka dengan nilai yang berbeda, maka kredit balance akan dikurangi dari setiap angka dikalikan dengan 50.
    Contoh:
    a. hasil Slot Machine adalah 1, 2, dan 3. Ia kalah.
    kredit balance akan dikurangi sebesar (1 + 3 + 2) * 50 = 300
2. Apabila ia mendapat 2 angka yang sama, ia akan mendapat kredit sebesar total dari
setiap angka dikalikan dengan 100.
    Contoh:
    a.  hasil Slot Machine adalah 1, 1, dan 2.
        Ia akan mendapatkan penambahan kredit sebesar (1 + 1 + 2) * 100 = 400
    b.  hasil Slot Machine adalah 3, 5, dan 3.
        Ia akan mendapatkan penambahan kredit sebesar (3 + 5 + 3) * 100 = 1100
3. Apabila ia mendapat 3 angka yang sama, ia akan mendapat kredit sebesar total angka
tersebut dikalikan dengan 200.
    Contoh:
    a.  hasil Slot Machine adalah 1, 1, dan 1.
        Ia akan mendapatkan penambahan kredit sebesar (1 + 1 + 1) * 200 = 600
    b.  hasil Slot Machine adalah 3, 3, dan 3.
        Ia akan mendapatkan penambahan kredit sebesar (3 + 3 + 3) * 200 = 1800

[INSTRUKSI]

Tersedia sebuah function bernama evaluateSlotMachine yang menampung satu parameter,
berupa array yang berisikan tiga nilai hasil keluaran dari slot machine.

Buatlah sebuah function yang akan mengembalikan string berupa
- "YOU WIN X DOLLARS" apabila tidak kalah, dimana X merupakan kredit yang dimenangkan pejudi.
dan "YOUR TOTAL CREDIT BALANCE IS X DOLLAR" hasil penambahan dari kredit awal + kredit yang dimenangkan

- "YOU LOSE X DOLLAR" apabila kalah (mendapatkan tiga angka berbeda dari slot machine), dimana x merupakan
kredit yang dibayarkan pejudi.
dan YOUR TOTAL CREDIT BALANCE IS X DOLLAR" hasil pengurangan dari kredit awal - kredit yang dibayarkan"

*/


function evaluateSlotMachine(Arr) {
  var creditBalance = 5000;
  var result = 0;
  if (Arr[0] === Arr[1] && Arr[1] === Arr[2]){
    result += (Arr[0]+Arr[1]+Arr[2])*200;
    console.log("YOU WIN " + result + " DOLLARS");
  }
  else if (Arr[0] === Arr[1] || Arr[1] === Arr[2] || Arr[0] === Arr[2]){
    result += (Arr[0]+Arr[1]+Arr[2])*100;
    console.log("YOU WIN " + result + " DOLLARS");
  }
  else {
    result -= (Arr[0]+Arr[1]+Arr[2])*50;
    console.log("YOU LOSE " + result + " DOLLAR");
  }

  return ("YOUR TOTAL CREDIT BALANCE IS " + (creditBalance+result) + " DOLLAR");
}

console.log(evaluateSlotMachine([1, 1, 2])); // "YOU WIN 400 DOLLARS, YOUR TOTAL CREDIT BALANCE IS 5400 DOLLAR"
console.log(evaluateSlotMachine([1, 1, 1])); // "YOU WIN 600 DOLLARS, YOUR TOTAL CREDIT BALANCE IS 5600 DOLLAR"
console.log(evaluateSlotMachine([5, 5, 5])); // "YOU WIN 3000 DOLLARS, YOUR TOTAL CREDIT BALANCE IS 8000 DOLLAR"
console.log(evaluateSlotMachine([6, 3, 3])); // "YOU WIN 1200 DOLLARS, YOUR TOTAL CREDIT BALANCE IS 6200 DOLLAR"
console.log(evaluateSlotMachine([1, 3, 2])); // "YOU LOSE 300 DOLLAR",  YOUR TOTAL CREDIT BALANCE IS 4700 DOLLAR"
