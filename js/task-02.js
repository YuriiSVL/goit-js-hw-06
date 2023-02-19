const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientListEl = document.querySelector("#ingredients");
const ingredientItemsEl = ingredients.map((name) => {
  const liEl = document.createElement("li");
  liEl.textContent = name;
  liEl.classList.add("item");
  return liEl;
});

ingredientListEl.append(...ingredientItemsEl);
