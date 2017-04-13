// === PRISONER'S DILEMMA === //
/* The prisoner's dilemma is a standard example of a game analyzed
in game theory that shows why two completely "rational" individuals
might not cooperate, even if it appears that it is in their best
interests to do so. */


/* A prisoner may choose to Cooperate or Defect in every iteration.
The points would then be accumulated to analyze the strategy employed.
*/

/* POINTS
Prisoner 1/2 |   C   |   D   |
------------------------------
     C       |  3/3  |  0/5  |
------------------------------
     D       |  5/0  |  1/1  |
*/

/* MOVES:
0. Cooperate
1. Defect
*/

/* Available strategies:
0. All Cooperate
1. All Defect
2. Always Cooperate, unless opponent Defects twice in a row
3. Tit for Tat
4. Tit for Tat + Random (every 10 iterations)
5. Tit for Two Tat + Random (every 10 iterations)
6. Repeat choice if scored >= 3
*/

// Define Prisoner //
function prisoner(strategies) {
  this.history = []; //moves executed in every iteration
  this.points = []; //points for every iteration
  this.winning = []; //history of winning/losing
  this.score = 0; //total points accumulated after a certain # of iterations
  this.winningRate = 0; //total winning/iteration
  this.strategy = strategies;
  this.moves = 0; // move that is going to be executed
}

// Define Strategy //
/*
number = strategy #
moves = the move that is going to be executed
otherMoves = history of other's moves (array)
points = history of the prisoner's points
iteration = how many times the game has been iterated
*/

function setMove(strategy, myHistory, otherHistory, points, iteration) {
  switch (strategy) {
    case 0: { return 0; break; }
    case 1: { return 1; break; }
    case 2: { 
      if(iteration < 3) {return 0; break;}
      else if (otherHistory[iteration-1] === 1 && otherHistory[iteration-2] === 1) {
        return 1;
        break;
      }
      else { return 0; break; }
    }
    case 3: {
      if (iteration < 1) {
        return Math.floor(Math.random() * 2);
      }
      else {
        return otherHistory[iteration-1]; break;
      }
    }
    case 4: {
      if (iteration < 1) {
        return Math.floor(Math.random() * 2);
      }
      else if (iteration%10 === 0) {
        return Math.floor(Math.random() * 2);
      }
      else {
        return otherHistory[iteration-1];
      }
      break;
    }
    case 5: {
      if (iteration < 2) {
        return Math.floor(Math.random() * 2);
      }
      else if (iteration%10 === 0) {
        return Math.floor(Math.random() * 2);
      }
      else {
        return otherHistory[iteration-2];
      }
      break;
    }
    case 6: {
      if (iteration < 1) {
        return Math.floor(Math.random() * 2);
      }
      else if (points[iteration-1] >= 3) {
        return myHistory[iteration-1];
      }
      else {
        return Math.floor(Math.random() * 2);
      }
      break;
    }
  }
}

function givePoints(moves1, moves2) {
  if (moves1 === 0 && moves2 === 0) {
    return 3;
  }

  else if (moves1 === 1 && moves2 === 1) {
    return 1;
  }

  else if (moves1 === 1 && moves2 === 0) {
    return 5;
  }

  else if (moves1 === 0 && moves2 === 1) {
    return 0;
  }
}

// === GAME BEGIN! === //

var iteration = 0;
var strategies = [5, 1];
var prisoners = [];
var move = [];
var point = [];

//Welcome and Getting Parameters
var welcome = "Welcome to Prisoner's Dilemma!\n" +
"The computer will acts as two prisoners that are being interrogated. \n" +
"But you get to choose how many times the game is being played, \n" +
"and which strategy is going to be employed by each prisoner. \n" +
"If you are want to know more about Prisoner's Dilemma, please consult Wikipedia \n" +
"or learn more about Game Theory. \n\n\n";
var totalIteration = prompt(welcome + "How many times do you want the computer to play the games? ");

var listStrategy = "You may choose 1 strategy among these.\n" +
"1. All Cooperate \n" +
"2. All Defect \n" +
"3. Always Cooperate, unless opponent Defects twice in a row \n" +
"4. Tit for Tat \n" +
"5. Tit for Tat + Random (every 10 iterations) \n" +
"6. Tit for Two Tat + Random (every 10 iterations) \n" +
"7. Repeat choice if scored >= 3 \n\n\n";

strategies[0] = prompt(listStrategy + "Which strategy should Prisoner number 1 employ?");
strategies[1] = prompt(listStrategy + "Which strategy should Prisoner number 2 employ?");

// Initialize prisoners
for (var player=0; player<2; player++) {
  prisoners[player] = new prisoner(strategies[player]-1);
}

// The Games
for (iteration; iteration<totalIteration ; iteration++) {

  // Decide moves
  move[0] = setMove(prisoners[0].strategy, prisoners[0].history,
    prisoners[1].history, prisoners[0].points, iteration);
  //console.log("moves 1 = " + move[0]);
  move[1] = setMove(prisoners[1].strategy, prisoners[1].history,
    prisoners[0].history, prisoners[1].points, iteration);
  //console.log("moves 2 = " + move[1]);

  // Give points
  point[0] = givePoints(move[0], move[1] );
  point[1] = givePoints(move[1], move[0] );
  //console.log("Point0 = " + point[0]);
  //console.log("Point1 = " + point[1]);

  // Record points history
  if (point[0] === point[1]) {
    prisoners[0].winning.push(0);
    prisoners[1].winning.push(0);
  }
  else if (point[0] < point[1]) {
    prisoners[0].winning.push(0);
    prisoners[1].winning.push(1);
  }
  else {
    prisoners[0].winning.push(1);
    prisoners[1].winning.push(0);
  }

  // Record other history & calculate winning rate & score
  for (i = 0; i<2; i++) {
    prisoners[i].history.push(move[i]);
    prisoners[i].points.push(point[i]);
    prisoners[i].winningRate += prisoners[i].winning[iteration];
    prisoners[i].score += point[i];
  }
}

// Results
console.log("You've played: " + iteration + " games.");
for (j = 0; j<2; j++) {
  console.log("Prisoner " + (j+1) + " has scored " + prisoners[j].score + " points.");
  console.log("Prisoner " + (j+1) + " has win " + prisoners[j].winningRate + " times and has winning rate of " + (prisoners[j].winningRate/iteration*100).toFixed(2) + "%" );
}

// Winning Statement
if (prisoners[0].score > prisoners[1].score) {
  console.log("\n Prisoner 1 wins the game and serves less time in jail.")
}
else {
  console.log("\n Prisoner 2 wins the game and serves less time in jail.")
}
