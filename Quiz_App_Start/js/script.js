const startButton = document.querySelector('.start_btn');
const infoBox = document.querySelector('.info_box');
const exitButton     = document.querySelector('.exit_quiz');
const continueButton = document.querySelector('#continue_btn');
const quizBox        = document.querySelector('.quiz_box');
const timerSec       = document.querySelector('.timer_sec');
const queText        = document.querySelector('.que_text');
const optionsList    = document.querySelector('.option_list');
const totaleQue      = document.querySelector('.total_que');
const nextButton     = document.querySelector('.next_btn')
const resultBox      = document.querySelector('.result_box')
const scoreText      = document.querySelector('.score_text')
const restartButton  = document.querySelector('.restart')

const timeline       = document.querySelector('.time_line');

let timer = 15;
let activeQuestion = 0;
let points = 0;
// timeline.style.width += '6.666666667%'

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
    loadQuestions(activeQuestion);
});

nextButton.addEventListener('click' , () => {
    nextButton.classList.remove('show')

    if(activeQuestion == 4){
        nextButton.textContent = 'Finish'
    }


    if(activeQuestion < questions.length -1){
        activeQuestion++;
        timer = 15
        loadQuestions(activeQuestion)
    }else {
        quizBox.classList.remove('activeQuiz');
        resultBox.classList.add('activeResult')
        scoreText.textContent = points + '/' + questions.length 
    }
})
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
    optionsList.innerHTML = '';

    for(let i = 0 ; i < allOptions.length; i++){
        optionsList.innerHTML += `
        <div class="option" onclick="checkAnswer(${question}, ${i}, this)">
            <span>${allOptions[i]}</span>
        </div>
    `
}
    totaleQue.textContent = questions[question].numb + '/' + questions.length + '  Question'
}



function checkAnswer(q, o , opt){
    nextButton.classList.add('show')

    for(let i = 0; i < questions[q].options.length ; i++ ){
        optionsList.children[i].classList.add('disabled')
        if(questions[q].options[i] == questions[q].answer){
            optionsList.children[i].classList.add('correct')
        }
    }

    if(questions[q].answer == questions[q].options[o]){
        opt.classList.add('correct');
        points++
    }else{
        opt.classList.add('incorrect');
        const options = optionsList.querySelectorAll('.option');
    }
}
