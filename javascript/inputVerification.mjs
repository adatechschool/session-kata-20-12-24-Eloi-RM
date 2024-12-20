import { gameSettings, validColors } from "./data.mjs"

function verfiatePlayerInput(playerCombination) {
    const playerCombinationInArray = combinationToArray(playerCombination)
    console.log(playerCombinationInArray)
    
    if (!isCorrectLength(playerCombinationInArray)) {
        alert(`please choose ${gameSettings.combinationLength} colors`)
        return false
    }
    console.log(`is correct length`)
    if (!isValidColors(playerCombinationInArray)) {
        alert(`please choose valid colors : ${validColors}`)
        return false
    }
    console.log(`is valid colors`)
    return true
}



function combinationToArray(myString) {
    const myArray = myString.split(`,`) //later remplaced with buttons so we do not worry about bad player input for now
    return myArray
}

function isCorrectLength(myArray) {
    return myArray.length == gameSettings.combinationLength
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