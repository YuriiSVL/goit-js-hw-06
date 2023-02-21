const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener("input", onInputTextInput);

function onInputTextInput() {
  textRef.style.fontSize = `${inputRef.value}px`;
}

console.log(inputRef.value);
