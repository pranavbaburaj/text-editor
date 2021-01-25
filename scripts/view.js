export const v = document.querySelector('.v')

export default function viewBuild(template){
    template.innerHTML = localStorage.getItem('build')
}

viewBuild(v)