import { gameSettings, validColors } from "./data.mjs"

function verfiatePlayerInput(playerCombination) {
    if (!isCorrectLength(playerCombination)) {
        alert(`please choose ${gameSettings.combinationLength} colors`)
        return false
    }
    console.log(`is correct length`)
    if (!isValidColors(playerCombination)) {
        alert(`please choose valid colors : ${validColors}`)
        return false
    }
    console.log(`is valid colors`)
    return true
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