const resultPgraph = document.querySelector(`#result`)
const inputArea = document.querySelector(`#input`)
const validateButton = document.querySelector(`#validate`)
const triesPgraph = document.querySelector(`#try`)

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

const secretCombination = [`red`, `yellow`, `cyan`, `white`]

const gameSettings = {
    "combinationLength" : 4,
    "maxNumberOfTries" : 12,
    "playerNumberOfTries" : 0
}

export {
    resultPgraph, inputArea, validateButton, triesPgraph, validColors, secretCombination, gameSettings
}