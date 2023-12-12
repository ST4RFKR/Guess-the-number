'use strict';
const guessMessage = document.querySelector('.guess-message');
const question = document.querySelector('.question');
const scoreDOM = document.querySelector('.score');
const numberInput = document.querySelector('.number-input');
const bntCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const labelHighscore = document.querySelector('.label-highscore');

let score = 20;
let highScore = 0;

let  secretNumber = Math.trunc(Math.random() * 20) + 1;


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
        if (score > highScore) {
            highScore = score;
            labelHighscore.textContent = `Лучший результат: ${highScore}`;
        }
    }else if (guessingNumber !== secretNumber){
        if(score > 1){
            guessMessage.textContent = guessingNumber < secretNumber ?  'Слишком мало!' : 'Слишком много!';
            score--;
            scoreDOM.textContent = score; 
        }else {
            guessMessage.textContent = 'Вы проиграли! Начните сначала!';
            scoreDOM.textContent = 0;
        } 
    }
    
    // else if (guessingNumber < secretNumber){
    //     if(score > 1){
    //         guessMessage.textContent = 'Слишком мало!'
    //         score--;
    //         scoreDOM.textContent = score; 
    //     }else {
    //         guessMessage.textContent = 'Вы проиграли! Начните сначала!';
    //         scoreDOM.textContent = 0;
    //     }
    // } else if (guessingNumber > secretNumber){
    //     if(score > 1){
    //         guessMessage.textContent = 'Слишком много!'
    //         score--;
    //         scoreDOM.textContent = score; 
    //     }else {
    //         guessMessage.textContent = 'Вы проиграли! Начните сначала!';
    //         scoreDOM.textContent = 0;
    //     }
    // }
    if (!score){
        guessMessage.textContent = 'Вы проиграли! Начните сначала!'
    }
});
btnAgain.addEventListener('click', () =>{
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('body').style.backgroundColor ='';
    question.textContent = '???';
    question.style.width ='';
    question.style.padding ='';
    guessMessage.textContent = 'Начни угадывать!';
    numberInput.value = '';
    scoreDOM.textContent = score;

})
