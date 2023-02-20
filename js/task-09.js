function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");
const colorRef = document.querySelector(".color");
changeColorBtnRef.addEventListener("click", onChangColorBtnClick);

function onChangColorBtnClick() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorRef.textContent = getRandomHexColor();
}
