const player1 = {
  name: "Scorpion",
  hp: 100,
  img: "",
  weapon: ["arbalet", "knife"],
  attack() {
    console.log("Scorpion " + "Fight...");
  },
};

const player2 = {
  name: "Sonya",
  hp: 100,
  img: "",
  weapon: ["sword", "knife"],
  attack() {
    console.log("Sonya " + "Fight...");
  },
};

function createPlayer(player, obj) {
  const divArenas = document.querySelector(".arenas");

  const divPlayer1 = document.createElement("div");
  divPlayer1.classList.add(player);
  divArenas.appendChild(divPlayer1);

  const divProgressbar = document.createElement("div");
  divProgressbar.classList.add("progressbar");
  divPlayer1.appendChild(divProgressbar);
  const divLife = document.createElement("div");
  divLife.classList.add("life");
  divLife.style.width = "100%";
  divProgressbar.appendChild(divLife);
  const divName = document.createElement("div");
  divName.classList.add("name");
  divName.innerText = obj.name;
  divProgressbar.appendChild(divName);

  const divCharacter = document.createElement("div");
  divCharacter.classList.add("character");
  divPlayer1.appendChild(divCharacter);
  const imgEl = document.createElement("img");
  imgEl.src = `http://reactmarathon-api.herokuapp.com/assets/${obj.name.toLowerCase()}.gif`;
  divCharacter.appendChild(imgEl);
}

createPlayer("player1", player1);
createPlayer("player2", player2);
