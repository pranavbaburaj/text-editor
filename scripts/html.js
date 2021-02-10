
// the main html displayer
// class 
// displays html code build in another
// page
export default class HTMLBuild {
    constructor(filename, code, modalBox, content) {
        this.file = filename // the filename
        this.code = code // the code
        this.modal = modalBox // the modal
        this.content = content // the modal-content
        this.runHTMLBuild()
    }

    checkForHTML() {
        return this.file.value.endsWith(".html") || this.file.value.endsWith(".htm")

    }

    runHTMLBuild() {
        if (this.checkForHTML()) {
            // save data to the local storage 
            // from where it is retrieved from
            // the view page
            localStorage.setItem('build', this.code.value)

            // redirect the window location
            // to the view page 
            window.location.href = "/v"

            // also load the code content
            // in the modal content as 
            // a modal

            this.content.innerHTML = this.code.value

            // display the modal
            this.modal.style.display = "block"
        }
    }

}