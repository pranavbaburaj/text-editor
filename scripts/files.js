import {filename, heading} from "./index.js"

function switchText(text){
    heading.innerHTML = text
}

export default function checkForFiles(){
    // the editor provides
    // build support for html and
    // readme files
    const file = filename.value // the value of the filename input
    if(file.endsWith(".html") || file.endsWith(".htm")){
        // readme
        if(!heading.innerHTML.includes("(Press F5 to run)")){
            switchText(
                `${heading.innerHTML}(Press F5 to run)`
            )
        }
    } else if(file.endsWith(".md")){
        if(!heading.innerHTML.includes("(Press F5 to run)")){
            switchText(
                `${heading.innerHTML}(Press F5 to run)`
            )
        }
    } else {
        switchText(heading.innerHTML.replace("(Press F5 to run)", ""))
    }
}