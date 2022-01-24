const tabs = document.querySelectorAll(".card-detail__change");
const tabName = document.querySelector(".card-details__title");
const tabPrice = document.querySelector(".card-details__price");
const tabImage = document.querySelector(".card__image_item");
const title = document.querySelector("head > title");

const tabsOptions = [
  {
    name: "Graphite",
    memory: 128,
    price: 60000,
    image: "../img/iPhone-graphite.webp",
  },
  {
    name: "Silver",
    memory: 256,
    price: 65000,
    image: "../img/iPhone-silver.webp",
  },
  {
    name: "Sierra Blue",
    memory: 512,
    price: 70000,
    image: "../img/iPhone-sierra_blue.webp",
  },
];

const changeDescription = (index) => {
  tabName.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
  tabPrice.textContent = `${tabsOptions[index].price}₽`;
  tabImage.setAttribute("src", `${tabsOptions[index].image}`);
  title.textContent = `iPhone ${tabsOptions[index].name}`;
};

const changeActiveTab = (indexTab) => {
  tabs.forEach((tab, idx) => {
    tab.classList.remove("active");

    if (idx === indexTab) {
      tab.classList.add("active");
    }
  });

  changeDescription(indexTab);
};

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    changeActiveTab(index);
  });
});

changeDescription(0);
