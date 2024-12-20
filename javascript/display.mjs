import { gameSettings, numberOfTriesPgraph, tryResultPgraph } from "./data.mjs"

function displayNumberOfTries() {
    numberOfTriesPgraph.innerText = `Number of tries : ${gameSettings.playerNumberOfTries}`
}

function displayTryResult() {
    tryResultPgraph.innerText = `Well placed colors : ${gameSettings.tryResult[0]}
                            Missplaced colors : ${gameSettings.tryResult[1]}`
}

export {
    displayNumberOfTries, displayTryResult
}