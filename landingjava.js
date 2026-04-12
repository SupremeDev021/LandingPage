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
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = document.getElementById("draggable-dashboard");
    const header = document.getElementById("dashboard-header");

    if (dashboard && header) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        // Para Computador (Mouse)
        header.onmousedown = dragMouseDown;
        // Para Celular (Toque)
        header.ontouchstart = dragTouchStart;

        function dragMouseDown(e) {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
            
            // Quando clica, pára a animação de "flutuar" para não bugar o arrasto
            dashboard.style.animation = 'none'; 
            dashboard.style.zIndex = '1000'; // Joga pra frente de tudo
        }

        function elementDrag(e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            dashboard.style.top = (dashboard.offsetTop - pos2) + "px";
            dashboard.style.left = (dashboard.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }

        // Funções espelhadas para o Toque (Celular)
        function dragTouchStart(e) {
            pos3 = e.touches[0].clientX;
            pos4 = e.touches[0].clientY;
            document.ontouchend = closeDragElementTouch;
            document.ontouchmove = elementDragTouch;
            dashboard.style.animation = 'none';
            dashboard.style.zIndex = '1000';
        }

        function elementDragTouch(e) {
            pos1 = pos3 - e.touches[0].clientX;
            pos2 = pos4 - e.touches[0].clientY;
            pos3 = e.touches[0].clientX;
            pos4 = e.touches[0].clientY;
            dashboard.style.top = (dashboard.offsetTop - pos2) + "px";
            dashboard.style.left = (dashboard.offsetLeft - pos1) + "px";
        }

        function closeDragElementTouch() {
            document.ontouchend = null;
            document.ontouchmove = null;
        }
    }
});
