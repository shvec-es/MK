const list = document.querySelector(".characteristics__list");
const items = document.querySelectorAll(".characteristics__item");

items.forEach((item) => {
  const itemBtn = item.querySelector(".characteristics__title");
  const itemDiv = item.querySelector(".characteristics__description");

  item.addEventListener("click", () => {
    if (itemDiv.classList.contains("open")) {
      itemDiv.style.height = "";
    } else {
      itemDiv.style.height = itemDiv.scrollHeight + "px";
    }

    itemDiv.classList.toggle("open");
    itemBtn.classList.toggle("active");
  });
});
