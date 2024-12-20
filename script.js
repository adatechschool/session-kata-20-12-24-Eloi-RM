import { verifiatePlayerCombination } from "./javascript/combinationVerification.mjs"
import { gameSettings, inputArea, resultPgraph, validateButton } from "./javascript/data.mjs"
import { displayNumberOfTries } from "./javascript/display.mjs"
import { verfiatePlayerInput } from "./javascript/inputVerification.mjs"

function getPlayerCombination() {
    const playerInput  = inputArea.value
    return playerInput
}

function gameTurn() {
    const playerCombination = getPlayerCombination()
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