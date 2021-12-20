function changeColor() {
    let hexNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor1 = '';
    let hexColor2 = '';
    let deg = 0;
    for (let i = 0; i < 6; i++) {
        hexColor1 += hexNumbers[randomIndex(hexNumbers.length)];
        hexColor2 += hexNumbers[randomIndex(hexNumbers.length)];
    }
    deg = randomIndex(361);
    document.querySelector('#hex-code').innerText = `[${deg}deg, #${hexColor1}, #${hexColor2}]`;
    console.log(`linear-gradient (${deg}deg, #${hexColor1}, #${hexColor2})`);
    document.querySelector('body').style.background = `linear-gradient(${deg}deg, #${hexColor1}, #${hexColor2})`;
}

function randomIndex(base){
    let i = Math.floor(Math.random() * base);
    return i;
}