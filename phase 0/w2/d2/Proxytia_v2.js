//Have to declare no protect in jsbin to turn off infinite loop prevention
//noprotect

var peran = "";
var tahunLahir = "";

// Check name, if null -> peran = Kacung

var nama = prompt("Nama: ","");
if (nama === "") {
  peran = "Kacung";
}

else {
  // Ask for the desired peran
  while (peran!="Ksatria"&&peran!=="Tabib"&&peran!="Penyihir"|| peran.length === 0){
    peran = prompt("Peran: ","Ksatria, Tabib, atau Penyihir");
    
    if (peran!="Ksatria"&&peran!=="Tabib"&&peran!="Penyihir"|| peran.length === 0) {
      alert("Pilih peranmu untuk memulai game.");
    }
  }
}

// Ask + Check tahunLahir
while (isNaN(tahunLahir) || tahunLahir === "") {
  tahunLahir = prompt("Tahun Lahir: ", "");
}

var umur = Math.abs(2017 - tahunLahir);

// Start Game
if (peran === "Ksatria") {
  alert("Selamat datang di Dunia Proxytia, " + nama + "!\n\nHalo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
}
else if (peran === "Tabib") {
  alert("Selamat datang di Dunia Proxytia, " + nama + "!\n\nHalo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
}
else if (peran === "Penyihir"){
  alert("Selamat datang di Dunia Proxytia, " + nama + "!\n\nHalo Penyihir" + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
}
else {
  alert("Selamat datang di Dunia Proxytia!\n\nHalo Kacung!");
}

// Assign game's parameter
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));

// BATTLE!!!

for (var i = 1; i <= tahunLahir; i++) {
  if (i%umur === 0) {
    console.log(peran + ' ' + nama + ' menyerang monster!');
    monsterHealth -= umur;
  }
  else if (i%kodeMonster === 0){
    console.log('monster menyerang ' + peran + ' ' + nama + '!');
    playerHealth -= kodeMonster;
  }
  else if(i%umur === 0 && i%kodeMonster === 0) {
    console.log('Health keduanya bertambah');
    playerHealth += kodeMonster;
    monsterHealth += umur;
  }
}

// RESULTS!!!
if (playerHealth > monsterHealth) {
  console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
}
else {
  console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
}




