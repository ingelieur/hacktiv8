/*
Buatlah sebuah Class Student, yang memiliki atribut berikut:

Name,
Age,
Date of Birth,
Gender
Student ID (bisa berupa angka atau teks), dan
Hobbies (bisa menampung lebih dari 1 hobi).
Class tersebut juga bisa memanggil fungsi dengan proses sebagai berikut:

SetName: mengubah nama student dengan mengirimkan satu parameter ke dalam fungsi berupa teks
SetAge: mengubah umur student dengan mengirimkan satu parameter ke dalam fungsi berupa angka
SetDateOfBirth: mengubah tanggal lahir student dengan mengirimkan satu parameter ke dalam fungsi berupa teks
SetGender: mengubah gender student dengan mengirimkan satu parameter ke dalam fungsi berupa teks, dan hanya bisa menerima nilai Male atau Female
addHobby: menambah hobi dengan mengirimkan satu parameter ke dalam fungsi berupa teks
removeHobby: menghapus list hobi yang ada dengan mengirimkan satu parameter berupa teks, yang merupakan hobi apa yang akan dihapus
getData: menampilkan seluruh data atribut murid
*/

class Student {
  constructor(name, age, dob, gender, stuId, hobbies) {
    this.name = name;
    this.age = age;
    this.dateofbirth = dob;
    this.gender = gender;
    this.studentID = stuId;
    this.hobbies = hobbies;
  }
  setName(newName) {
    this.name = newName;
  }
  setAge(newAge) {
    this.age = newAge;
  }
  setDateofBirth (newDob) {
    this.dateofbirth = newDob;
  }
  setGender (newGender) {
    if (newGender === "Male" || newGender === "Female") {
      this.gender = newGender;
    }
  }
  addHobby (newHobby) {
    this.hobbies.push(newHobby);
  }
  removeHobby (removeHobby) {
    let removedIndex = this.hobbies.indexOf(removeHobby);
    console.log(removedIndex);
    this.hobbies.splice(removedIndex,1);
  }
  getData () {
    return (this.name+"\n"+this.age+"\n"+this.dateofbirth+"\n"+this.gender+"\n"+this.studentID+"\n"+this.hobbies)
  }
}

let muridBaru = new Student("Shabrina", 26, "18/01/1991", "Female", 1681717, ["sleeping", "reading"]);
//console.log(muridBaru.getData());
muridBaru.removeHobby ("reading");
console.log(muridBaru.getData());
