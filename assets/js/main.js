const sp1Button = document.querySelector('#sp1Button');
const sp2Button = document.querySelector('#sp2Button');
const resetButton = document.querySelector('#reset');
const sp1Display = document.querySelector('#sp1Display');
const sp2Display = document.querySelector('#sp2Display');
const winningScoreSelect = document.querySelector('#playto');

let sp1Score = 0;
let sp2Score = 0;
let winningScore = 10;
let isGameOver = false;

sp1Button.addEventListener('click', function() {
    if (!isGameOver) {
        sp1Score += 1;
        if (sp1Score === winningScore) {
            isGameOver = true;
            sp1Display.classList.add('winer');
            sp2Display.classList.add('loser');
            alert("CONGRATS PLAYER 1, YOU WIN!")
        }
        sp1Display.textContent = sp1Score;
    }
})

sp2Button.addEventListener('click', function() {
    if (!isGameOver) {
        sp2Score += 1;
        if (sp2Score === winningScore) {
            isGameOver = true;
            sp2Display.classList.add('winer');
            sp1Display.classList.add('loser');
            alert("CONGRATS PLAYER 2, YOU WIN!")
        }
        sp2Display.textContent = sp2Score;
    }
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    sp1Score = 0;
    sp2Score = 0;
    sp1Display.textContent = 0;
    sp2Display.textContent = 0;
    sp1Display.classList.remove('winer', 'loser');
    sp2Display.classList.remove('winer', 'loser');
}