import "./Main.css";

let playerChoice = "";
let computerChoice = "";

const template = () => {
  return `
  <h2>Let's play</h2>
  <section>
  <button id="rock-btn">
    <img src="/images/Rock.png" alt="Rock icon" />
  </button>
  <button id="paper-btn">
    <img src="/images/Paper.png" alt="Paper icon" />
  </button>
  <button id="scissors-btn">
    <img src="/images/Scissors.png" alt="Scissors icon" />
  </button>
  <button id="lizard-btn">
  <img src="/images/Lizard.png" alt="Lizard icon" />
</button>
<button id="spock-btn">
<img src="/images/Spock.png" alt="Spock icon" />
</button>
  </section>
  <h3 id="result">Choose an option...</h3> 
`;
};

const btnListeners = () => {
  document.querySelector("#rock-btn").addEventListener("click", () => {
    playerChoice = "rock";
    play();
  });
  document.querySelector("#paper-btn").addEventListener("click", () => {
    playerChoice = "paper";
    play();
  });
  document.querySelector("#scissors-btn").addEventListener("click", () => {
    playerChoice = "scissors";
    play();
  });
  document.querySelector("#lizard-btn").addEventListener("click", () => {
    playerChoice = "lizard";
    play();
  });
  document.querySelector("#spock-btn").addEventListener("click", () => {
    playerChoice = "spock";
    play();
  });
};

const play = () => {
  //Vamos a recuperar por dom el h3 para modificarlo
  const result = document.querySelector("#result");
  //Creamos un array con las cinco opciones
  const options = ["rock", "paper", "scissors", "lizard", "spock"];
  //Esto genera un numero aleatorio entre el 0 y el 2 porque ha tenido como referencia la longitud de options
  const randomChoice = Math.floor(Math.random() * options.length);
  //Le asignamos la elección aleatoria al ordenador
  computerChoice = options[randomChoice];

  //Comprobar los resultados y pintarlos en el h3 de results
  if (playerChoice === "scissors" && computerChoice === "paper") {
    result.innerHTML = `${playerChoice} vs ${computerChoice}: You win!`;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    result.innerHTML = `${playerChoice} vs ${computerChoice}: You win!`;
  } else if (playerChoice === "rock" && computerChoice === "lizard") {
    result.innerHTML = `${playerChoice} vs ${computerChoice}: You win!`;
  } else if (playerChoice === "lizard" && computerChoice === "spock") {
    result.innerHTML = `${playerChoice} vs ${computerChoice}: You win!`;
  } else if (playerChoice === "spock" && computerChoice === "scissors") {
    result.innerHTML = `${playerChoice} vs ${computerChoice}: You win!`;
  } else if (playerChoice === "scissors" && computerChoice === "lizard") {
    result.innerHTML = `${playerChoice} vs ${computerChoice}: You win!`;
  } else if (playerChoice === "lizard" && computerChoice === "paper") {
    result.innerHTML = `${playerChoice} vs ${computerChoice}: You win!`;
  } else if (playerChoice === "paper" && computerChoice === "spock") {
    result.innerHTML = `${playerChoice} vs ${computerChoice}: You win!`;
  } else if (playerChoice === "Spock" && computerChoice === "rock") {
    result.innerHTML = `${playerChoice} vs ${computerChoice}: You win!`;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    result.innerHTML = `${playerChoice} vs ${computerChoice}: You win!`;
  } else if (playerChoice === computerChoice) {
    result.innerHTML = `${playerChoice} vs ${computerChoice}: Draw!`;
  } else {
    result.innerHTML = `${playerChoice} vs ${computerChoice}: You lose!`;
  }
};

const Main = () => {
  document.querySelector("main").innerHTML = template();
  //Le añadimos la funcionalidad a los botones
  btnListeners();
};

export default Main;
