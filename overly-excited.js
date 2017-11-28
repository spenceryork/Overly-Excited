// Create an array that contains the words in the sentence
let sentence = ["the", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
var excitedSentence = "";
function addExcitement(theWordArray) {
    for (let i = 0; i < theWordArray.length; i++) {
        excitedSentence += " " + theWordArray[i];
        if ((i+1) % 3 === 0) {
            excitedSentence += "!";   
        }
        console.log(excitedSentence);
    }
}

addExcitement(sentence);