const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Hyperlinking Text Mark Language", correct: false }
        ]
    },
    {
        question: "Which language is used for styling web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "JQuery", correct: false },
            { text: "CSS", correct: true },
            { text: "XML", correct: false }
        ]
    },
    {
        question: "Which is not a JavaScript Framework?",
        answers: [
            { text: "Python Script", correct: true },
            { text: "JQuery", correct: false },
            { text: "Django", correct: true },
            { text: "NodeJS", correct: false }
        ]
    },
    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Netscape", correct: true },
            { text: "Bell Labs", correct: false },
            { text: "Sun Microsystems", correct: false },
            { text: "IBM", correct: false }
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "<script>", correct: true },
            { text: "<js>", correct: false },
            { text: "<javascript>", correct: false },
            { text: "<scripting>", correct: false }
        ]
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "/* */", correct: true },
            { text: "#", correct: false },
            { text: "<!-- -->", correct: false }
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: [
            { text: "<script src='xxx.js'>", correct: true },
            { text: "<script href='xxx.js'>", correct: false },
            { text: "<script ref='xxx.js'>", correct: false },
            { text: "<script name='xxx.js'>", correct: false }
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            { text: "alert('Hello World');", correct: true },
            { text: "msg('Hello World');", correct: false },
            { text: "msgBox('Hello World');", correct: false },
            { text: "alertBox('Hello World');", correct: false }
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: "function myFunction()", correct: true },
            { text: "function = myFunction()", correct: false },
            { text: "function:myFunction()", correct: false },
            { text: "create function myFunction()", correct: false }
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            { text: "if (i == 5)", correct: true },
            { text: "if i = 5 then", correct: false },
            { text: "if i == 5 then", correct: false },
            { text: "if i = 5", correct: false }
        ]
    },
    {
        question: "How does a WHILE loop start?",
        answers: [
            { text: "while (i <= 10)", correct: true },
            { text: "while i = 1 to 10", correct: false },
            { text: "while (i <= 10; i++)", correct: false },
            { text: "while i <= 10", correct: false }
        ]
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: [
            { text: "// This is a comment", correct: true },
            { text: "' This is a comment", correct: false },
            { text: "<!-- This is a comment -->", correct: false },
            { text: "# This is a comment", correct: false }
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            { text: "var colors = ['red', 'green', 'blue']", correct: true },
            { text: "var colors = (1:'red', 2:'green', 3:'blue')", correct: false },
            { text: "var colors = 'red', 'green', 'blue'", correct: false },
            { text: "var colors = {'red', 'green', 'blue'}", correct: false }
        ]
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        answers: [
            { text: "Math.round(7.25)", correct: true },
            { text: "round(7.25)", correct: false },
            { text: "Math.rnd(7.25)", correct: false },
            { text: "rnd(7.25)", correct: false }
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            { text: "onclick", correct: true },
            { text: "onchange", correct: false },
            { text: "onmouseover", correct: false },
            { text: "onmouseclick", correct: false }
        ]
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: [
            { text: "var carName;", correct: true },
            { text: "variable carName;", correct: false },
            { text: "v carName;", correct: false },
            { text: "var: carName;", correct: false }
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "=", correct: true },
            { text: "==", correct: false },
            { text: "===", correct: false },
            { text: "=>", correct: false }
        ]
    },
    {
        question: "What will the following code return: Boolean(10 > 9)?",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "NaN", correct: false },
            { text: "undefined", correct: false }
        ]
    },
    {
        question: "Is JavaScript case-sensitive?",
        answers: [
            { text: "Yes", correct: true },
            { text: "No", correct: false }
        ]
    }
];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = 'Next';
    resultElement.innerText = '';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];

    // Shuffle answers array to randomize order
    let shuffledAnswers = currentQuestion.answers
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    questionElement.innerText = currentQuestion.question;

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, answer.correct));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    resultElement.innerText = '';
}

function selectAnswer(button, correct) {
    if (correct) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('wrong');
    }
    Array.from(answerButtonsElement.children).forEach(btn => {
        btn.disabled = true;
        if (btn.classList.contains('correct')) {
            btn.style.backgroundColor = '#4CAF50';
        } else if (btn.classList.contains('wrong')) {
            btn.style.backgroundColor = '#f44336';
        } else {
            btn.style.backgroundColor = '#ddd';
        }
    });
    // Automatically go to next question after 1 second
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    resetState();
    questionElement.innerText = '';
    resultElement.innerHTML = `<h2>Quiz Completed!</h2><p>Your final score is <strong>${score} / ${questions.length}</strong>.</p>`;
    nextButton.innerText = 'Restart Quiz';
    nextButton.style.display = 'inline-block';
    nextButton.addEventListener('click', () => {
        startQuiz();
    }, { once: true });
}

startQuiz();
