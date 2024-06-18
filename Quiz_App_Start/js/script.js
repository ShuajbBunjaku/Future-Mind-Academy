const startButton = document.querySelector('.start_btn')
const infoBox = document.querySelector('.info_box')
const exitButton     = document.querySelector('.exit_quiz');
const continueButton = document.querySelector('#continue_btn');
const quizBox        = document.querySelector('.quiz_box');
const timerSec       = document.querySelector('.timer_sec');
const queText        = document.querySelector('.que_text');
const optionsList    = document.querySelector('.option_list');
const totaleQue      = document.querySelector('.total_que');

const timeline       = document.querySelector('.time_line');

let timer = 15;

startButton.addEventListener('click', () =>{
    infoBox.classList.add('activeInfo')
})
exitButton.addEventListener('click', () => {
    infoBox.classList.remove('activeInfo')
})
continueButton.addEventListener('click', () => {
    infoBox.classList.remove('activeInfo')
    quizBox.classList.add('activeQuiz')
    startQuiz();
    loadQuestions(0);
});
function startQuiz(){
    let timeCout = setInterval(() => {
        if(timer > 0){
            timer--; 
        }else {
            clearInterval(timeCout)
        }
        timerSec.textContent = timer
    },1000)
}

function loadQuestions(question){
    let allOptions = questions[question].options;

    queText.textContent = questions[question].question;

    for(let i = 0 ; i < allOptions.length; i++){
        optionsList.innerHTML += `
        <div class="option">
            <span>${allOptions[i]}</span>
        </div>
    `

    
    }
    totaleQue.textContent = questions[question].numb + '/' + questions.length + '  Question'
    
}

// timeline.style.width += '6.666666667%'
