const btnOpenModal = document.querySelector(".card-details__button_delivery");
const cardTitle = document.querySelector(".card-details__title");

const modal = document.querySelector(".modal");
const modalTitle = modal.querySelector(".modal__title");
const btnCloseModal = modal.querySelector(".modal__close");
const form = modal.querySelector("form");

btnOpenModal.addEventListener("click", () => {
  modal.style.display = "flex";
  modalTitle.textContent = cardTitle.textContent;
});

btnCloseModal.addEventListener("click", () => {
  modal.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataForSend = {};

  const labels = modal.querySelectorAll(".modal__label");
  labels.forEach((label) => {
    const span = label.querySelector("span");
    const input = label.querySelector("input");

    dataForSend[span.textContent] = input.value;
    if (input.value === "") {
      alert(`Заполните поле "${span.textContent}"!`);
      return;
    }
  });

  if (Object.values(dataForSend).every((value) => value !== "")) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(dataForSend),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => alert("Отправлено"));
  } else {
    alert("Заполните все поля формы для отправки!");
  }

  form.reset();
  modal.style.display = "none";
});
