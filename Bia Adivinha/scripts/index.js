const heartCount = document.getElementById('heartCount')
const attempInp = document.getElementById('attempInp')
const biaReact = document.querySelector('.biaReact img')
const attemptBtn = document.querySelector('.attemptBtn button')
const failedAttempts = document.getElementById('failedAttempts')
const messages = document.getElementById('messages')

const biaNumber = Math.floor(Math.random() * 100)

attempInp.addEventListener('input', e => {
    const value = e.target.value
    e.target.value = value.replace(/\D/g, '')
})

const checkHeartCount = () => {
    const heartCountValue = parseFloat(heartCount.innerText)    

    if (heartCountValue > 1) {
        heartCount.innerText = heartCountValue - 1
        return        
    } else {
        heartCount.innerText = heartCountValue - 1
        messages.innerText = `Voce perdeu todas as vidas :(
        O número que a Bia pensou era: ${biaNumber}`
        attempInp.disabled = true
        attemptBtn.disabled = true
        biaReact.src = './img/Fail.png'
    } 
}

attemptBtn.addEventListener('click', () => {
    const inputValue = attempInp.value
    

    if (!inputValue) {
        messages.innerText = 'Voce precisa digitar um número'
        return
    }

    if (inputValue > biaNumber) {
        messages.innerText = 'O número é menor'
        const addToFailedAttempts = inputValue + ", "
        failedAttempts.innerText += addToFailedAttempts        

        checkHeartCount()
        
    } else if (inputValue < biaNumber) {
        messages.innerText = 'O número é maior'
        const addToFailedAttempts = inputValue + ", "
        failedAttempts.innerText += addToFailedAttempts

        checkHeartCount()
    } else {
        messages.innerText = 'Parabéns! O número que a Bia pensou é: ' + biaNumber
        attempInp.disabled = true
        attemptBtn.disabled = true
        biaReact.src = './img/Sucess.png'
    }
})