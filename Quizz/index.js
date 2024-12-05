const correctAnswers = {
    q1: "b",
    q2: "c",
    q3: "b"
};

const responses = [];

function submitQuiz() {
    const form = document.querySelector('#quizForm');
    const result = document.querySelector('#result');
    const formData = new FormData(form);
    const studentAnswers = {};

    // Coleta as respostas do aluno
    for (let [key, value] of formData.entries()) {
        studentAnswers[key] = value;
    }

    // Salva as respostas do aluno
    responses.push(studentAnswers);

    // Checa respostas e calcula pontuação
    let score = 0;
    for (let question in correctAnswers) {
        if (studentAnswers[question] === correctAnswers[question]) {
            score++;
        }
    }

    // Exibe a pontuação e registra no console
    result.textContent = `Você acertou ${score} de ${Object.keys(correctAnswers).length} perguntas!`;
    console.log("Respostas do aluno:", studentAnswers);
}