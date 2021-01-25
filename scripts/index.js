import switchTitle, {removeSpaces} from "./title.js"
import checkForFiles from "./files.js"
import HTMLBuild from "./html.js"

export const filename = document.querySelector('.filename')

const code = document.querySelector('.code')
const apply = document.querySelector('.apply')

export const heading = document.querySelector(".h1")

var dataIsSaved = false


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
checkForFiles()
