function balikString(kalimat) {
  var asli = kalimat.split("");
  var balik = "";
  
  for (var i= kalimat.length-1; i>= 0; i--){
    balik += asli[i];
  }
  console.log(balik);
}

kalimat = "Hello world!";
balikString(kalimat);
