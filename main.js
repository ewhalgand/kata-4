const BURGER_CONTAINER = document.querySelector("#burger-container");
const MENU = document.querySelector("#menu");

BURGER_CONTAINER.addEventListener("click", () => {
  BURGER_CONTAINER.classList.toggle("active");
  MENU.classList.toggle("active");
});
