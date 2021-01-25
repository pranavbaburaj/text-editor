export default class HTMLBuild {
    constructor(filename, code, modalBox, content){
        this.file = filename
        this.code = code
        this.modal = modalBox
        this.content = content
        this.runHTMLBuild()
    }

    checkForHTML(){
        return this.file.value.endsWith(".html") || this.file.value.endsWith(".htm")

    }

    runHTMLBuild() {
        if(this.checkForHTML()){
            this.content.innerHTML = this.code.value
            this.modal.style.display = "block"
        }
    }

}