function calculateTime() {
    const date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.querySelector('#day').textContent = dayNames[dayNumber];
    document.querySelector('#hour').textContent = hour;
    document.querySelector('#minute').textContent = minute;
    separators = document.querySelectorAll('.separator');

    separators.forEach((item) => {
        item.classList.toggle('active');   
    });

    setTimeout(calculateTime, 1000);
}

window.addEventListener('load', calculateTime);
