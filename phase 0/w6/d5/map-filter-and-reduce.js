//Buatlah sebuah code yang mentransformasi array menggunakan map!
var transformArrToLowerCase = arr => arr.map (arrContent => arrContent.toLowerCase());

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']

//Buatlah sebuah code yang melakukan filter ke array menggunakan filter!
var filterArrUnder10 = arr => arr.filter (arrContent => arrContent > 10);
  // Filter setiap element array yang nilainya dibawah 10, sisakan yang 10 ke atas!

console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]

//Buatlah sebuah code yang mendapatkan nilai terbesar menggunakan reduce!
var reduceFindMaximum = arr => arr.reduce ((arrMax, arrContent) => Math.max(arrMax,arrContent));
  // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9
