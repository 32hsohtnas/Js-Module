const stone = document.querySelector(".stone");
const scissor = document.querySelector(".scissor");
const paper = document.querySelector(".paper");

const player = document.querySelector(".player-score");
const cpu = document.querySelector(".cpu-score");

const close = document.querySelector(".close");
const rulesBox = document.querySelector(".rules-box");
const rulesButton = document.querySelector(".rules");

const next = document.querySelector(".next");

close.addEventListener("click", function () {
  close.classList.add("hidden");
  rulesBox.classList.add("hidden");
});
rulesButton.addEventListener("click", function () {
  close.classList.remove("hidden");
  rulesBox.classList.remove("hidden");
});
if (
  localStorage.getItem("playerScore") == null &&
  localStorage.getItem("cpuScore") == null
) {
  localStorage.setItem("cpuScore", "0");
  localStorage.setItem("playerScore", "0");
}
console.log(JSON.parse(localStorage.getItem("playerScore")));
let cpuScore = JSON.parse(localStorage.getItem("cpuScore"));
let playerScore = JSON.parse(localStorage.getItem("playerScore"));
function update(playerScore, cpuScore) {
  cpu.textContent = cpuScore;
  player.textContent = playerScore;
}
update(playerScore, cpuScore);
stone.addEventListener("click", stoneListener);
scissor.addEventListener("click", scissorListener);
paper.addEventListener("click", paperListener);

function stoneListener(e) {
  const cpuOption = cpuSelection(options);
  const playerOption = "stone";
  const res = findWinner(cpuOption, playerOption);
  updateScore(res);
}

function paperListener(e) {
  const cpuOption = cpuSelection(options);
  const playerOption = "paper";
  const res = findWinner(cpuOption, playerOption);
  updateScore(res);
}

function scissorListener(e) {
  const cpuOption = cpuSelection(options);
  const playerOption = "scissor";
  const res = findWinner(cpuOption, playerOption);
  updateScore(res);
}

const options = ["stone", "scissor", "paper"];
function cpuSelection(options) {
  Math.random();
  const opt = Math.trunc((Math.random() * 10) / 4);
  return options[opt];
}
function findWinner(cpuOption, playerOption) {
  if (playerOption === "stone" && cpuOption === "scissor") return "won";
  else if (playerOption === "scissor" && cpuOption === "paper") {
    next.classList.remove("hidden");
    return "won";
  } else if (playerOption === "paper" && cpuOption === "stone") {
    next.classList.remove("hidden");
    return "won";
  } else {
    next.classList.add("hidden");
    return "lost";
  }
}
function updateScore(res) {
  if (res === "won") {
    playerScore += 1;

    localStorage.setItem("playerScore", JSON.stringify(playerScore));
    player.textContent = playerScore;
  } else {
    cpuScore += 1;
    localStorage.setItem("cpuScore", JSON.stringify(cpuScore));
    cpu.textContent = cpuScore;
  }
}
