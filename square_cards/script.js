const links = {
    1: 'https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT',
    2: 'https://www.youtube.com/watch?v=UGapN-hrekw&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=2',
    3: 'https://www.youtube.com/watch?v=pahO5XjnfLA&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=3',
    4: 'https://www.google.com/',
};

const container = document.querySelector('#my-cards');

container.addEventListener('click', (event) => {
    if (event.target.id && (event.target.tagName === 'I' || event.target.tagName === 'H2')) {
        console.log(event.target.tagName)
        window.open(links[event.target.id]);
    }
});