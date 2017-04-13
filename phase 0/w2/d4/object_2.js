var Teman = function(nama, kabar, pekerjaan) {
  this.nama = nama;
  this.kabar = kabar;
  this.pekerjaan = pekerjaan;
  this.sapa = function(nama1){
    console.log("Halo " + nama1 + ', apa kabar?');
  };
  this.balasSapa = function(nama2) {
    console.log('Halo ' + nama2 + ' kabarku ' + this.kabar);
  };

  this.tanyaPekerjaan = function() {
    console.log('Apa pekerjaanmu saat ini?');
  };
  this.balasPekerjaan = function() {
    console.log('Pekerjaanku saat ini adalah ' + this.pekerjaan);
  };
  
  this.berpisah = function(otherteman) {
    console.log('Senang bertemu denganmu ' + otherteman.nama + ', semoga kamu sukses sebagai ' + otherteman.pekerjaan);
  };
};

var budi = new Teman('Budi', 'baik', 'developer');
var tono = new Teman('Tono', 'baik', 'chef');

budi.sapa(tono.nama);
tono.balasSapa(budi.nama);
budi.tanyaPekerjaan();
tono.balasPekerjaan();
budi.berpisah(tono);
