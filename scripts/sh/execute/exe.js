// set the current charatcer
function setCurrentCharacter(code, pos){
    if(code.length == pos){
        return null
    } else {
        return code[pos]
    }
}

// the main executor class
// to execute the eseh code
export class Execute {
    constructor(code, lineNumber){
        // the single line
        // of code splitted by spaces
        // to parse by each word
        this.code = code.split(" ")

        // the line number
        // to throw error(if)
        this.lineNumber = lineNumber

        // the position
        // or the array index
        this.pos = 0
    }

    executeEsEhScript = function() {
        // setting the current character
        let currentCharacter = setCurrentCharacter(
            this.code,
            this.pos
        )

        while (currentCharacter != null){
            console.log(currentCharacter)
            this.pos += 1

            // updating the cu
            currentCharacter = setCurrentCharacter(
                this.code, this.pos
            )
        }
    }
}