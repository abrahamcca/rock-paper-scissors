let puntosUsuario = 0;
let puntosComputer = 0;

const userPaper = document.querySelector('#Paper')
const userRock = document.querySelector('#Rock')
const userScissor = document.querySelector('#Scissors')
const results = document.querySelector("#results");
const winner = document.querySelector("#winner");
const pointUser = document.querySelector("#point-user");
const pointComputer = document.querySelector("#point-computer");
const userChoose = document.querySelector("#choose-user");
const pcChoose = document.querySelector("#choose-pc");
const pcPic = document.querySelector("#pc-pic");
const winnerContainer = document.querySelector("#winner-container");
const btnReset = document.querySelector("#reset-btn");
const btnUser = document.querySelectorAll(".btn-user");

const getComputerChoice = () => {
  const rockPaperSsiccors = ["Rock", "Paper", "Scissors"];
  const result =
    rockPaperSsiccors[Math.floor(Math.random() * rockPaperSsiccors.length)];
  return result;
};

const userWin = () => {
  puntosUsuario++;
  pointUser.innerHTML = puntosUsuario;
};
const computerWin = () => {
  puntosComputer++;
  pointComputer.innerHTML = puntosComputer;
};

const resetGame = () => {
  results.classList.add("disabled");
  winner.classList.add("disabled");
  winnerContainer.classList.add("disabled");

  puntosUsuario = 0;
  puntosComputer = 0;

  pointUser.innerHTML = puntosUsuario;
  pointComputer.innerHTML = puntosComputer;

  userPaper.disabled = false;
  userRock.disabled = false;
  userScissor.disabled = false;
};

const variable = () => {
  if (puntosUsuario === 5 || puntosComputer === 5) {
    if (puntosUsuario === 5) {
      winner.innerHTML = "¡¡YOU WIN!!";
      winner.classList.remove("disabled");
      winnerContainer.classList.remove("disabled");
      userPaper.disabled = true;
      userRock.disabled = true;
      userScissor.disabled = true;
    } else if (puntosComputer === 5) {
      winner.innerHTML = "¡¡COMPUTER WINS!!";
      winner.classList.remove("disabled");
      winnerContainer.classList.remove("disabled");
      userPaper.disabled = true;
      userRock.disabled = true;
      userScissor.disabled = true;
    }
    btnReset.disabled = false
  }
};

const startRound = (e) => {
  const computerChoice = getComputerChoice();
  const userChoice = e.currentTarget.id;
  pcPic.src = "./src/assets/img/" + computerChoice + ".png";
  results.classList.remove("disabled");
  userChoose.innerHTML = userChoice;
  pcChoose.innerHTML = computerChoice;
  if (
    (userChoice == "Rock" && computerChoice == "Scissors") ||
    (userChoice == "Scissors" && computerChoice == "Paper") ||
    (userChoice == "Paper" && computerChoice == "Rock")
  ) {
    userWin();
  }
  if (
    (computerChoice == "Rock" && userChoice == "Scissors") ||
    (computerChoice == "Scissors" && userChoice == "Paper") ||
    (computerChoice == "Paper" && userChoice == "Rock")
  ) {
    computerWin();
  }
  btnReset.disabled = true;
  variable();
  btnReset.addEventListener("click", resetGame);
};

btnUser.forEach((button) => {
  button.addEventListener("click", startRound);
});
