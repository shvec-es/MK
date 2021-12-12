const divArenas = document.querySelector(".arenas");
const randomBtn = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "Scorpion",
  hp: 50,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["arbalet", "knife"],
  attack(name) {
    console.log(name + " " + "Fight...");
  },
};

const player2 = {
  player: 2,
  name: "Sonya",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["sword", "knife"],
  attack(name) {
    console.log(name + " " + "Fight...");
  },
};

function createElement(tag, className) {
  const tagEl = document.createElement(tag);

  if (className) {
    tagEl.classList.add(className);
  }

  return tagEl;
}

function createPlayer(obj) {
  const divPlayer = createElement("div", "player" + obj.player);
  const divProgressbar = createElement("div", "progressbar");
  const divLife = createElement("div", "life");
  const divName = createElement("div", "name");
  const divCharacter = createElement("div", "character");
  const imgEl = createElement("img");

  divLife.style.width = `${obj.hp}%`;
  divName.innerText = obj.name;
  imgEl.src = obj.img;

  divProgressbar.appendChild(divLife);
  divProgressbar.appendChild(divName);
  divCharacter.appendChild(imgEl);
  divPlayer.appendChild(divProgressbar);
  divPlayer.appendChild(divCharacter);

  return divPlayer;
}

function changeHP(player) {
  const playerLife = document.querySelector(
    ".player" + player.player + " .life"
  );
  player.hp -= 20;
  playerLife.style.width = `${player.hp}%`;

  if (player.hp < 0) {
    divArenas.appendChild(playerLose(player.name));
  }
}

function playerLose(name) {
  const loseTitle = createElement("div", "loseTitle");
  loseTitle.innerText = name + " lose";

  return loseTitle;
}

randomBtn.addEventListener("click", () => {
  changeHP(player1);
  changeHP(player2);
});

divArenas.appendChild(createPlayer(player1));
divArenas.appendChild(createPlayer(player2));
