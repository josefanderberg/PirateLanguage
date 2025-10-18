var text = "Skriv en funktion till vilken man skickar ett antal ord - funktionen ska returnera det längsta ordet";
const letter = "a"
const constants = [ "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", 
    "n", "p", "q", "r", "s", "t", "v", "w", "x", "z" ];

//const isConstChar = WordCheck(letter, constants);
 
pirateResult = PirateLang(text, constants)

showOriginalText = BackFromPirate(pirateResult)
console.log(showOriginalText)

function BackFromPirate (captain) {

    let originalText = []
    let removeNextChar = false

    for (var char of captain) {
        if (char.toLowerCase() == "o") {
            removeNextChar = true;
            continue;
        }
        else if (removeNextChar == true){
            removeNextChar = false;
            continue
        }
        else {
            originalText.push(char)
        }
    }
    let returnText = originalText.join("")
    
    return returnText
}

/* const longWord = LongestWord(text)
console.log(longWord) */

// console.log(isConstChar)

function WordCheck(letter, constants){

    for (i = 0; i < constants.length; i++){

        if (letter == constants[i]) {
            console.log(constants[i])
            return true
        }

    }
    return false
}

function LongestWord(text){
    const words = text.split(" ").sort()
    console.log(words)

    let wordLetters = 0
    let longestWord
    

    for (i = 0; i < words.length; i++){
        if (words[i].length > wordLetters){
            wordLetters = words[i].length;
            longestWord = words[i];
        }
    }

    return longestWord
}


function PirateLang(text, constants) {

    var pirateText = [];

    for (const char of text) { // 'char' blir den aktuella bokstaven
        let pirateAdd = char

        for (const constant of constants)
        {

            if (constant == char.toLowerCase()){
                pirateAdd = char.concat("o", char.toLowerCase())
                break
            }
        }
        pirateText.push(pirateAdd)
    }
    return pirateResult = pirateText.join("");
}

