function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  numberInput: document.querySelector("input[type='number']"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = refs.numberInput.value;
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  refs.boxesContainer.append(...boxes);
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
}
