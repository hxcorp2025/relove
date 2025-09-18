// config.js - Configurações do Sistema Completo

const SYSTEM_CONFIG = {
    // Configurações gerais
    brand: {
        name: "Relatio",
        colors: {
            primary: "#3a78e6",
            secondary: "#d53090", 
            tertiary: "#0080FF",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        }
    },

    // Links de redirecionamento
    redirects: {
        // Após completar o quiz
        afterQuiz: "showOfferPage", // Ou URL externa
        
        // Após clicar em "OBTER MEU PLANO"  
        payment: "https://seusite.com/pagamento",
        
        // Exemplos de outros redirecionamentos:
        // payment: "https://hotmart.com/seu-produto",
        // payment: "mailto:contato@seusite.com?subject=Quero%20o%20plano",
        // payment: "https://wa.me/5511999999999?text=Olá,%20quero%20o%20plano!",
        
        // Configurações de abertura
        openInNewTab: false
    },

    // Timer de desconto (em minutos)
    timer: {
        initialMinutes: 10,
        initialSeconds: 0
    },

    // Textos do Quiz (editáveis)
    quiz: {
        headerTitle: "Relatio",
        
        slides: {
            slide1: {
                title: "Para começar, qual é o seu <span class='highlight'>gênero?</span>",
                answers: [
                    { text: "👨 Masculino", value: "male" },
                    { text: "👩 Feminino", value: "female" }
                ]
            },
            
            slide2: {
                title: "Qual é o <span class='highlight'>status atual</span> do relacionamento?",
                answers: [
                    { text: "Terminou recentemente (menos de 3 meses)", value: "ended_recently" },
                    { text: "Terminou há um tempo (3-12 meses)", value: "ended_while_ago" },
                    { text: "Terminou há muito tempo (mais de 1 ano)", value: "ended_long_ago" },
                    { text: "É complicado", value: "complicated" }
                ]
            },
            
            slide3: {
                title: "Como se chama a pessoa que você quer <span class='highlight'>reconquistar?</span>",
                placeholder: "Digite o nome..."
            },
            
            slide4: {
                title: "Por quanto tempo vocês <span class='highlight'>estiveram juntos?</span>",
                answers: [
                    { text: "Alguns meses", value: "few_months" },
                    { text: "6 meses a 1 ano", value: "6_months_1_year" },
                    { text: "1-3 anos", value: "1_3_years" },
                    { text: "Mais de 3 anos", value: "more_than_3" }
                ]
            },
            
            slide5: {
                title: "Com que frequência vocês <span class='highlight'>se falam</span> atualmente?",
                answers: [
                    { text: "Diariamente", value: "daily" },
                    { text: "Semanalmente", value: "weekly" },
                    { text: "Mensalmente", value: "monthly" },
                    { text: "Raramente", value: "rarely" },
                    { text: "Não nos falamos", value: "no_contact" }
                ]
            },
            
            slide6: {
                title: "Qual é o seu <span class='highlight'>principal objetivo?</span>",
                answers: [
                    { text: "Reconquistar definitivamente", value: "get_back" },
                    { text: "Melhorar nossa comunicação", value: "improve_relationship" },
                    { text: "Manter uma amizade", value: "friendship" },
                    { text: "Ter um encerramento saudável", value: "closure" }
                ]
            },
            
            slide7: {
                title: "<span class='highlight' style='font-size: 36px;'>1.3 milhão de pessoas</span><br><em style='font-size: 18px;'>escolheram nosso método</em>",
                loadingTexts: [
                    "Coletando suas respostas...",
                    "Analisando seu perfil...",
                    "Processando dados...",
                    "Priorizando desafios...",
                    "Definindo objetivos...",
                    "Criando seu plano personalizado..."
                ]
            },
            
            slide8: {
                title: "Digite seu email para receber seu<br><span class='highlight'>Plano Personalizado</span>",
                placeholder: "Digite seu melhor email...",
                buttonText: "Receber Plano Gratuito",
                privacyText: "Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais"
            }
        },
        
        continueButton: "Continuar",
        backButton: "←"
    },

    // Textos da Página de Oferta
    offerPage: {
        timer: {
            text: "desconto expira em",
            buttonText: "OBTER MEU PLANO"
        },
        
        promo: {
            headerNow: "Agora",
            headerGoal: "Objetivo",
            goalPrefix: "Reconquistar",
            probabilityText: "Probabilidade de Sucesso:",
            probabilityValue: "92% (Alta)",
            timingText: "Tempo para agir:",
            timingValue: "Urgente*",
            disclaimer: "*Baseado no seu perfil, cada semana de hesitação <span class='text-highlight2'>diminui</span> sua chance de reconquista em <span class='text-highlight2'>33%</span>"
        },
        
        titles: {
            personalPlan: "Aqui está seu Plano Pessoal",
            scientificTechnique: "A Técnica Mais <span class='text-underline'>Cientificamente<br>Validada</span> Para Reconquistar<br>Seu Ex de Volta",
            whatYouGet: "O que você recebe?",
            statistics: "Faça seu Ex ansiar por sua atenção com nosso<br>Plano Pessoal<br><span class='text-highlight3'>Reconquiste Seu Ex</span>",
            mediaCoverage: "Nossas técnicas foram<br>cobertas em:",
            testimonials: "Nossos clientes amam o Relatio",
            faq: "FAQ",
            guarantee: "Garantia de 30 Dias"
        },
        
        products: [
            {
                id: "plan-1",
                name: "Plano 4 semanas",
                badge: "mais popular",
                oldPrice: "R$ 4,00",
                currentPrice: { currency: "R$ ", leadNum: "1", secondNum: "99", period: "por dia" },
                description: "Plano de 4 semanas para reconquista rápida"
            },
            {
                id: "plan-2", 
                name: "Plano 12 semanas",
                oldPrice: "R$ 2,24",
                currentPrice: { currency: "R$ ", leadNum: "1", secondNum: "12", period: "por dia" },
                description: "Plano estendido de 12 semanas"
            },
            {
                id: "plan-3",
                name: "Plano 24 semanas", 
                oldPrice: "R$ 1,76",
                currentPrice: { currency: "R$ ", leadNum: "0", secondNum: "88", period: "por dia" },
                description: "Plano completo de 24 semanas"
            }
        ],
        
        benefits: [
            "Você precisa seguir exatamente o plano, e ficará surpreso com a rapidez que ela ficará obcecada com a ideia de estar com você",
            "Você será capaz de criar um senso de desejo tão Poderoso e Incontrolável que ela ficará completamente incapaz de resistir", 
            "O cérebro dela será quimicamente programado para pensar em você como seu ÚNICO homem"
        ],
        
        whatYouGetList: [
            "Técnicas extremamente poderosas e comprovadas para despertar a oxitocina dela, personalizadas com base no seu perfil de relacionamento",
            "Seu ex começará a sonhar com você, se perguntando quando você vai mandar uma mensagem ou ligar para ela",
            "Ela ficará irresistivelmente e incontrolavelmente atraída por você", 
            "Ela estará de volta na sua cama, pronta para se comprometer como nunca esteve antes",
            "Ela terá certeza de que foi ideia dela te reconquistar",
            "Você terá confiança e autoestima elevadas"
        ],
        
        statistics: [
            { percent: "94%", text: "dos homens que usam o Relatio <span class='text-highlight3'>voltam</span> a ficar com seu <span class='text-highlight3'>Ex</span>" },
            { percent: "87%", text: "notaram <span class='text-highlight3'>mudanças positivas</span> no comportamento da parceira e <span class='text-highlight3'>maior interesse</span> no futuro em comum" },
            { percent: "72%", text: "tiveram mudanças positivas na sua <span class='text-highlight3'>autoestima</span> e na forma como outras pessoas os <span class='text-highlight3'>percebem</span>" }
        ],
        
        faq: [
            {
                question: "Por que devo escolher este plano?",
                answer: "Nossos planos cuidadosamente personalizados são feitos por especialistas para abordar seus desafios de relacionamento e enriquecer sua vida amorosa. Criados por uma equipe de especialistas em relacionamento experientes, esses planos são adaptados para atender suas necessidades individuais, oferecendo soluções e orientações eficazes."
            },
            {
                question: "Como posso me beneficiar deste plano?", 
                answer: "Este plano é para melhorar seus relacionamentos, independentemente de você estar solteiro ou em um relacionamento comprometido. Atendemos às suas necessidades e objetivos específicos, oferecendo soluções e apoio eficazes."
            },
            {
                question: "O que preciso para ter sucesso?",
                answer: "Complete as tarefas diárias, forneça feedback e estude os materiais. Projetamos o plano de forma que cada dia o aproxime do seu objetivo, passo a passo."
            },
            {
                question: "E se for difícil para mim me manter motivado?",
                answer: "Não se preocupe! Nosso plano foi projetado para ajudá-lo a construir motivação gradualmente, para que você não precise depender muito dela desde o início. Além disso, estamos aqui para fornecer suporte constante e orientação especializada para mantê-lo motivado durante toda sua jornada."
            }
        ],
        
        guarantee: "Nosso plano é apoiado por uma garantia de 100% de devolução do dinheiro. Estamos tão confiantes em nosso programa que garantimos um reembolso total dentro de 30 dias após a compra se você não vir uma transformação positiva no seu bem-estar íntimo e puder provar que seguiu seu plano conforme orientado."
    },

    // Depoimentos
    testimonials: [
        {
            name: "Cillian",
            avatar: "C",
            title: "As mesas viraram!",
            message: "Ela disse: 'Sinto sua falta, preciso de você, não posso viver sem você!' Nunca pensei que ouviria essas palavras novamente...",
            stars: 5
        },
        {
            name: "Mark", 
            avatar: "M",
            title: "O amor da minha vida voltou",
            message: "'Isso não está funcionando. Eu não quero mais ficar com você' - ela disse baixinho e foi como um soco no estômago. Com apenas uma frase, meu mundo desabou. Passei noites deitado na cama, olhando para o teto. Quando fiz o quiz do Relatio, estava meio cético. Mas quando comecei a usar meu plano, vi do que vocês estavam falando...",
            stars: 5
        },
        {
            name: "Robert",
            avatar: "R", 
            title: "Relatio realmente sabe o que faz",
            message: "Tenho que dar crédito ao Relatio. Depois que eu e minha garota terminamos, eu estava bombardeando o telefone dela, mandando flores, presentes, mas não importava o quanto eu tentasse, nada parecia funcionar. Não foi até eu usar o Relatio que entendi o que estava errado...",
            stars: 5
        }
    ]
};

// Funções para aplicar as configurações
function applyCustomConfig() {
    // Aplicar cores personalizadas
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --primary-color: ${SYSTEM_CONFIG.brand.colors.primary};
            --secondary-color: ${SYSTEM_CONFIG.brand.colors.secondary};
            --tertiary-color: ${SYSTEM_CONFIG.brand.colors.tertiary}; 
            --gradient: ${SYSTEM_CONFIG.brand.colors.gradient};
        }
        
        .highlight {
            background: ${SYSTEM_CONFIG.brand.colors.gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .logo {
            color: ${SYSTEM_CONFIG.brand.colors.primary};
        }
        
        .text-highlight3 {
            color: ${SYSTEM_CONFIG.brand.colors.tertiary};
        }
    `;
    document.head.appendChild(style);
}

// Função para personalizar redirecionamentos
function handleRedirection(type) {
    const redirects = SYSTEM_CONFIG.redirects;
    let url;
    
    switch(type) {
        case 'afterQuiz':
            if (redirects.afterQuiz === 'showOfferPage') {
                showOfferPage();
                return;
            }
            url = redirects.afterQuiz;
            break;
        case 'payment':
            url = redirects.payment;
            break;
        default:
            return;
    }
    
    if (redirects.openInNewTab) {
        window.open(url, '_blank');
    } else {
        window.location.href = url;
    }
}

// Aplicar configurações quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    applyCustomConfig();
    
    // Aplicar nome da marca
    const logoElements = document.querySelectorAll('.logo');
    logoElements.forEach(el => el.textContent = SYSTEM_CONFIG.brand.name);
});
