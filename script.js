const pGraph = document.querySelector(`#result`)
const inputArea = document.querySelector(`#input`)
const validateButton = document.querySelector(`#validate`)

const validColors = [
    `red`,
    `blue`,
    `yellow`,
    `green`
]

const secretCode = [`blue`, `red`]

function gameTurn() {
    const playerCode = getPlayerCode()
    console.log(playerCode)
    
    const playerCodeInArray = codeToArray(playerCode)
    console.log(playerCodeInArray)
    
    if (!isCorrectLength(playerCodeInArray)) {
        pGraph.innerText = `please choose 4 colors`
        return
    }
    console.log(`is correct length`)
    if (!isValidColors(playerCodeInArray)) {
        pGraph.innerText = `please choose valid colors : ${validColors}`
        return
    }
    console.log(`is valid colors`)
}

function getPlayerCode() {
    const playerInput  = inputArea.value
    return playerInput
}

function codeToArray(myString) {
    const myArray = myString.split(`,`) //later remplaced with buttons so we do not worry about bad player input for now
    return myArray
}

function isCorrectLength(myArray) {
    return myArray.length == 2
}

function isValidColors(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (!indexIsValidColor(myArray[i])) {
            return false
        }
    }
    return true
}

function indexIsValidColor(myString) {
    for (color of validColors) {
        if (myString == color) {
            console.log(`${myString} is valid color`)
            return true
        }
    }
    return false
}

validateButton.addEventListener(`click`, ()=> {
    gameTurn()
})