//Have to declare no protect in jsbin to turn off infinite loop prevention
//noprotect

//Define Variables
var nama = "";
var peran = "";

//Input values - check if the values are empty
while (nama.length === 0) {
  nama = prompt("Nama: ","");
  if (nama.length === 0) {
    alert("Nama tidak boleh kosong.");
  }
}

//Q== How to make the string value independent of letters' case ==Q
while (peran!="Ksatria"&&peran!=="Tabib"&&peran!="Penyihir"|| peran.length === 0){
  peran = prompt("Peran: ","Ksatria, Tabib, atau Penyihir");
  if (peran!="Ksatria"&&peran!=="Tabib"&&peran!="Penyihir"|| peran.length === 0) {
    alert("Pilih peranmu untuk memulai game.");
  }
}

//Set output
if (peran === "Ksatria") {
  alert("Selamat datang di Dunia Proxytia, " + nama + "!\n\nHalo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
}
else if (peran === "Tabib") {
  alert("Selamat datang di Dunia Proxytia, " + nama + "!\n\nHalo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
}
else {
  alert("Selamat datang di Dunia Proxytia, " + nama + "!\n\nHalo Penyihir" + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
}

