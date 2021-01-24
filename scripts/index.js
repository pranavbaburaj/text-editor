import switchTitle from "./title.js"

const filename = document.querySelector('.filename')

const code = document.querySelector('.code')
const apply = document.querySelector('.apply')

var dataIsSaved = false

// set the default filename
const setDefaultFileName = (inputBox) => {
    const file = sessionStorage.getItem('filename')
    if (file == null) {
        inputBox.value = "main.js"
    } else {
        inputBox.value = sessionStorage.getItem('filename')
    }
    switchTitle(filename.value)
}

filename.addEventListener('keydown', function(event) {
    if(event.keyCode == 13){
        sessionStorage.setItem('filename', filename.value)
    }
    return null
})

const updateCodeSnippet = function(textToUpdate) {
    sessionStorage.setItem('code', textToUpdate)
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
    sessionStorage.setItem('filename', filename.value)
})

const setDefaultCodeSnippet = function(textarea) {
    var lastCode = sessionStorage.getItem('code')
    if(lastCode != null) {
        textarea.value = sessionStorage.getItem('code')
    } else {
        textarea.value = ""
    }
}

setDefaultCodeSnippet(code)
setDefaultFileName(filename)