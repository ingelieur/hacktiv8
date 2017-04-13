var Object1 = [
  {
    hari: 'Senin',
    kehadiran: 'Masuk',
    alasan: ''
  },
  {
    hari: 'Rabu',
    kehadiran: 'Masuk',
    alasan: ''
  },
  {
    hari: 'Jumat',
    kehadiran: 'Absen',
    alasan: 'Dinas Luar'
  }
  ];

for (i=0; i<Object1.length; i++) {
  if (Object1[i].hari !== '') {
    console.log('Hari: ' + Object1[i].hari);
  }
  
  if (Object1[i].kehadiran !== '') {
    console.log('Kehadiran: ' + Object1[i].kehadiran);
  }
  
  if (Object1[i].alasan !== '') {
    console.log('Alasan: ' + Object1[i].alasan);
  }
  console.log('\n');
}
