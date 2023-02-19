const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (inputRef.value.length === +inputRef.dataset.length) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
