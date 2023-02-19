const refs = {
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

const onDecrementButtonClick = () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
};

const onIncrementButtonClick = () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
};

refs.decrement.addEventListener("click", onDecrementButtonClick);
refs.increment.addEventListener("click", onIncrementButtonClick);
