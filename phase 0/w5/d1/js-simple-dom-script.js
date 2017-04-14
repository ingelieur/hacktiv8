var pageTitleElement = document.getElementById("page-title");
// Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel. Isinya merupakan object HTML element

var pageBoxElements = document.getElementsByClassName("page-box");
// Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.

var pageHeadings = document.getElementsByTagName("h1");
// Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element

var pageTitleElementContent = pageTitleElement.innerHTML;
console.log('isi <div id="page-title"> :' + pageTitleElementContent);
// isi <div id="page-title"> adalah Sample Page Title

// Meloop array pageBoxElements
for(var i = 0; i < pageBoxElements.length; i++) {
  var currentPageBoxElement         = pageBoxElements[i];
  var currentPageBoxElementContent  = currentPageBoxElement.innerHTML;
  console.log('isi <div class="page-box"> index ke ' + i + ': ' + currentPageBoxElementContent);
}

// Mengubah isi pageTitleElement
pageTitleElement.innerHTML = 'Updated Content of Page Title Element';
var newPageTitleElementContent = pageTitleElement.innerHTML;
console.log('isi baru dari <div id="page-title"> :' + newPageTitleElementContent);
