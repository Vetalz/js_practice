const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const todoItems = document.querySelector('#to-do-items');

input.addEventListener('keydown', addItem);
submit.addEventListener('click', addItem);

function addItem(event) {
    if ((event.type === 'keydown' && event.key === 'Enter') || event.type === 'click') {
        const divParent = document.createElement('div');
        const divChild = document.createElement('div');
        const checkIcon = document.createElement('i');
        const trashIcon = document.createElement('i');
        const item = document.createElement('p');

        divParent.classList.add('item');
        checkIcon.classList.add('fas', 'fa-check-square');
        trashIcon.classList.add('fas', 'fa-trash', 'trash-icon');

        item.textContent = input.value;
        input.value = '';

        divChild.append(checkIcon, trashIcon);
        divParent.append(item, divChild);
        todoItems.append(divParent);

        checkIcon.addEventListener('click', isDone);
        divParent.addEventListener('click', itemDel);
    }
}

function isDone() {
    this.classList.toggle('done');
}

function itemDel(event) {
    if (event.target.classList.contains('fa-trash')) {
        this.remove();
    }
}
