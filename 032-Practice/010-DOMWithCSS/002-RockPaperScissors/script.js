const rockButton = document.querySelector('.js-rock-btn');
const paperButton = document.querySelector('.js-paper-btn');
const scissorsButton = document.querySelector('.js-scissors-btn');

const displayMovesElement = document.querySelector('.js-display-moves');
const displayResultElement = document.querySelector('.js-display-result')
const displayScoreElement = document.querySelector('.js-display-score');

const resetButton = document.querySelector('.js-reset-btn');


const storedScore = JSON.parse(localStorage.getItem('score'));

const score =  storedScore || {
    wins : 0,
    losses : 0,
    ties: 0
}

if(storedScore){
    displayScoreElement.innerText = `
    Score - Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

rockButton.addEventListener('click', (event) => {
    // console.log(event);
    play('rock');
});

paperButton.addEventListener('click', (event) => {
    play('paper');
});

scissorsButton.addEventListener('click', (event) => {
    play('scissors');
});

resetButton.addEventListener('click', () => {
    resetScore();
});

function play(userMove){
    let result = '';
    const computerMove = pickComputerMove();

    if(userMove === computerMove){
        result = 'Tie';
        score.ties += 1;
    }else{
        if(userMove === 'rock'){
            if(computerMove === 'paper'){
                result = 'You Lose!';
                score.losses += 1;
            }else{
                result = 'You Win!';
                score.wins += 1;
            }
        }else if(userMove === 'paper'){
            if(computerMove === 'rock'){
                result = 'You Win!';
                score.wins += 1;
            }else{
                result = 'You Lose!';
                score.losses += 1;
            }
        }else{
            if(computerMove === 'rock'){
                result = 'You Lose!';
                score.losses += 1;
            }else{
                result = 'You Win!';
                score.wins += 1;
            }
        }
    }

    localStorage.setItem('score', JSON.stringify(score));

    displayScore(userMove, computerMove, result);

    // console.log(userMove);
    // console.log(computerMove);
    // console.log(result);
}

function pickComputerMove(){

    let computerMove = '';
    const randomNum = Math.random();

    if(randomNum >= 0 && randomNum < 1/3){
        computerMove = 'rock';
    }else if(randomNum >= 1/3 && randomNum < 2/3){
        computerMove = 'paper';
    }else{
        computerMove = 'scissors';
    }

    return computerMove;
}

function displayScore(userMove, computerMove, result){

    displayMovesElement.innerHTML = ` You:
            <img src="images/${userMove}-emoji.png" class="move-img">
            Computer:
            <img src="images/${computerMove}-emoji.png" class="move-img">`;
    displayResultElement.innerText = `Result: ${result}`;
    displayScoreElement.innerText = `Score - Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.setItem('score', JSON.stringify(score));
    displayResetScore();
}

function displayResetScore(){
    displayMovesElement.innerText = '';
    displayResultElement.innerText = '';
    displayScoreElement.innerText = `Score reset successful!
    Score - Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}