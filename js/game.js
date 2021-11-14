// Get DOM ELEMENTS
let go = document.getElementById("go");
let inputName1 = document.getElementById("inputName1");
let inputName2 = document.getElementById("inputName2");

let cardPlayer1 = document.querySelector(".cardPlayer1");
let cardPlayer2 = document.querySelector(".cardPlayer2");

let playerName1 = document.getElementById("player1");
let playerName2 = document.getElementById("player2");

let total1 = document.getElementById("totalScore1");
let round1 = document.getElementById("currentScore1");

let total2 = document.getElementById("totalScore2");
let round2 = document.getElementById("currentScore2");

let dice = document.querySelector("img");

let hold = document.getElementById("holdBtn");
let rollBtn = document.getElementById("throwBtn");

let pseudo1 = "";
let pseudo2 = "";
let game;
let currentPlayer;
let round;
let points;

// collect value tipping in inputs and insert into h2, h3 title
inputName1.addEventListener("input", (e) => {
   pseudo1 = e.target.value;
 });

 inputName2.addEventListener("input", (e) => {
   pseudo2 = e.target.value;
 });

// Random display dice faces with animation
function roll() {
  let randomDice = Math.floor(Math.random() * 6) + 1;
  dice.src = "/assests/images/diceFace" + randomDice + ".png";
  dice.classList.add("animatedDice");
  setTimeout(() => {
    dice.classList.remove("animatedDice");
  }, 600);
}

// initialize game
function initialize() {
  let game = true;
  let currentPlayer = 0;
  let round = 0;
  let points = [0, 0];

  playerName1.textContent = pseudo1
  playerName2.textContent = pseudo2
  cardPlayer1.style.boxShadow = "0 0px 30px rgb(128, 128, 128)";
  cardPlayer2.style.opacity = 0.1;

  total1.textContent = "0";
  round1.textContent = "0";
  total2.textContent = "0";
  round2.textContent = "0";
}
