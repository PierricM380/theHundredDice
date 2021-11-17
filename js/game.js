// Get DOM elements
let newGame = document.getElementById("newGame");
let inputName1 = document.getElementById("inputName1");
let inputName2 = document.getElementById("inputName2");
let goBtn = document.getElementById("go");
let cardPlayer1 = document.querySelector(".cardPlayer1");
let cardPlayer2 = document.querySelector(".cardPlayer2");
let imgDice = document.querySelector("#dice");
let holdBtn = document.getElementById("holdBtn");
let throwBtn = document.getElementById("throwBtn");
// Initialize variables
let points;
let roundPoint;
let actualPlayer;
let gamePlaying;
let pseudo1 = "";
let pseudo2 = "";

// collect value tipped in inputs for insert into h2, h3 title
inputName1.addEventListener("input", (e) => {
  pseudo1 = e.target.value;
});

inputName2.addEventListener("input", (e) => {
  pseudo2 = e.target.value;
});

// reseting all requiered variables and DOM elements for a new party
function resetParty() {
  points = [0, 0];
  roundPoint = 0;
  actualPlayer = 0;
  gamePlaying = true;
  pseudo1 = "";
  pseudo2 = "";

  cardPlayer1.classList.add("visible");
  cardPlayer2.classList.remove("visible");

  document.getElementById("total-0").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("total-1").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("player-0").textContent = "Joueur 1";
  document.getElementById("player-1").textContent = "Joueur 2";

  imgDice.classList.add("hidden");
}

// Next player function
function next() {
  roundPoint = 0;
  // Define which player is active
  if (actualPlayer === 0) {
    actualPlayer = 1;
  } else {
    actualPlayer = 0;
  }
  // Update de DOM elements
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;
  cardPlayer1.classList.toggle("visible");
  document.querySelector(".cardPlayer2").classList.toggle("visible");
  imgDice.classList.add("hidden");
}

// Sound for rolling dice
function rollingSound() {
  let diceSound = new Audio("assests/songs/rollingSound.mp3");
  diceSound.play();
}

// Sound for hold button
function reloadSound() {
  let reload = new Audio("assests/songs/RifleReload.mp3");
  reload.play();
}

// Button new party => reset Party
newGame.addEventListener("click", resetParty);

// Button Go => Add names into cards names titles
goBtn.addEventListener("click", () => {
  document.getElementById("player-0").textContent = pseudo1;
  document.getElementById("player-1").textContent = pseudo2;
});

// Throw button
throwBtn.addEventListener("click", () => {
  if (gamePlaying) {
    rollingSound();
    // display dice
    imgDice.classList.remove("hidden");
    // Shake for random number
    let randomFace = Math.floor(Math.random() * 6) + 1;
    // display result face into right image
    imgDice.classList.add("animatedDice");
    imgDice.src = `/assests/images/diceFace${randomFace}.png`;
    setTimeout(() => {
      dice.classList.remove("animatedDice");
    }, 500);
    // update roundPoint and display into DOM
    if (randomFace !== 1) {
      roundPoint += randomFace;

      document.getElementById("current-" + actualPlayer).textContent =
        roundPoint;
    } else {
      setTimeout(() => {
        next();
      }, 1000);
    }
  }
});

// Hold button
holdBtn.addEventListener("click", () => {
  if (gamePlaying) {
    reloadSound();
    imgDice.classList.add("hidden");
    // Current points to total
    points[actualPlayer] += roundPoint;

    document.querySelector("#total-" + actualPlayer).textContent =
      points[actualPlayer];
    if (points[actualPlayer] >= 100) {
      // Display message of congratulation for the winner
      document.getElementById("player-" + actualPlayer).textContent =
        "Bien joué !";

      imgDice.style.display = "none";
      holdBtn.style.display = "none";
      throwBtn.style.display = "none";
      // fireworks video

      // Shutdown game
      gamePlaying = false;
    } else {
      setTimeout(() => {
        next();
      }, 1000);
    }
  }
});
