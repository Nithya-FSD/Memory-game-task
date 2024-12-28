var isFirstCard = true;
var firstCard = null;
var secondCard = null;

function onCardClick(element) {
    if (isFirstCard == true) {
        element.classList.add('flip');
        firstCard = element;
        isFirstCard = false;
    } else {
        secondCard = element;
        element.classList.add('flip');
        
        if (firstCard.dataset.cardname === secondCard.dataset.cardname) {
            firstCard.style.pointerEvents = "none";
            secondCard.style.pointerEvents = "none";
            isFirstCard = true;
            firstCard = null;
            secondCard = null;
        } else {
            isFirstCard = true;
            setTimeout(function() {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                firstCard = null;
                secondCard = null;
            }, 1000);
        }
    }
}

function shuffle() {
    var allCards = document.querySelectorAll('.memory-card');
    allCards.forEach(function(card) {
        var randPos = Math.floor(Math.random() * 12);
        card.style.order = randPos;
    });
}

function restartGame() {
    var allCards = document.querySelectorAll('.memory-card');
    allCards.forEach(function(card) {
        card.classList.remove('flip');
        card.style.pointerEvents = "auto";
    });
    isFirstCard = true;
    firstCard = null;
    secondCard = null;
    
    shuffle();
}

var myBtn = document.getElementById("restart-btn");
myBtn.addEventListener("click", restartGame);

document.addEventListener("DOMContentLoaded", function() {
    shuffle();
});
