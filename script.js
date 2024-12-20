import { validateButton } from "./javascript/data.mjs"
import { verfiatePlayerInput } from "./javascript/inputVerification.mjs"

function gameTurn() {
    verfiatePlayerInput()
}

validateButton.addEventListener(`click`, ()=> {
    gameTurn()
})