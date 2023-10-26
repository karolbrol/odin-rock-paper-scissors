
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
    //Convert parameters to string type with first uppercase letter
    let a = 0
    playerChoice = playerChoice.toString()
    playerChoice = playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1).toLowerCase()
    computerChoice = computerChoice.toString()
    computerChoice = computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1).toLowerCase()

    //Check if parameters are valid
    let moves = ['Rock', 'Paper', 'Scissors']
    let computerChoiceValid = moves.includes(computerChoice)
    let playerChoiceValid = moves.includes(playerChoice)
    if (!(computerChoiceValid && playerChoiceValid)) {
        return null;
    }

    return playerChoice + ' ' + computerChoice

    
}

//Function that plays 5 rounds of the game, prompting for user choice and console.logging the result
//TODO function game()

