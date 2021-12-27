const input = document.querySelector('#input');
const grid = document.querySelector('.grid');
const search = document.querySelector('#load-img');
const clientId = 'INJfp0Pn3IwoEDm-GdnloYp8P25xPcHO0w0ol9vjM-I';

input.addEventListener('keydown', loadImage);
search.addEventListener('click', loadImage);

async function getImage() {
    const url = `https://api.unsplash.com/search/photos?query=${input.value}&per_page=12&client_id=${clientId}`;
    const response = await fetch(url);
    const data = await response.json();
    
    for(let i of data.results) {
        console.log(i);
        let image = document.createElement('div');
        image.className = 'img';
        image.style.backgroundImage = `url(${i.urls.small})`;
        image.addEventListener('click', () => {
            window.open(i.urls.full, '_blank');
        });

        grid.append(image);
    }
}

function removeGrid() {
    grid.innerHTML = '';
}

function loadImage(event) {
    if ((event.type === 'keydown' && event.key === 'Enter') || event.type === 'click') {
        removeGrid();
        getImage();
    }
}





