const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector("#ingredients");

const createItemList = ingredients.map(elem => {
  const listItem = document.createElement("li");
  listItem.textContent = elem;
  listItem.classList.add("item");

 return listItem;
});

ulIngredients.append(...createItemList);