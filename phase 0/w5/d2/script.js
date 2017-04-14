// Mengubah <div>Saya Adalah Keturunan Pertama</div> menjadi <div>Diakses Melalui Eldest Parent</div>
var eldestParent = document.getElementById("eldest-parent");
eldestParent.children[0].innerHTML = "Diakses Melalui Eldest Parent";

//Mengubah <div>Saya adalah Generasi Termuda, yang paling Tua</div> menjadi <div>Diakses Melalui a Child</div>
var aChild = document.getElementById("a-child");
aChild.previousElementSibling.innerHTML = "Diakses Melalui a Child";

//Mengubah <div>Saya adalah Generasi Termuda, yang Paling Muda</div> menjadi <div>Diakses Melalui a Child</div>
aChild.nextElementSibling.innerHTML = "Diakses Melalui a Child";

//Mengubah <div>Saya adalah Generasi yang Cukup Tua</div> menjadi <div>Diakses Melalui a Child</div>
aChild.parentNode.parentNode.nextElementSibling.innerHTML = "Diakses Melalui a Child";
