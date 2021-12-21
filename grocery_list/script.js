const pencil = document.querySelector('#pencil');
const input = document.querySelector('#userInput');
const items = document.querySelector('#allItems');

pencil.addEventListener('click', () => {
    items.innerHTML = '';
});

input.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        let item = document.createElement('h2');
        item.textContent = '- ' + input.value;

        items.insertAdjacentElement('beforeend', item);

        input.value = '';
    }
});

items.addEventListener('click', (event) => {
    event.target.style.textDecoration = 'line-through';
})