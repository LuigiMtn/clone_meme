const colors = ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71']; // Cores disponíveis
let currentIndex = 0; // Índice da cor atual

// Função para trocar a cor de fundo do site
function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length; // Avança para a próxima cor
}

// Chama a função para trocar a cor a cada 1 segundos
setInterval(changeBackgroundColor, 1000);

function answerQuestion(answer) {
    const container = document.getElementById('container');
    if (answer === 'Não') {
        const newPositionX = Math.random() * (window.innerWidth - container.offsetWidth);
        const newPositionY = Math.random() * (window.innerHeight - container.offsetHeight);
        container.style.left = newPositionX + 'px';
        container.style.top = newPositionY + 'px';
    } else {
        const questionElement = document.getElementById('question');
        questionElement.innerHTML = '  ';
        // Redirecionar para o link desejado
        window.location.href = 'https://www.youtube.com/watch?v=-7NpcbkyrEY'; 
    }
}
