import { secretCombination } from "./data.mjs";

const result = []
let wellPlaced  = 0
let missplaced = 0

function verifiatePlayerCombination(playerCombination) {
    result.length = 0
    wellPlaced = 0
    missplaced = 0
    if (isPlayerCombinationTrue(playerCombination)) {
        return true
    }
    howManyWellplaced(playerCombination)
    result.push(wellPlaced)
    result.push(missplaced)
    console.log(result)

    return false
}

function isPlayerCombinationTrue(myArray) {
    return myArray == secretCombination
}

function howManyWellplaced(myArray) {
    for (let i = 0; i < myArray.length; i++){
        if (myArray[i] == secretCombination[i]) {
            wellPlaced += 1
            console.log(`${myArray[i]} is well placed`)
        } else {
            isMissplaced(myArray[i])
        }
    }
}

function isMissplaced(myString) {
    for (const color of secretCombination) {
        if (myString == color) {
            missplaced += 1
            console.log(`${myString} is missplaced`)
            break
        }
    }
}
export {
    verifiatePlayerCombination
}