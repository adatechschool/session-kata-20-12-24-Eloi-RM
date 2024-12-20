import { verifiatePlayerCombination } from "./javascript/combinationVerification.mjs"
import { gameSettings, inputArea, resultPgraph, secretCombination, validateButton } from "./javascript/data.mjs"
import { displayNumberOfTries } from "./javascript/display.mjs"
import { verfiatePlayerInput } from "./javascript/inputVerification.mjs"

function getPlayerCombination() {
    const playerInput  = inputArea.value
    return playerInput
}

function combinationToArray(myString) {
    const myArray = myString.split(`,`) //later remplaced with buttons so we do not worry about bad player input for now
    return myArray
}

function gameTurn() {
    console.log(`secret combination`, secretCombination)
    
    let playerCombination = getPlayerCombination()
    console.log(playerCombination)

    playerCombination = combinationToArray(playerCombination)
    console.log(playerCombination)

    if (!verfiatePlayerInput(playerCombination)) {
        return
    }

    gameSettings.playerNumberOfTries += 1

    displayNumberOfTries()

    if (verifiatePlayerCombination(playerCombination)) {
        resultPgraph.innerText = `you win`
        validateButton.disabled = true
    } else if (gameSettings.playerNumberOfTries >= gameSettings.maxNumberOfTries) {
        resultPgraph.innerText = `you lose`
        validateButton.disabled = true
    }
}

validateButton.addEventListener(`click`, ()=> {
    gameTurn()
})