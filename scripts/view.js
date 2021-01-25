export const v = document.querySelector('.v')

export default function viewBuild(template){
    // grab the code from the localStorage (sessions)
    // and display it on the view div
    template.innerHTML = localStorage.getItem('build')
}

viewBuild(v)