// Напиши скрипт, який змінює колір фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color і 
//   задає це значення кольору текстовим вмістом для span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btnChangeColor.addEventListener('click', () => {
  !
    
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
