const resultPgraph = document.querySelector(`#result`)
const inputArea = document.querySelector(`#input`)
const validateButton = document.querySelector(`#validate`)
const triesPgraph = document.querySelector(`#try`)

const validColors = [
    `red`,
    `blue`,
    `yellow`,
    `green`
]

const secretCombination = [`blue`, `red`]

export {
    resultPgraph, inputArea, validateButton, triesPgraph, validColors, secretCombination
}