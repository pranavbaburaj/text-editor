const filename = document.querySelector('.filename')

const code = document.querySelector('.code')
const apply = document.querySelector('.apply')

// set the default filename
const setDefaultFileName = (inputBox) => {
    const file = sessionStorage.getItem('filename')
    if (file == null) {
        inputBox.value = "main.js"
    } else {
        inputBox.value = sessionStorage.getItem('filename')
    }
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
    updateCodeSnippet(code.value)

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