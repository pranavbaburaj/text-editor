import switchTitle, {removeSpaces} from "./title.js"
import checkForFiles from "./files.js"
import HTMLBuild from "./html.js"
import create_template from "./template.js"


// the filename input box
// to collect the filename
export const filename = document.querySelector('.filename')

// the code textarea
const code = document.querySelector('.code')

// the apply or the save button
const apply = document.querySelector('.apply')

// the main heading
export const heading = document.querySelector(".h1")



var dataIsSaved = false

// the modal box to display
// for html build
export const modal = document.getElementById("myModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// run the html build
function run(){
    if(filename.value.endsWith(".html") || filename.value.endsWith(".htm")){
        var html = new HTMLBuild(
            filename,
            code,
            modal,
            document.querySelector(".modal-content")
        )
    }
}

/*
Wait for F5 Keypress
and on keypress run the HTMLBuild()
and open up the result on a new page
*/
window.addEventListener('keydown', function(event){
    if(event.keyCode == 116){
        event.preventDefault()
        run()
    }
})

// set the default filename
const setDefaultFileName = (inputBox) => {
    const file = localStorage.getItem('filename')
    if (file == null) {
        inputBox.value = "main.js"
    } else {
        inputBox.value = localStorage.getItem('filename')
    }
    switchTitle(filename.value)
}

filename.addEventListener('keydown', function(event) {
    if(event.keyCode == 13){
        localStorage.setItem('filename', filename.value)
        checkForFiles()

    }

    if(event.keyCode == 32){
        // filename.value =filename.value.toString().replace(" ", "")
        filename.value = removeSpaces(filename.value)
    }
    return null
})

const updateCodeSnippet = function(textToUpdate) {
    localStorage.setItem('code', textToUpdate)
}

code.addEventListener('keydown', function(event) {
    // updateCodeSnippet(code.value)
    if(event.shiftKey && event.keyCode == 49){
        var blocks = code.value.toString().split(" ")
        // the boilterplate creation
        if(blocks.length == 1){
            // check if ! is the first character
            if(blocks[0] == ""){
                // ask to create a template
                const createTemplate = window.confirm("Do you want to create an html template")
                if(createTemplate){
                    // if the response is yes
                    // prevent the default event(! mark)
                    // and fill out the html file with 
                    // the default html template
                    event.preventDefault()
                    create_template(code)

                    // save the updated code 
                    // into the session(LocalStorage)
                    updateCodeSnippet(code.value)
                } else {

                }
            }
        }
    }
    switchTitle(`${filename.value}-[unsaved]`)
})

window.addEventListener('keydown', function(event) {
    if(event.ctrlKey && event.keyCode == 83){
        event.preventDefault()
        updateCodeSnippet(code.value)
        switchTitle(
            `${filename.value}`
        )
        dataIsSaved = true
    }
})

apply.addEventListener('click', function(event) {
    checkForFiles()
    localStorage.setItem('filename', filename.value)
    localStorage.setItem('code', code.value)
})

const setDefaultCodeSnippet = function(textarea) {
    var lastCode = localStorage.getItem('code')
    if(lastCode != null) {
        textarea.value = localStorage.getItem('code')
    } else {
        textarea.value = ""
    }
}

setDefaultCodeSnippet(code)
setDefaultFileName(filename)

// check for html and readme files
checkForFiles()
