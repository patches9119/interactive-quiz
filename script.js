const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerButtonsEl = document.getElementById('answer-buttons');
const scoreEl = document.getElementById('score-container');
const actualscoreEl = document.getElementById('actual-score');

let shuffledQuestions, currentQuestionIndex;
let currentScore = 0;

//questions for the quiz
const questions = [{
        question: 'What is not a function in the Math Class?',
        answers: [{
                text: 'Minus',
                correct: true
            },
            {
                text: 'Random',
                correct: false
            },
            {
                text: 'Round',
                correct: false
            },
            {
                text: 'Max',
                correct: false
            }
        ]
    },
    {
        question: 'How do you comment out a line in javascript?',
        answers: [{
                text: '//',
                correct: true
            },
            {
                text: '/clear',
                correct: false
            },
            {
                text: '/comment',
                correct: false
            },
            {
                text: '**',
                correct: false
            }
        ]
    },
    {
        question: 'Is web development fun?',
        answers: [{
                text: 'Kinda',
                correct: false
            },
            {
                text: 'YES!!!',
                correct: true
            },
            {
                text: 'Um no',
                correct: false
            },
            {
                text: 'IDK',
                correct: false
            }
        ]
    },
    {
        question: 'What filetype is a README file typically?',
        answers: [{
                text: "js",
                correct: false
            },
            {
                text: 'md',
                correct: true
            },
            {
                text: 'css',
                correct: false
            },
            {
                text: 'html',
                correct: false
            }
        ]
    }

]

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame() {
    console.log("started");
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove('hide');
    scoreEl.classList.remove('hide');
    actualscoreEl.classList.remove('hide');
    actualscoreEl.innerText = currentScore;
    setNextQuestion();
};

function setNextQuestion() {
    resetQuestions();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

};

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', selectAnswer);
        answerButtonsEl.appendChild(button);
    })

};

function resetQuestions() {
    nextButton.classList.add('hide');
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }

};

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    console.log(selectedButton);
    console.log(correct);

    if(selectedButton.dataset = correct) {
        console.log("correct answer");
        currentScore++;
    }
    
    if (shuffledQuestions.length > currentQuestionIndex+1) {
        nextButton.classList.remove('hide');
    }
    else {
        startButton.innerText = 'Finish';
        startButton.classList.remove('hide');
    }

    actualscoreEl.innerText = currentScore;
    

};