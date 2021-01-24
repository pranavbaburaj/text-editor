export default function switchTitle(title) {
    document.title = title
}

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