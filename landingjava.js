// ==========================================
// FUNÇÕES DA LANDING PAGE SUPREME-TECH
// ==========================================

const numeroWhatsApp = "552199066299"; 

function chamarWhatsApp(plano) {
    let mensagem = "";

    switch (plano) {
        case 'consultor':
            mensagem = "Olá! Gostaria de falar com um consultor para entender como a automação inteligente pode ajudar minha empresa.";
            break;
        case 'basic':
            mensagem = "Olá! Gostaria de saber mais detalhes e valores do plano Supreme Basic.";
            break;
        case 'super':
            mensagem = "Olá! Tenho interesse no plano Supreme Super e gostaria de falar com um especialista.";
            break;
        case 'elite':
            mensagem = "Olá! Gostaria de agendar uma reunião para entender como o plano Supreme Elite pode escalar meu negócio.";
            break;
        case 'geral':
            mensagem = "Olá! Gostaria de agendar um diagnóstico gratuito para a minha empresa.";
            break;
        default:
            mensagem = "Olá! Quero saber mais sobre as automações da Supreme-Tech.";
    }

    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    window.open(url, '_blank');
}

// ==========================================
// ANIMAÇÃO DE FUNDO (LEDS VERTICAIS)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('led-background');
    if (!container) return;

    // Configurações do simulador aplicadas diretamente (6 linhas, veloz)
    const numLines = 6; 
    
    for (let i = 0; i < numLines; i++) {
        const line = document.createElement('div');
        line.className = 'led-line';
        
        // Distribui as linhas horizontalmente de forma uniforme
        const positionX = (100 / numLines) * i + (100 / numLines) / 2;
        line.style.left = `${positionX}%`;

        const light = document.createElement('div');
        light.className = 'led-light';
        
        // Randomiza o tempo de início para que não caiam todas juntas
        const delay = Math.random() * 3; 
        light.style.animationDelay = `${delay}s`;
        
        // Velocidade baseada na sua preferência "rápida" (entre 1.8s e 2.8s de queda)
        const duration = 1.8 + Math.random(); 
        light.style.animationDuration = `${duration}s`;

        line.appendChild(light);
        container.appendChild(line);
    }
});
