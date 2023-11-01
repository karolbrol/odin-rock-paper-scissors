

//Get choice from computer
function getComputerChoice() {
    let moves = ['Rock', 'Paper', 'Scissors']
    //Get random array index from range 0...2
    let choice = Math.floor(Math.random() * 3)
    return moves[choice]
}

//Play a round function -case insensitive, returning string with result (1 - player won, 2 - computer won, 0 - tie)
//Return null if invalid parameters
function playARound(playerChoice, computerChoice) {
    //Check if parameters are valid
        //Check if parameters are of type string
    if (typeof playerChoice !== 'string' || typeof computerChoice !== 'string')
    {
        return null
    }
        //Convert parameters to format with first uppercase letter
    playerChoice = playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1).toLowerCase()
    computerChoice = computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1).toLowerCase()
        //Check if parameters are equal to one allowed moves
    let moves = ['Rock', 'Paper', 'Scissors']
    let computerChoiceValid = moves.includes(computerChoice)
    let playerChoiceValid = moves.includes(playerChoice)
    if (!(computerChoiceValid && playerChoiceValid)) {
        return null;
    }

    

    //Return 1 - player won, 2 - computer won, 0 - tie
    let result = whoWon(playerChoice, computerChoice)
    console.log(`${playerChoice} vs ${computerChoice}`)
    if (result === 1) {
        console.log('Win')
    }
    else if (result === 2) {
        console.log('Loose')
    }
    else {
        console.log('Tie')
    }

    return result

}

function whoWon(choice1,choice2){
    //returns:
    //  - 1 if choice1 wins
    //  - 2 if choice2 wins
    //  - 0 if its a tie
    if (choice1 === choice2) return 0
    //check if choice1 won
    let winCombinations = ['Rock Scissors', 'Paper Rock', 'Scissors Paper']
    let consideredCombination =`${choice1} ${choice2}`
    if (winCombinations.includes(consideredCombination)) {
        return 1
    }
    else {
        return 2
    }
}

//Function that plays 5 rounds of the game, prompting for user choice and console.logging the result
// function game() {
//     //declare score variables
//     let playerScore = 0
//     let computerScore = 0
    
//     let yourChoice

//     for (let gamesCount = 1; gamesCount <=5 ; gamesCount++) {
//         console.log(`  Round ${gamesCount}`)

//         yourChoice = prompt('Whats\'s Your choice?')
//         switch (playARound(yourChoice, getComputerChoice())) {
//         case 1 : playerScore++; break;
//         case 2 : computerScore++; break;
//         case null:
//             console.log('Invalid choice')
//             gamesCount--
//             break;
//         }
//     }

//     //Final result
//     console.log(`Result: ${playerScore} - ${computerScore}`)
//     if (playerScore === computerScore) {
//         console.log('It\'s a tie.')
//     }
//     else if (playerScore > computerScore) {
//         console.log('You won!')
//     }
//     else {
//         console.log('You lost.')
//     }

// }

//Handle buttons
const btnContainer = document.querySelector('#btn-container');
btnContainer.addEventListener('click', (event) => {
    const yourChoice = event.target.value;
    playARound(yourChoice, getComputerChoice());
});

