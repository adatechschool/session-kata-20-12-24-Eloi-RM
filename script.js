import { verifiatePlayerCombination } from "./javascript/codeVerification.mjs"
import { resultPgraph, validateButton } from "./javascript/data.mjs"
import { verfiatePlayerInput } from "./javascript/inputVerification.mjs"

function gameTurn() {
    verfiatePlayerInput()
    if (verifiatePlayerCombination) {
        resultPgraph.innerText = `you win`
    } else {
        //display
    }
}

validateButton.addEventListener(`click`, ()=> {
    gameTurn()
})