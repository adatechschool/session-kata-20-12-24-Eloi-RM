import { secretCombination } from "./data.mjs";

function verifiatePlayerCombination() {
    return isPlayerCombinationTrue()
}

function isPlayerCombinationTrue(myArray) {
    return myArray == secretCombination
}

export {
    verifiatePlayerCombination
}