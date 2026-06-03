// ==========================================
// SUPREME-TECH | CORE ENGINE JS
// ==========================================

const numeroWhatsApp = "5521994849344"; 

// 1. FUNÇÃO DE REDIRECIONAMENTO COM ENCODE SEGURO
function chamarWhatsApp(origem) {
    const mensagem = "Olá! Gostaria de falar com um consultor da Supreme-Tech para estruturar a automação inteligente do meu negócio.";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
}

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 2. SISTEMA DE PARTÍCULAS LED (CYBERPUNK EFFECT)
    // ==========================================
    const ledContainer = document.getElementById('led-background');
    if (ledContainer) {
        const numLines = window.innerWidth < 768 ? 8 : 20; // Menos linhas no celular para poupar bateria
        
        for (let i = 0; i < numLines; i++) {
            const line = document.createElement('div');
            line.className = 'led-line';
            line.style.left = `${(100 / numLines) * i + (Math.random() * 2)}%`;

            const light = document.createElement('div');
            light.className = 'led-light';
            light.style.animationDelay = `${Math.random() * 7}s`;
            light.style.animationDuration = `${2.5 + Math.random() * 2}s`;

            line.appendChild(light);
            ledContainer.appendChild(line);
        }
    }

    // ==========================================
    // 3. OBSERVER PARA SCROLL REVEAL (Surgimento suave)
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, { root: null, threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));

    // ==========================================
    // 4. EFEITO TILT 3D (Efeito Vidro Flutuante)
    // ==========================================
    // Aplica-se apenas a telas maiores (mouse), ignora touch
    if (window.matchMedia("(pointer: fine)").matches) {
        const tiltElements = document.querySelectorAll('.tilt-element');
        
        tiltElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const tiltX = ((y - centerY) / centerY) * -8; // Graus de inclinação no eixo X
                const tiltY = ((x - centerX) / centerX) * 8;  // Graus de inclinação no eixo Y
                
                el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
                el.style.transition = 'transform 0.1s ease';
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                el.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
        });
    }

    // ==========================================
    // 5. BANNER DE TECNOLOGIAS DINÂMICO
    // ==========================================
    const techTrack = document.getElementById('tech-track');
    if (techTrack) {

        const techs = [
            "Inteligência Artificial Cognitiva", 
            "Processamento de Linguagem Natural (NLP)", 
            "Automação Omnichannel", 
            "Machine Learning Aplicado", 
            "Análise Preditiva de Dados", 
            "Roteamento Neural de Leads", 
            "Arquitetura Cloud Escalável", 
            "Criptografia Ponta a Ponta"
        ];
        
        // Criar a string de tecnologias com separadores dourados
        const techString = techs.map(tech => `<span><i>◆</i> ${tech}</span>`).join('');
        // Duplicar 4 vezes para garantir um scroll infinito sem quebras na tela
        techTrack.innerHTML = techString + techString + techString + techString;
    }

    // ==========================================
    // 6. SIMULADOR DE CHAT DO SUPREMINHO (Digitação)
    // ==========================================
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
        const messages = [
            { type: 'bot', text: 'Olá! Eu sou o <strong>Supreminho</strong>, assistente da Supreme-Tech. Como posso te chamar?' },
            { type: 'client', text: 'Pedro', delay: 1800 },
            { type: 'bot', text: 'Prazer, Pedro! Qual é o nome da sua empresa?', delay: 2800 },
            { type: 'client', text: 'Construtora Apex', delay: 4500 },
            { type: 'bot', text: 'Legal! Vou te transferir para nossos especialistas agora mesmo.', delay: 5800 }
        ];

        messages.forEach((msg, index) => {
            setTimeout(() => {
                const msgDiv = document.createElement('div');
                msgDiv.className = `msg msg-${msg.type}`;
                msgDiv.innerHTML = msg.text;
                chatContainer.appendChild(msgDiv);
                
                // Rolagem automática para o final do chat
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }, msg.delay || (index * 800)); // Delay progressivo se não especificado
        });
    }

    // ==========================================
    // 7. EFEITO DE BLUR NO MENU AO ROLAR A TELA
    // ==========================================
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(7, 16, 30, 0.95)';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            nav.style.background = 'rgba(7, 16, 30, 0.8)';
            nav.style.boxShadow = 'none';
        }
    });
});
