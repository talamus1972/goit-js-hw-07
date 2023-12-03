
const controlsDiv = document.querySelector('#controls');
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const inputNumber = controlsDiv.querySelector('input');
const boxesDiv = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
    const inputValue = inputNumber.value;
    
    if (inputValue < 1 || inputValue > 100) {
      return;
    }


     let size = 30;
    for (let i = 0; i < inputValue; i++) {
      const newBox = document.createElement('div');
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.width = `${size}px`;
      newBox.style.height = `${size}px`;
      newBox.style.margin = '5px';
      size += 10;
      boxesDiv.appendChild(newBox);
    }
  }

  function destroyBoxes() {
  boxesDiv.innerHTML = '';
  }

 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
