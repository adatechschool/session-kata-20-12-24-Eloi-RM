import { resultPgraph, inputArea, validColors } from "./data.mjs"

function verfiatePlayerInput() {
    const playerCode = getPlayerCombination()
    console.log(playerCode)
    
    const playerCodeInArray = combinationToArray(playerCode)
    console.log(playerCodeInArray)
    
    if (!isCorrectLength(playerCodeInArray)) {
        resultPgraph.innerText = `please choose 2 colors`
        return
    }
    console.log(`is correct length`)
    if (!isValidColors(playerCodeInArray)) {
        resultPgraph.innerText = `please choose valid colors : ${validColors}`
        return
    }
    console.log(`is valid colors`)
}

function getPlayerCombination() {
    const playerInput  = inputArea.value
    return playerInput
}

function combinationToArray(myString) {
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
    for (const color of validColors) {
        if (myString == color) {
            console.log(`${myString} is valid color`)
            return true
        }
    }
    return false
}

export {
    verfiatePlayerInput
}