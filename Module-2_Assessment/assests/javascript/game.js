var wordBank = ["BERSERK", "CLUB", "HEATHEN","HEIR", "DREGS", "BASK", "PLUNDER", "SCANT", "OAF", "RANSACK"
,"BJORN","ERIK","THOR","ODIN","HELGA","ASTRID"];
var unusedLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let wins = 0;
let losses = 0;
var guesses = 10;

var currentWord;
var currentArray = [];
var currentDefaultArray = [];
var guessLetter;
var usedLetters = [];
var currentIndex = 0;
var currentIndexes = [];



//get elements
var wordArea = document.getElementById("word_area");
var guessArea = document.getElementById("guesses");
var livesArea = document.getElementById("lives");
var winArea = document.getElementById("wins");
var lossArea = document.getElementById("losses");
var previous = document.getElementById("previous");

//HTML UI
guessArea.innerHTML = "Guesses: " + usedLetters;
livesArea.innerHTML ="Lives: " + guesses;
winArea.innerHTML = "Wins: " + wins;
lossArea.innerHTML = "Losses: " + losses;
previous.innerHTML = "Previous Word: " + currentArray.join('');


function updateArray() {
  currentIndexes = [];
  for (i = 0; i < currentDefaultArray.length; i++) {
    if (currentDefaultArray[i] === guessLetter) {
      currentIndexes.push(i);
    }
    else {
    }
  }
  
  return currentIndexes;
}

function check() {
  newIndex = currentWord.indexOf(guessLetter);
  if (newIndex >= 0) {
    for (i = 0; i < currentIndexes.length; i++) {
      currentArray.splice(currentIndexes[i], 1, guessLetter);
    }
    playCorrect();
    refresh();
  }
  else {
    guesses = guesses - 1;
    refresh();
    playMiss();
    didYouLose();
  }
}

function didYouWin() {
  var one = currentArray.join("");
  var two = currentDefaultArray.join("");
  if (one === two) {
    wins = wins + 1;
    console.log("you won a game");
    previous.innerHTML = "Previous Word: " + currentArray.join('');
    refresh();
    playWin();
    refreshGame();
  }
}

function didYouLose() {
  if (guesses === 0) {
    losses = losses + 1;
    refresh();
    playLose();
    refreshGame();
  }
}
function upperCase(element) {
  return (element === guessLetter.toUpperCase());
  guessLetter = guessLetter.toUpperCase();
}
function randomWord() {
  currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  currentDefaultArray = currentWord.split("");

  currentArray = currentDefaultArray;

  for (j = 0; j < currentArray.length; j++) {
    currentArray[j] = " _ ";
  }
  console.log("Current Array: " + currentArray);
  currentDefaultArray = currentWord.split("");
}

function refresh() {
  guessArea.innerHTML = "Guesses: " + usedLetters;
  wordArea.innerHTML =  currentArray.join('');
  livesArea.innerHTML ="Lives: " + guesses;
  winArea.innerHTML = "Wins: " + wins;
  lossArea.innerHTML = "Losses: " + losses;
  previous.innerHTML = "Previous Word: " + currentArray.join('');
}
function refreshGame() {
  guesses = 10;
  unusedLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  usedLetters = [];
  refresh();
  play();
  
}

function keyPress() {
  document.onkeyup = function (event) {
    guessLetter = event.key;
    console.log("This is the letter that was just pressed: " + guessLetter);

    if (unusedLetters.some(upperCase)) {
      guessLetter = guessLetter.toUpperCase();
      unusedLetters.splice(unusedLetters.indexOf(guessLetter), 1);
      usedLetters.push(guessLetter);
      updateArray();
      check();
      didYouWin();
    }
  }
}

function playWin(){
  var audio = new Audio("assests/sfx/Short_triumphal_fanfare-John_Stracke-815794903.wav");
  audio.play();
 }
 function playLose(){
  var audio = new Audio("assests/sfx/Power Failure-SoundBible.com-1821346166.wav");
  audio.play();
 }    
 function playMiss(){
  var audio = new Audio("assests/sfx/Computer Error-SoundBible.com-399240903.mp3");
  audio.play();
 }        
 function playCorrect(){
  var audio = new Audio("assests/sfx/Metal Impact Hollow-SoundBible.com-583611978.mp3");
  audio.play();
 }
 function playStart(){
  var audio = document.getElementById("soundStart");
  audio.play();
 }

function play() {
  randomWord();
  wordArea.innerHTML = currentArray.join('');
  console.log("This is your randomly selected word: " + currentWord);
  console.log("----------------------------------------------");
  keyPress();
}
play();



