import switchTitle, {removeSpaces} from "./title.js"

const filename = document.querySelector('.filename')

const code = document.querySelector('.code')
const apply = document.querySelector('.apply')

var dataIsSaved = false

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