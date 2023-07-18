import "./Header.css";

const template = () => {
  return `
  <h1>Rock-Paper-Scissors-Lizard-Spock</h1>
  <h3><span>Sheldon himself explained it like this:<br>
  "Scissors cuts paper, paper covers stone, stone crushes lizard, <br> lizard poisons Spock, Spock breaks scissors, scissors decapitates lizard, <br> lizard devours paper, paper overrules Spock, Spock vaporizes stone,<br>
  and as always, rock crushes scissors".</span>
  </h3>
  <section>
  <figure>
  <img src="/images/Game.jpg" alt="Game imagen"/>
  </figure>
  </section>
  `;
};

const Header = () => {
  document.querySelector("header").innerHTML = template();
};

export default Header;
