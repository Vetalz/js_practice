const amount = document.querySelector('#amount');
const guests = document.querySelector('#guest');
const quality = document.querySelector('#quality');
const calc = document.querySelector('#calculate');
const tipAmount = document.querySelector('#tip-amount');

calc.addEventListener('click', calculate);

function calculate() {
    const tip = ((amount.value * quality.value) / guests.value).toFixed(2);
    amount.value = '';
    guests.value = '';
    quality.value = '';
    if (tip === 'NaN') {
        tipAmount.textContent = 'Tip $0 each';
    } else {
        tipAmount.textContent = `Tip $ ${tip} each`;
    }
    showTipAmount(); 
}

function showTipAmount() {
    tipAmount.classList.add('show');
    setTimeout(() => {
        tipAmount.classList.remove('show')
    }, 3200);
}
