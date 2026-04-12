const numeroWhatsApp = "5521990662990"; 

function chamarWhatsApp(origem) {
    let mensagem = "Olá! Gostaria de falar com um consultor para entender como a automação inteligente pode ajudar minha empresa.";
    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    window.open(url, '_blank');
}

// ==========================================
// ANIMAÇÃO DE FUNDO (LEDS VERTICAIS FIXOS)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('led-background');
    if (!container) return;

    // Número de linhas que você quer passando pelo fundo da tela
    const numLines = 15; 
    
    for (let i = 0; i < numLines; i++) {
        const line = document.createElement('div');
        line.className = 'led-line';
        
        const positionX = (100 / numLines) * i + (100 / numLines) / 2;
        line.style.left = `${positionX}%`;

        const light = document.createElement('div');
        light.className = 'led-light';
        
        const delay = Math.random() * 5; 
        light.style.animationDelay = `${delay}s`;
        
        // Velocidade da luz caindo
        const duration = 2 + Math.random() * 1.5; 
        light.style.animationDuration = `${duration}s`;

        line.appendChild(light);
        container.appendChild(line);
    }
});
