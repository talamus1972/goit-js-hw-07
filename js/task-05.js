// Напиши скрипт, який змінює колір фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color і
//   задає це значення кольору текстовим вмістом для span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

const btnColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const bodyBackgroundMain = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = btnColor.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  bodyBackgroundMain.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
});
