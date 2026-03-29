// ==========================================
// FUNÇÕES DA LANDING PAGE SUPREME-TECH
// ==========================================

// Substitua pelo seu número de atendimento (com DDD, sem espaços)
const numeroWhatsApp = "552199066299"; 

function chamarWhatsApp(plano) {
    let mensagem = "";

    // Define a mensagem automática baseada no botão que o cliente clicou
    switch (plano) {
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

    // Codifica a mensagem para o formato de link (troca espaços por %20, etc)
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Abre a nova guia direto no WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    window.open(url, '_blank');
}
