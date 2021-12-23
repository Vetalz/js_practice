const buttonCreate = document.querySelector('#button-create');
const container = document.querySelector('#sticky-box');
const createNote = document.querySelector('#create-note');
const textNote = document.querySelector('#note-text');
const checkIcon = document.querySelector('#check-icon');
const closeIcon = document.querySelector('#close-icon');

const colors = ['#c2ff3d', '#ff3de8', '#3dc2ff', '#04e022', '#bc83e6', '#ebb328'];
const rotate = ['rotate(3deg)', 'rotate(1deg)', 'rotate(-1deg)', 'rotate(-3deg)', 'rotate(-5deg)', 'rotate(-10deg)'];
const margins = ['-5px', '1px', '5px', '10px', '15px', '20px'];

buttonCreate.addEventListener('click', showNote);
closeIcon.addEventListener('click', showNote);
checkIcon.addEventListener('click', create);

function showNote() {
    createNote.classList.toggle('hide');
}

function create() {
    const block = document.createElement('div');
    const text = document.createElement('p');

    text.textContent = textNote.value;
    text.classList.add('note');
    text.style.background = random(colors);
    text.style.margin = random(margins);
    text.style.transform = random(rotate);

    block.append(text);
    container.append(block);

    textNote.value = '';

    block.addEventListener('mouseenter', () => {
        block.style.transform = 'scale(1.1)';
    })

    block.addEventListener('mouseleave', () => {
        block.style.transform = 'scale(1)';
    })

    block.addEventListener('dblclick', () => {
        block.remove();
    })
}

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}