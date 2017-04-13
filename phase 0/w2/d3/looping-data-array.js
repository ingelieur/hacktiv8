function dataHandling (input) {
  var i = input.length;
  console.log(i);
  for (var ii = 0; ii < i; ii++) {
    console.log("Nomor ID: " + input[ii][0]);
    console.log("Nama Lengkap: " + input[ii][1]);
    console.log("TTL: " + input [ii][2]);
    console.log("Hobi: " + input [ii][3]);
    console.log("\n");
  }
}

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];

dataHandling(input);

