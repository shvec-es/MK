const gallery = document.querySelector(".cross-sell__list");
const buttonAdd = document.querySelector(".cross-sell__add");

let quantity = 4;
let count = 1;

const renderGallery = (data) => {
  gallery.innerHTML = "";

  data.forEach(({ name, photo, price }) => {
    gallery.insertAdjacentHTML(
      "beforeend",
      `
    <li>
              <article class="cross-sell__item">
                <img
                  class="cross-sell__image"
                  src="./${photo}"
                  alt="${name}"
                />
                <h3 class="cross-sell__title">
                  ${name}
                </h3>
                <p class="cross-sell__price">${price}₽</p>
                <button
                  type="button"
                  class="button button_buy cross-sell__button"
                >
                  Купить
                </button>
              </article>
            </li>
    `
    );
  });
};

const addToGallery = (data) => {
  let total = quantity * count;

  renderGallery(data.slice(0, total));

  if (data.length > total) {
    count += 1;
  } else {
    buttonAdd.style.display = "none";
  }
};

const getData = () => {
  fetch("MK/cross-sell-dbase/dbase.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Not Found");
      }
    })
    .then((data) => addToGallery(data))
    .catch((error) => console.log(error));
};

buttonAdd.addEventListener("click", getData);

getData();
