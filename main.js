const player1 = {
  name: "Scorpion",
  hp: 50,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["arbalet", "knife"],
  attack() {
    console.log(this.name + " " + "Fight...");
  },
};

const player2 = {
  name: "Sonya",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["sword", "knife"],
  attack() {
    console.log(this.name + " " + "Fight...");
  },
};

const divArenas = document.querySelector(".arenas");

function createPlayer(player, obj) {
  const divPlayer1 = document.createElement("div");
  divPlayer1.classList.add(player);
  divArenas.appendChild(divPlayer1);

  const divProgressbar = document.createElement("div");
  divProgressbar.classList.add("progressbar");
  divPlayer1.appendChild(divProgressbar);
  const divLife = document.createElement("div");
  divLife.classList.add("life");
  divLife.style.width = `${obj.hp}%`;
  divProgressbar.appendChild(divLife);
  const divName = document.createElement("div");
  divName.classList.add("name");
  divName.innerText = obj.name;
  divProgressbar.appendChild(divName);

  const divCharacter = document.createElement("div");
  divCharacter.classList.add("character");
  divPlayer1.appendChild(divCharacter);
  const imgEl = document.createElement("img");
  imgEl.src = obj.img;
  divCharacter.appendChild(imgEl);
}

createPlayer("player1", player1);
createPlayer("player2", player2);
