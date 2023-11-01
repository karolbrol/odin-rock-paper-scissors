const MAX_ROUNDS = 5;

//Get choice from computer
function getComputerChoice() {
    let moves = ['Rock', 'Paper', 'Scissors']
    //Get random array index from range 0...2
    let choice = Math.floor(Math.random() * 3)
    return moves[choice]
}

function playARound(playerChoice, computerChoice) {
    //Check if match is not over
    const roundCounter = document.querySelector('#round-count');
    if (roundCounter.textContent === 'FIN') {
        resetGame();
    }

    //Return 1 - player won, 2 - computer won, 0 - tie
    let result = whoWonRound(playerChoice, computerChoice);

    //Write result to display
    updateDisplay(playerChoice, computerChoice, result);

    updateScore(result);

    //Update round count
    let roundCount = +((roundCounter.textContent.split('/'))[0])
    if (roundCount === MAX_ROUNDS) {
        matchEnds()
    }
    else {
        roundCount++;
        roundCounter.textContent = `${roundCount} / ${MAX_ROUNDS}`
    }

    return result;

}

//Who won the rounf
function whoWonRound(choice1,choice2){
    //returns: 1 if choice1 wins, 2 if choice2 wins, 0 if its a tie
    if (choice1 === choice2) return 0;
    //check if choice1 won
    let winCombinations = ['Rock Scissors', 'Paper Rock', 'Scissors Paper']
    let consideredCombination =`${choice1} ${choice2}`
    if (winCombinations.includes(consideredCombination)) {
        return 1;
    }
    else {
        return 2;
    }
}

//Handle buttons
const btnContainer = document.querySelector('#btn-container');
btnContainer.addEventListener('click', (event) => {
    const yourChoice = event.target.value;
    playARound(yourChoice, getComputerChoice());
});

//update display after round
function updateDisplay(choice1, choice2, result) {
    const display1 = document.querySelector('#rps-display > .line1');
    const display2 = document.querySelector('#rps-display > .line2');
    display1.textContent = `${choice1} vs ${choice2}`;
    switch (result) {
        case 1:
            display2.textContent = 'Win';
            break;
        case 2:
            display2.textContent = 'Loose';
            break;
        case 0:
            display2.textContent = 'Tie';
            break;
    }
}

function matchEnds() {
    const display2 = document.querySelector('#rps-display > .line2');
    switch (whoWonMatch()) {
        case 1:
            display2.textContent = 'YOU WON THE MATCH!';
            break;
        case 2:
            display2.textContent = 'YOU LOST THE MATCH!';
            break;
        case 0:
            display2.textContent = 'IT\'S A TIE!';
            break;     
    }
    const roundCounter = document.querySelector('#round-count');
    roundCounter.textContent = 'FIN';
    return;
}

function whoWonMatch() {
    //returns: 1 if player wins, 2 if computer wins, 0 if its a tie
    const scoreBoard = document.querySelector('#score');
    const score = scoreBoard.textContent.split(':');
    const playerScore = +score[0];
    const computerScore = +score[1];
    switch (true) {
        case playerScore > computerScore :
            return 1;
        case playerScore < computerScore :
            return 2;
        case playerScore === computerScore :
            return 0;
    }
}

function updateScore(result) {
    if (result === 0) return;
    const scoreBoard = document.querySelector('#score');
    const score = scoreBoard.textContent.split(':');
    let playerScore = +score[0];
    let computerScore = +score[1];
    if (result === 1) playerScore++;
    else computerScore++;
    scoreBoard.textContent = `${playerScore} : ${computerScore}`;
    return;
}

function resetGame() {
    const roundCounter = document.querySelector('#round-count');
    roundCounter.textContent = `1 / ${MAX_ROUNDS}`;
    const scoreBoard = document.querySelector('#score');
    scoreBoard.textContent = '0 : 0';
    const display1 = document.querySelector('#rps-display > .line1');
    const display2 = document.querySelector('#rps-display > .line2');
    display1.textContent = display2.textContent = '';
    return;
}

const resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', resetGame);