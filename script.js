'use strict';
const guessMessage = document.querySelector('.guess-message');
const question = document.querySelector('.question');
const scoreDOM = document.querySelector('.score');
const numberInput = document.querySelector('.number-input');
const bntCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);


bntCheck.addEventListener('click', () =>{
    const guessingNumber = +numberInput.value;
    
    if(!guessingNumber){
        guessMessage.textContent = 'Введите какое-то число!'
    } else if (guessingNumber === secretNumber){
        guessMessage.textContent = 'Правельно!';
        document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
        question.style.width = '30rem';
        question.style.padding = '3rem 0rem';
        question.textContent = secretNumber;
    } else if (guessingNumber < secretNumber){
        if(score > 1){
            guessMessage.textContent = 'Слишком мало!'
            score--;
            scoreDOM.textContent = score; 
        }else {
            guessMessage.textContent = 'Вы проиграли! Начните сначала!';
            scoreDOM.textContent = 0;
        }
    } else if (guessingNumber > secretNumber){
        if(score > 1){
            guessMessage.textContent = 'Слишком много!'
            score--;
            scoreDOM.textContent = score; 
        }else {
            guessMessage.textContent = 'Вы проиграли! Начните сначала!';
            scoreDOM.textContent = 0;
        }
    }
    if (!score){
        guessMessage.textContent = 'Вы проиграли! Начните сначала!'
    }
});
btnAgain.addEventListener('click', () =>{
    question.textContent = '???';
    score = 20;
    scoreDOM.textContent = score;
    document.querySelector('body').style.backgroundColor ='';
    question.style.width ='';
    question.style.padding ='';
    numberInput.value = '';
})
