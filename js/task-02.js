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
  const itemEl = document.createElement("li");
  itemEl.textContent = name;
  itemEl.classList.add("item");
  return itemEl;
});

ingredientListEl.append(...ingredientItemsEl);
