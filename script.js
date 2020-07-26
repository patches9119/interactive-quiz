const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerButtonsEl = document.getElementById('answer-buttons');
const scoreEl = document.getElementById('score-container');

let shuffledQuestions, currentQuestionIndex;

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
    }

]

startButton.addEventListener('click', startGame);

function startGame() {
    console.log("started");
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove('hide');
    scoreEl.classList.remove('hide');
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
        button.addEventListener('click', selectAnswer());
        answerButtonsEl.appendChild(button);
    })

};

function resetQuestions() {
    nextButton.classList.add('hide');
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }

};

function selectAnswer() {

};