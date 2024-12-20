import { gameSettings, secretCombination } from "./data.mjs";

let wellPlaced  = 0
let missplaced = 0
// let tempSecretCombination = []

function verifiatePlayerCombination(playerCombination) {
    gameSettings.tryResult.length = 0
    wellPlaced = 0
    missplaced = 0
    
    // for (const color of secretCombination) {
    //     tempSecretCombination.push(color)
    // }

    howManyWellplaced(playerCombination)
    gameSettings.tryResult.push(wellPlaced)
    gameSettings.tryResult.push(missplaced)
    console.log(gameSettings.tryResult)
    
    if (wellPlaced == gameSettings.combinationLength) {
        return true
    }
    
    return false
}

//doesn't work because javascript hates me
// function isPlayerCombinationTrue(myArray) {
//     return myArray == secretCombination
// }

function howManyWellplaced(myArray) {
    for (let i = 0; i < myArray.length; i++){
        if (myArray[i] == secretCombination[i]) {
            wellPlaced += 1
            // tempSecretCombination.splice(i, i+1, ``)
            // console.log(tempSecretCombination)
            console.log(`${myArray[i]} is well placed`)
        } else {
            isMissplaced(myArray[i])
        }
    }
}

function isMissplaced(myString) {
    // for (const color of tempSecretCombination) {
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