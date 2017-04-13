function player (name, jobs, age, skill, hp) {
  this.name = name;
  this.jobs = jobs;
  this.age = age;
  this.skill = skill;
  this.hp = hp;
}

var players = [];
players[0] = new player("Andrew", "Knight", 35, "One Handed Sword", 6700);
players[1] = new player("Angus", "Wizard", 45, "Magic Crasher", 4500);
players[2] = new player("Carney", "Priest", 20, "Healing", 3000);
players[3] = new player("Benedict", "Assassin", 33, "Cloaking", 5500);

for (i=0;i<players.length;i++) {
  console.log("Name: " + players[i].name);
  console.log("Jobs: " + players[i].jobs);
  console.log("Age: " + players[i].age);
  console.log("Skill: " + players[i].skill);
  console.log("HP: " + players[i].hp + "\n");
}

var monsterAttck = 5000;

console.log("\n===== THEN THE FIRE NATION ATTACKED! =====\n");

for (i=0;i<players.length;i++) {
  console.log("Name: " + players[i].name);
  if (players[i].hp < monsterAttck) {console.log("HP: " + 0);}
  else {console.log("HP: " + (players[i].hp-monsterAttck)); }
}
