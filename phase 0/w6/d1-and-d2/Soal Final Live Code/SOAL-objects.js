// Objects Competency Test

function Fox(speciesParam, favouriteFoodParam) {
  this.species = speciesParam;
  this.food = favouriteFoodParam;
  this.howl = function(){
    return("howl! I\'m a "+this.species+" Fox");
  }
  this.meet = function(otherFox){
    if (otherFox.species === this.species) {
      return ("Hey brother!");
    }
    else {return "Hello nice to meet you"};
  }
  this.changeGenetics = function(newSpecies){
    this.species = newSpecies;
  }
}

var jakeTheFox = new Fox("Darwin", "Meat");
var mikeTheFox = new Fox("Ethiopian", "Meat");
var lukeTheFox = new Fox("Fire", "Grass");
var chrisTheFox = new Fox("Darwin", "Grass");

console.log(jakeTheFox.howl()); // howl! I'm a Darwin Fox !!!
console.log(mikeTheFox.howl()); // howl! I'm an Ethiopian Fox !!!
console.log(lukeTheFox.howl()); // howl! I'm a Fire Fox !!!

console.log(jakeTheFox.meet(mikeTheFox)); // hello nice to meet you
console.log(jakeTheFox.meet(chrisTheFox)); // hey brother!
console.log(mikeTheFox.meet(lukeTheFox)); // hello nice to meet you


jakeTheFox.changeGenetics('Ethiopian');
console.log(jakeTheFox.meet(chrisTheFox)); // hello nice to meet you
console.log(jakeTheFox.meet(mikeTheFox)); // hey brother!
