const dayBirth = document.getElementById('dayBirth')
const monthBirth = document.getElementById('monthBirth')
const devName = document.getElementById('devName')
const showNameBtn = document.getElementById("showName")

showNameBtn.addEventListener('click', ()=>{
    let nomeDev = ""
    let sobrenomeDev = ""
    
    const day = parseFloat(dayBirth.value.slice(-1))

    if (day === 1 || 2) {
        nomeDev = "Desenvolvedor(a)"
    } else if (day === 3 || 4 || 5) {
        nomeDev = "Programador(a)"
    } else if (day === 6 || 7 || 8) {
        nomeDev = "Estagiario(a)"
    } else if (day === 6 || 7 ) {
        nomeDev = "Senior(a)"
    }


    const mouth = parseFloat(monthBirth.value.slice(-1))

    if (mouth === 1 ) {
        sobrenomeDev = " bugado(a)"
    } else if (mouth === 2) {
        sobrenomeDev = " do CTRL C, CTRL V"
    } else if (mouth === 3) {
        sobrenomeDev = " das gambiarras"
    } else if (mouth === 4) {
        sobrenomeDev = " que culpa o cache"
    } else if (mouth === 5) {
        sobrenomeDev = " que esquece o que faz"
    } else if (mouth === 6) {
        sobrenomeDev = " do git vazio"
    } else if (mouth === 7) {
        sobrenomeDev = " das try/catch vazia"
    } else if (mouth === 8) {
        sobrenomeDev = " famosinho do linkedin"
    } else if (mouth === 9) {
        sobrenomeDev = " caçador de bugs"
    } else if (mouth === 10) {
        sobrenomeDev = " do windows pirata"
    } else if (mouth === 11) {
        sobrenomeDev = " do update sem where"
    } else if (mouth === 12) {
        sobrenomeDev = " do commit bugado"
    } 


    devName.innerText = nomeDev + sobrenomeDev
})