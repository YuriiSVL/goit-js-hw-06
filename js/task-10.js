function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controlsContainer: document.querySelector(".controls"),
  numberInput: document.querySelector("input[type='number']"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = refs.numberInput.value;
  const divs = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    divs.push(div);
  }

  refs.boxesContainer.append(...divs);
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
}
