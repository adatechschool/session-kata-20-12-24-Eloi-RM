import { gameSettings, triesPgraph } from "./data.mjs"

function displayNumberOfTries() {
    triesPgraph.innerText = `Number of tries : ${gameSettings.playerNumberOfTries}`
}

export {
    displayNumberOfTries
}