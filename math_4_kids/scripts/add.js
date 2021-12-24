const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const answers = document.querySelector('#answers');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const audioWrong = document.querySelector('#audioWrong');
const audioSuccess = document.querySelector('#audioSuccess');

const max = 21;
let answer = 0;
wrongAnswer1 = 0;
wrongAnswer2 = 0;

answers.addEventListener('click', checkAnswer);
generateExpression();

function generateExpression() {
    let a = Math.floor(Math.random() * max);
    let b = Math.floor(Math.random() * max);
    let duplicate = true;

    answer = a + b;
    
    while (duplicate) {
        wrongAnswer1 = Math.floor(Math.random() * max);
        wrongAnswer2 = Math.floor(Math.random() * max);
        duplicate = checkDublicate(answer, wrongAnswer1, wrongAnswer2);
    }
    
    let answers = [answer, wrongAnswer1, wrongAnswer2];

    num1.textContent = a;
    num2.textContent = b;

    randomIndex = random(answers);
    option1.textContent = answers[randomIndex];
    answers.splice(randomIndex, 1);

    randomIndex = random(answers);
    option2.textContent = answers[randomIndex];
    answers.splice(randomIndex, 1);
    option3.textContent = answers[0];
}

function random(arr) {
    return Math.floor(Math.random() * arr.length);
}

function checkDublicate(x, y, z) {
    if (y !== z && x !== y && x !== z) {
        return false;
    } else {
        return true;
    }
}

function checkAnswer(event) {
    if (Number(event.target.textContent) === answer) {
        audioSuccess.play();
        generateExpression();
    } else {
        audioWrong.play();
    }
}