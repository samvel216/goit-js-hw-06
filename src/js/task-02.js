const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ingridientArrayEl = [];
const ingridientsListEl = document.querySelector('#ingredients');
const ingridientArrayTransform = (ingredientsArg) => {
  ingredientsArg.map(element => {
  let ingridientEl = document.createElement('li');
  ingridientEl.classList.add('item');
    ingridientEl.textContent = element;
    ingridientArrayEl.push(ingridientEl);
  })
  return ingridientArrayEl;
}
const ingridientArrayTransformBox = ingridientArrayTransform(ingredients)
ingridientsListEl.append(...ingridientArrayTransformBox);