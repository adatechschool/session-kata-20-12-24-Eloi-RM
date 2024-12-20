import { secretCombination } from "./data.mjs";

function verifiatePlayerCombination(playerCombination) {
    console.log("j")
    return isPlayerCombinationTrue(playerCombination)
}

function isPlayerCombinationTrue(myArray) {
    console.log(secretCombination)
    console.log(myArray)
    return myArray == secretCombination
}

export {
    verifiatePlayerCombination
}