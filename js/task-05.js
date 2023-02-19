const inputRef = document.querySelector("#name-input");
const outputTextRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onCurrentTextInput);

function onCurrentTextInput(e) {
  console.log(outputTextRef.textContent);
  outputTextRef.textContent = e.currentTarget.value;
  if (e.currentTarget.value === "") outputTextRef.textContent = "Anonymous";
}
