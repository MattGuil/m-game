const body = document.querySelector('body');
const scoreDisplayed = document.querySelector('#score p:last-child');
const highScoreDisplayed = document.querySelector('#highScore p:last-child');
const aDisplayed = document.querySelector('#a');
const bDisplayed = document.querySelector('#b');
const playerProposition = document.querySelector('#result');

// Scores
score = 0;
highScore = 0;
scoreDisplayed.textContent = score;
highScoreDisplayed.textContent = highScore;

// Calcul
let a, b, result;

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateCalcul() {
    a = getRandomInt(10);
    b = getRandomInt(10);
    result = a * b;
    aDisplayed.textContent = a;
    bDisplayed.textContent = b;
}

// Events
document.addEventListener('keydown', (event) => {
    if(event.code == 'Enter') {
        console.log("a = " + a + "\nb = " + b + "\nresult = " + playerProposition.value);
        if(playerProposition.value == result) {
            body.classList.add('good');
            setTimeout(function() {
                body.classList.remove('good');
            }, 1000);
            score += 10;
            scoreDisplayed.textContent = score;
            if(score > highScore) {
                highScore = score;
                highScoreDisplayed.textContent = highScore;
            }
        } else {
            body.classList.add('bad');
            setTimeout(function() {
                body.classList.remove('bad');
            }, 1000);
            score -= 10;
            scoreDisplayed.textContent = score;
        }
        playerProposition.value = '';
        generateCalcul();
    }
});

generateCalcul();