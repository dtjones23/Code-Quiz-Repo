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

// Start Quiz / Timer
// Get Questions
// Question submit
// End Quiz / Highscore