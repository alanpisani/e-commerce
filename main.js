let minusBtn = document.querySelector('.input__minus');
let userInput = document.querySelector('.input__number');
let plusBtn = document.querySelector('.input__plus');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    console.log(userInputNumber);
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if (userInputNumber <= 0){
        
        userInputNumber = 0;
    }
    console.log(userInputNumber);
});