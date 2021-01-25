export default function switchTitle(title) {
    document.title = title // switching the title to the new title
}

// replace spaced with -(s) 
// => hello world
// -> hello-world

/**
 * Used for replcing the spaces with -(s) in 
 * the filename .
 */
export function removeSpaces(string) {
    var str = ''
    for (var index = 0; index < string.length; index++){
        if (string[index] != " "){
            str += string[index]
        } else {
            str += "-"
        }
    }
    return str
}

