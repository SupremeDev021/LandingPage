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

// ==========================================
// PAINEL ARRASTÁVEL (BLINDADO CONTRA CSS)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = document.getElementById("draggable-dashboard");

    if (dashboard) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        // Atribui o arrasto à caixa inteira
        dashboard.onmousedown = dragMouseDown;
        dashboard.ontouchstart = dragTouchStart;

        // Função mágica: Converte o CSS complexo em pixels fixos antes de arrastar
        function travarPosicaoExata() {
            if (dashboard.dataset.destravado) return; // Só roda no primeiro clique
            
            const rect = dashboard.getBoundingClientRect();
            const parentRect = dashboard.offsetParent.getBoundingClientRect();
            
            // Grava a posição atual exata
            dashboard.style.top = (rect.top - parentRect.top) + "px";
            dashboard.style.left = (rect.left - parentRect.left) + "px";
            
            // "Mata" todas as regras do CSS que causam conflito
            dashboard.style.bottom = 'auto';
            dashboard.style.right = 'auto';
            dashboard.style.transform = 'none';
            dashboard.style.animation = 'none';
            dashboard.style.zIndex = '1000';
            
            dashboard.dataset.destravado = "true";
        }

        // --- COMPUTADOR (MOUSE) ---
        function dragMouseDown(e) {
            e.preventDefault();
            travarPosicaoExata(); // Trava a posição antes de mover
            
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
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

        // --- CELULAR (TOQUE) ---
        function dragTouchStart(e) {
            travarPosicaoExata(); // Trava a posição antes de mover
            
            pos3 = e.touches[0].clientX;
            pos4 = e.touches[0].clientY;
            document.ontouchend = closeDragElementTouch;
            document.ontouchmove = elementDragTouch;
        }

        function elementDragTouch(e) {
            e.preventDefault(); // <--- O SEGREDO PARA O CELULAR! Impede a tela de rolar
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
