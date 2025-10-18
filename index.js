var text = "Skriv en funktion till vilken man skickar ett antal ord - funktionen ska returnera det längsta ordet";
const letter = "a"
const constants = [ "a", "e", "i", "o", "u", "y", "å", "ä", "ö" ];


//const isConstChar = WordCheck(letter, constants);
 
PirateLang(text, constants)
/* const longWord = LongestWord(text)
console.log(longWord) */

// console.log(isConstChar)

function WordCheck(letter, constants){

    for (i = 0; i < constants.length; i++){

        if (letter == constants[i]) {
            console.log(constants[i])
            return true
        }
        else{
            return false
        }
    }
}

function LongestWord(text){
    const words = text.split(" ").sort()
    console.log(words)

    var wordLetters = 0
    

    for (i = 0; i < words.length; i++){
        if (words[i].length > wordLetters){
            wordLetters = words[i].length;
            var longestWord = words[i];
        }
    }

    return longestWord
}


function PirateLang(text, constants) {

    var pirateText = [];
    var pirateDone = "";
    var o = "o"

    text.split("")
    for (i = 0; i < text.length; i++){

        for (const constant of constants)
        {

            if (constant == text[i]){
                text[i].concat("o")
            } 

        }
    pirateText.push(text[i]);
    }

    for (var p of pirateText){
        pirateDone = pirateDone.concat(p)
    }

    console.log(pirateDone)
}