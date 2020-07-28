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
        question: 'What is 2+2?',
        answers: [{
                text: '4',
                correct: true
            },
            {
                text: '22',
                correct: false
            },
            {
                text: '8',
                correct: false
            },
            {
                text: 'apple',
                correct: false
            }
        ]
    },
    {
        question: 'What color is a red apple?',
        answers: [{
                text: 'Red',
                correct: true
            },
            {
                text: 'Blue',
                correct: false
            },
            {
                text: 'Egg',
                correct: false
            },
            {
                text: 'Purple',
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
        question: 'What is 4 * 2?',
        answers: [{
                text: '6',
                correct: false
            },
            {
                text: '8',
                correct: true
            },
            {
                text: '24',
                correct: false
            },
            {
                text: '2',
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