const tryResultPgraph = document.querySelector(`#try-result-pgraph`)
const inputArea = document.querySelector(`#input`)
const validateButton = document.querySelector(`#validate`)
const numberOfTriesPgraph = document.querySelector(`#tries-numbers-pgraph`)

const validColors = [
    `red`,
    `blue`,
    `green`,
    `yellow`,
    `magenta`,
    `cyan`,
    `white`,
    `black`
]

const secretCombination = [`blue`, `blue`, `yellow`, `green`]

const gameSettings = {
    "combinationLength" : 4,
    "maxNumberOfTries" : 12,
    "playerNumberOfTries" : 0,
    "tryResult" : []
}

export {
    tryResultPgraph, inputArea, validateButton, numberOfTriesPgraph, validColors, secretCombination, gameSettings
}