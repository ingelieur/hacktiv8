function dataHandling2 (input) {
    
  // Add things to input
  
  input.splice([4], [1], "Pria", "SMA Internasional Metro");
  
  console.log(input);
  
  //Change month's # -> name
  
  var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  
  var tanggal = input[3].split("/");
  input[3] = tanggal.join("-");
    console.log(bulan[parseInt(tanggal[1])-1]);
  
  //Sort tanggal -> change it back to string
  for (var i = 0; i<tanggal.length; i++) {
    tanggal[i] = parseInt(tanggal[i]);
  }
  tanggal.sort(function(value1,value2) {return value1 < value2;});
  
  for (i = 0; i<tanggal.length; i++) {
    tanggal[i] = tanggal[i].toString();
    if (tanggal [i] - 10 < 0) {
      tanggal [i] = "0" + tanggal[i];
    }
  }
    
  console.log(tanggal);
  
  //Join string
  
  console.log(tanggal.join("-"));
  
  //max. name = 15 char
  var nama = input[1].split("");
  nama = nama.slice(0,14);
  input[1] = nama.join("");
  
  console.log(input[1]);
}

// TEST CASE

var input = ["0001", "Roman Alamsyah Elsharawy", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);
