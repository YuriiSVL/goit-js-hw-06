const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", onInputTextInput);

function onInputTextInput() {
  textRef.style.fontSize = `${inputRef.value}px`;
}
