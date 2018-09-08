const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
    this.classList.add('flip');
    if (!hasFlippedCard) {
        // the first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // the second click 
        hasFlippedCard = false;
        secondCard = this;

    }
}
cards.forEach(card => card.addEventListener('click', flipCard));