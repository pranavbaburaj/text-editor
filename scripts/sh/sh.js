import { Execute } from "./execute/exe.js"

// the main script
export default class Scripts {
    constructor(code){
        this.data = code.split("\n")
        this.createLexicalEvaluation()
    }

    // create the lexer evaluation
    createLexicalEvaluation = () => {
        for(let index = 0; index < this.data.length; index++){
            let lineNumber = index + 1

            // calling the executor
            const executor = new Execute(
                this.data[index],
                lineNumber
            )

            // executing the script
            executor.executeEsEhScript()
        }
    }
}