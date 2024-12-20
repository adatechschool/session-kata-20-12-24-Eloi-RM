import { secretCombination } from "./data.mjs";

function verifiatePlayerCombination() {
    return isPlayerCombinationTrue(myArray)
}

function isPlayerCombinationTrue(myArray) {
    console.log(secretCombination)
    console.log(myArray)
    return myArray === secretCombination
}

export {
    verifiatePlayerCombination
}