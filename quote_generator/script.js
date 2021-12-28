const container = document.querySelector('#typedtext');

const url = "https://api.quotable.io/random";

document.addEventListener('DOMContentLoaded', printQuote);

async function getQuote() {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
        return data.content;
    } else {
        return 'An error occurred';
    }
}

async function printQuote() {
    const quote = await getQuote();
    let text = '';
    let sleep = 500;

    for (let i of quote) {
        setTimeout(() => {
            text += i
            container.innerHTML = text + '<span>\u25AE</span>';
            if (container.textContent.length - 1 === quote.length) {
                setTimeout(printQuote, 3000);
            }
        }, sleep);
        sleep += 100;
    }
}
