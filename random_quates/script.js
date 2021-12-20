const quotes = {
    'Dalai Lama': 'The purpose of our lives is to be happy.',
    'John Lennon': 'Life is what happens when you’re busy making other plans.',
    'Mae West': 'You only live once, but if you do it right, once is enough.',
    'Thomas A. Edison': 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
    'Albert Einstein': 'If you want to live a happy life, tie it to a goal, not to people or things.',
    'Babe Ruth': 'Never let the fear of striking out keep you from playing the game.',
    'Will Smith': 'Money and success don’t change people; they merely amplify what is already there.',
    'Steve Jobs': 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',
    'Seneca': 'Not how long, but how well you have lived is the main thing.',
    'Eleanor Roosevelt': 'If life were predictable it would cease to be life, and be without flavor.',
    'Henry Ford': 'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.',
    'Ernest Hemingway': 'In order to write about life first you must live it.'
};
let previous_author = '';

function generate(){
    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)];
    const quote = quotes[author];
    if (previous_author === author) {
        generate();
    }
    previous_author = author;
    document.querySelector('#quote').textContent = quote;
    document.querySelector('#author').textContent = author;
}