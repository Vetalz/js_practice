const btns = document.querySelectorAll('.btn');
const input = document.querySelector('#userInput');
const btnEqual = document.querySelector('.btnEqual');
const btnErase = document.querySelector('.btnErase');

let expression = '';
let operators = '+-*/';

btns.forEach((item) => {
    item.addEventListener('click', () => {
        if (expression.length === 0 && 1 + operators.indexOf(item.textContent)) {
            expression += `0${item.textContent}`;
            input.value = expression;
        } else {
            expression += item.textContent;
            input.value = expression;
        }
    });
});

btnEqual.addEventListener('click', () => {
    try {
        input.value = eval(expression);
        expression = '';
    } catch (e) {
        input.value = 'Invalid expression';
        input.style.color = 'red';
    }
});

btnErase.addEventListener('click', () => {
    expression = '';
    input.value = expression;
    input.style.color = 'black';
});