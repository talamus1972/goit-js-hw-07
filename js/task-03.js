
const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
let userName = '';
inputName.addEventListener('input', (event) => {
    userName = event.target.value;
 
   if (userName.trim() === '') {
        outputName.textContent = 'Anonymous';
    } else {
        outputName.textContent = userName.trim();
    }
});




    

