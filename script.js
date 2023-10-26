
//Get choice from computer
function getComputerChoice() {
    let moves = ['Rock', 'Paper', 'Scissors']
    //Get random array index from range 0...2
    let choice = Math.floor(Math.random() * 3)
    return moves[choice]
}

//Play a round function -case insensitive, returning string with result eg. "You Lose! Paper beats Rock"
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


    //Return a string with a result
    let result
    switch (whoWon(playerChoice, computerChoice)) {
        case 0:
            result = 'It\'s a tie.'
            break;
        case 1:
            result = 'You won!'
            break;
        case 2:
            result = 'You lost.'
            break;
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
function game() {
    for (let gamesCount = 1; gamesCount <=5 ; gamesCount++)
    console.log(`Round ${gamesCount}`)
}

