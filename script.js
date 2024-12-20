import { verifiatePlayerCombination } from "./javascript/combinationVerification.mjs"
import { inputArea, resultPgraph, validateButton } from "./javascript/data.mjs"
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

    if (verifiatePlayerCombination(playerCombination)) {
        resultPgraph.innerText = `you win`
    } else {
        //display
    }
}

validateButton.addEventListener(`click`, ()=> {
    gameTurn()
})