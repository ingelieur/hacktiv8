// Menyeleksi DOM berdasarkan ID element dan menampungnya ke dalam variabel.
var pageFillMeElement = document.getElementById("fill-me");

// Menyeleksi DOM berdasarkan tag element dan menampungnya ke dalam variabel.
var pageApaKabarElement = document.getElementsByTagName("h2");

// Menyeleksi DOM berdasarkan class element dan menampungnya ke dalam variabel.
var pageChangeAllOfMeElement = document.getElementsByClassName("change-all-of-me");

//Mengubah teks fill me
pageFillMeElement.innerHTML = "HALO!";

//Mengubah teks change-all-of-me
for (i=0;i<pageChangeAllOfMeElement.length;i++){
  pageChangeAllOfMeElement[i].innerHTML = "HALO JUGA!";
}

//Mengubah teks H2 - mengapa ini juga bentuknya array?
pageApaKabarElement[0].innerHTML = "Apa kabar!";
