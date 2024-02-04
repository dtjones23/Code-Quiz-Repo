// Quiz variables
const questionsEl = document.getElementById('questions');
const timerEl = document.getElementById('time');
const optionEl = document.getElementById('options');
const submitBtn = document.getElementById('submit');
const startBtn = document.getElementById('start');
const initialsEl = document.getElementById('initials');
const feedbackEl = document.getElementById('feedback');

// Quiz questions
const quizQuestions = [
    {
        question: "Commonly used data types DO NOT include: ",
        answer:
            [
                { text: "Strings", isCorrect: false },
                { text: "Boolean", isCorrect: false },
                { text: "alert", isCorrect: true },
                { text: "Numbers", isCorrect: false },
            ]

    },
    {
        question: "The condition in an if/else statement is enclosed with _____. ",
        answer:
            [
                { text: "quotes", isCorrect: false },
                { text: "curly brackets", isCorrect: true },
                { text: "parenthesis", isCorrect: false },
                { text: "square brackets", isCorrect: false },
            ]

    },
    {
        question: "Arrays in JavaScript can be used to store_____. ",
        answer:
            [
                { text: "numbers and strings", isCorrect: false },
                { text: "other arrays", isCorrect: false },
                { text: "booleans", isCorrect: false },
                { text: "all of the above", isCorrect: true },
            ]

    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answer:
            [
                { text: "commas", isCorrect: false },
                { text: "curly brackets", isCorrect: false },
                { text: "quotes", isCorrect: true },
                { text: "parenthesis", isCorrect: false },
            ]
    },
];

let timer;
let currentQuestionIndex = 0;
let score = 0;

// Quiz timer
function startTimer() {
    timer = 30;
    const timerEl = document.getElementById('time');
    timerEl.textContent = timer;

    const timerInterval = setInterval(function () {
        timer--;
        timerEl.textContent = timer;
        if (timer <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// Start quiz
function startQuiz() {
    document.getElementById('start-screen').classList.add('hide');
    document.getElementById('questions').classList.remove('hide');
    startTimer();
    getQuestions();
}

// Get questions
function getQuestions() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionTitle = document.getElementById('question-title');
    const optionsContainer = document.getElementById('options');

    questionTitle.textContent = currentQuestion.question;

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Insert options
    currentQuestion.answer.forEach((option) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option.text;

        // Add event listener for option click
        optionButton.addEventListener('click', () => {
            handleAnswer(option.isCorrect);
        });

        optionsContainer.appendChild(optionButton);
    });
}

// Handle answer 
function handleAnswer(isCorrect) {
    if (isCorrect) {
        score++;
        document.getElementById('feedback').textContent = "Correct!";
    } else {
        timer -= 5; // Penalty for wrong answer
        document.getElementById('feedback').textContent = "Wrong!";
    }

    // Display the feedback for a short period and then clear it
    setTimeout(() => {
        document.getElementById('feedback').textContent = "";
    }, 1000);

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        getQuestions();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById('questions').classList.add('hide');
    const endScreen = document.getElementById('end-screen');
    endScreen.classList.remove('hide');
  
    const finalScoreElement = document.getElementById('final-score');
    finalScoreElement.textContent = `Your final score is ${score}.`;
  
    // Display highscores on the end screen
    displayHighscores();
  }

function submitScore() {
    const initialsInput = document.getElementById('initials');
    const initials = initialsInput.value.trim();

    if (initials !== '') {
        const highscore = {
            initials: initials,
            score: score
        };

        // Retrieve existing highscores from local storage
        const existingHighscores = JSON.parse(localStorage.getItem('highscores')) || [];

        // Add the new highscore to the list
        existingHighscores.push(highscore);

        // Save the updated highscores back to local storage
        localStorage.setItem('highscores', JSON.stringify(existingHighscores));

        // Redirect to the start page
        window.location.href = 'index.html';
    }
}

// Save score
document.getElementById('start').addEventListener('click', startQuiz);
document.getElementById('submit').addEventListener('click', submitScore);