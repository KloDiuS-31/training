const quizData = [
    {
        question: "La longueur d'onde de la lumière visible varie de :",
        answers: {
            a: "380 um à 750 ^m",
            b: "380nm à 750nm",
            c: "380 pm à 750 pm"
        },
        correct: "b"
    },
    {
        question: "Pour la théorie quantique, lorsqu'un électron change d'orbite en se rapprochant du noyau, il y a :",
        answers: {
            a: "réception de photon",
            b: "émission de photon",
            c: "émission et/ou réception de photon"
        },
        correct: "b"
    },
    {
        question: "Pour qu'un matériau vert fluorescent restitue sa couleur, il faut l'exposer à une source lumineuse :",
        answers: {
            a: "rouge",
            b: "orange",
            c: "violette"
        },
        correct: "c"
    }
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    const output = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = document.querySelectorAll('.answers');
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `${numCorrect} sur ${quizData.length} correct`;
    document.getElementById('retry').style.display = 'block';
}

document.getElementById('submit').addEventListener('click', showResults);
document.getElementById('retry').addEventListener('click', () => {
    document.getElementById('results').innerHTML = '';
    document.getElementById('retry').style.display = 'none';
    buildQuiz();
});

buildQuiz();
