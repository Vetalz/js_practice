const newCard = document.querySelector('#new-card');
const delCards = document.querySelector('#del-cards');
const inputQuestion = document.querySelector('#question');
const inputAnswer = document.querySelector('#answer');
const saveCard = document.querySelector('#save');
const box = document.querySelector('#create-box');
const closeBox = document.querySelector('#close');
const container = document.querySelector('#flashcards');
let arrayStorage = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

newCard.addEventListener('click', showBox);
closeBox.addEventListener('click', hideBox);
saveCard.addEventListener('click', addStorage);
delCards.addEventListener('click', removeCards);

arrayStorage.forEach((elm) => {
    addCard(elm);
});

function showBox() {
    box.style.display = 'block';
}

function hideBox() {
    box.style.display = 'none';
}

function addStorage() {
    const card = {
        question: inputQuestion.value,
        answer: inputAnswer.value, 
    };
    arrayStorage.push(card);
    localStorage.setItem('items', JSON.stringify(arrayStorage));
    addCard(card);

    inputQuestion.value = '';
    inputAnswer.value = '';
}

function addCard(card) {
    const divCard = document.createElement('div');
    const elemQuestion = document.createElement('h2');
    const elemAnswer = document.createElement('h2');

    divCard.classList.add('flashcard');
    elemQuestion.setAttribute('style', 'border-top:1px solid red; padding:15px; margin-top:30px');
    elemAnswer.setAttribute('style', 'text-align:center; color:red');
    elemAnswer.classList.add('hide');
    
    elemQuestion.textContent = card.question;
    elemAnswer.textContent = card.answer;
    
    divCard.append(elemQuestion, elemAnswer);
    container.append(divCard);

    divCard.addEventListener('click', () => elemAnswer.classList.toggle('hide'));
}

function removeCards() {
    container.innerHTML = '';
    localStorage.clear();
}