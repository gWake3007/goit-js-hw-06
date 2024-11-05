// Number of categories

// const categories = document.querySelector("#categories");
// const liItem = categories.querySelectorAll("li.item");
// const itemLength = `Number of categories: ${liItem.length}`;
// console.log(itemLength);

const categoriesUl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesUl.children.length}`);

// All categories
// const title = document.querySelector("h2").textContent;
// console.log(`Category: ${title}`);

// title.forEach(titles => {
//     categoriesMass.push(`Category: ${titles.textContent}`)
// });

// const categoriesList = document.querySelectorAll("ul#categories .item ul");

// const categoriesMass = [];

// categoriesList.forEach(elem => {
//     categoriesMass.push(`Elements: ${elem.children.length}`)
// });
// console.log(categoriesMass.join(" "));

[...categoriesUl.children].forEach((elem) => {
  const categorisTitle = elem.querySelector("h2");
  const categoriesNumber = elem.querySelectorAll("li");
  console.log(`Category: ${categorisTitle.textContent}`);
  console.log(`Elements: ${categoriesNumber.length}`);
});

let count = 0;
const intervalId = setInterval(() => {
  console.log(count++);
}, 1000);
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
