

//Get choice from computer
function getComputerChoice() {
    let moves = ['Rock', 'Paper', 'Scissors']
    //Get random array index from range 0...2
    let choice = Math.floor(Math.random() * 3)
    return moves[choice]
}

function playARound(playerChoice, computerChoice) {
    //Return 1 - player won, 2 - computer won, 0 - tie
    let result = whoWon(playerChoice, computerChoice);

    //Write result to display
    updateDisplay(playerChoice, computerChoice, result);

    //Update round count
    const roundCounter = document.querySelector('#round-count')
    let roundCount = +roundCounter.textContent.slice(0,1);
    if (roundCount >= 5) {
        //Handle match end
    }
    else {
        roundCount++;
        roundCounter.textContent = roundCount + ' / 5'
    }

    return result;

}

//Who won the rounf
function whoWon(choice1,choice2){
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