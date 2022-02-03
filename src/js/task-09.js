function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const chacheColorEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');
const chacheColorBody = (event) => {
  event.preventDefault();
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  spanColorEl.textContent = randomColor;
}
chacheColorEl.addEventListener('click', chacheColorBody);