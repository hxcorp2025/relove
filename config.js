// config.js - Configurações editáveis do Quiz

const QUIZ_CONFIG = {
    // Configurações gerais
    brand: {
        name: "Relatio",
        colors: {
            primary: "#3a78e6",
            secondary: "#d53090",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        }
    },

    // Links de redirecionamento
    redirects: {
        // Para onde redirecionar após completar o quiz
        finish: "https://seusite.com/obrigado",
        
        // Ou usar uma das opções abaixo:
        // finish: "https://seusite.com/produto", 
        // finish: "mailto:contato@seusite.com?subject=Plano Personalizado",
        // finish: "https://wa.me/5511999999999?text=Olá, completei o quiz!"
        
        // Abrir em nova aba (true/false)
        openInNewTab: false
    },

    // Textos personalizáveis
    texts: {
        headerTitle: "Relatio",
        
        // Slide 1
        slide1: {
            title: "Para começar, qual é o seu <span class='highlight'>gênero?</span>",
            answers: [
                { text: "👨 Masculino", value: "male" },
                { text: "👩 Feminino", value: "female" }
            ]
        },

        // Slide 2
        slide2: {
            title: "Qual é o <span class='highlight'>status atual</span> do relacionamento?",
            answers: [
                { text: "Terminou recentemente (menos de 3 meses)", value: "ended_recently" },
                { text: "Terminou há um tempo (3-12 meses)", value: "ended_while_ago" },
                { text: "Terminou há muito tempo (mais de 1 ano)", value: "ended_long_ago" },
                { text: "É complicado", value: "complicated" }
            ]
        },

        // Slide 3
        slide3: {
            title: "Como se chama a pessoa que você quer <span class='highlight'>reconquistar?</span>",
            placeholder: "Digite o nome..."
        },

        // Slide 4
        slide4: {
            title: "Por quanto tempo vocês <span class='highlight'>estiveram juntos?</span>",
            answers: [
                { text: "Alguns meses", value: "few_months" },
                { text: "6 meses a 1 ano", value: "6_months_1_year" },
                { text: "1-3 anos", value: "1_3_years" },
                { text: "Mais de 3 anos", value: "more_than_3" }
            ]
        },

        // Slide 5
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

        // Slide 6
        slide6: {
            title: "Qual é o seu <span class='highlight'>principal objetivo?</span>",
            answers: [
                { text: "Reconquistar definitivamente", value: "get_back" },
                { text: "Melhorar nossa comunicação", value: "improve_relationship" },
                { text: "Manter uma amizade", value: "friendship" },
                { text: "Ter um encerramento saudável", value: "closure" }
            ]
        },

        // Slide 7 - Progresso
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

        // Slide 8 - Email
        slide8: {
            title: "Digite seu email para receber seu<br><span class='highlight'>Plano Personalizado</span>",
            placeholder: "Digite seu melhor email...",
            buttonText: "Receber Plano Gratuito",
            privacyText: "Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais"
        },

        // Textos gerais
        continueButton: "Continuar",
        backButton: "←"
    },

    // Depoimentos/Testimonials
    testimonials: [
        {
            name: "Cillian",
            avatar: "C",
            title: "As mesas viraram!",
            message: "Ela disse: 'Sinto sua falta, preciso de você, não posso viver sem você!' Nunca pensei que ouviria essas palavras novamente. Há uma semana, nem conversávamos após o término...",
            stars: 5,
            country: "Brasil"
        },
        {
            name: "Mike",
            avatar: "M", 
            title: "Essa coisa de oxitocina funciona!",
            message: "Cara, depois que ela partiu, eu era uma bagunça. Mandando mensagens, presentes, tudo... nada funcionava. Encontrei o Relatio e essa técnica de 'provocar oxitocina'? Mudou o jogo. No último fim de semana, ela me convidou para sair. Incrível.",
            stars: 5,
            country: "EUA"
        },
        {
            name: "Alex",
            avatar: "A",
            title: "Sem enrolação, só resultados",
            message: "Obrigado pessoal! Melhor decisão que já tomei. Eu estava super cético no início. Quer dizer, um guia realmente pode ajudar? Mas o Relatio me surpreendeu. Estamos indo devagar, mas está parecendo bom. Sério, muito grato!",
            stars: 5,
            country: "Canadá"
        }
    ],

    // Configurações técnicas
    technical: {
        totalSlides: 8,
        progressAnimationSpeed: 100, // em ms
        fadeAnimationDuration: 500 // em ms
    }
};

// Função para aplicar configurações personalizadas
function applyCustomConfig() {
    // Aplicar cores personalizadas
    if (QUIZ_CONFIG.brand.colors) {
        const style = document.createElement('style');
        style.textContent = `
            :root {
                --primary-color: ${QUIZ_CONFIG.brand.colors.primary};
                --secondary-color: ${QUIZ_CONFIG.brand.colors.secondary};
                --gradient: ${QUIZ_CONFIG.brand.colors.gradient};
            }
            
            .highlight {
                background: ${QUIZ_CONFIG.brand.colors.gradient};
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            .answer-btn:hover {
                border-color: ${QUIZ_CONFIG.brand.colors.primary};
                box-shadow: 0 4px 20px ${QUIZ_CONFIG.brand.colors.primary}33;
            }
            
            .continue-btn {
                background: ${QUIZ_CONFIG.brand.colors.gradient};
            }
            
            .logo {
                color: ${QUIZ_CONFIG.brand.colors.primary};
            }
        `;
        document.head.appendChild(style);
    }
    
    // Aplicar textos personalizados
    if (QUIZ_CONFIG.texts.headerTitle) {
        document.querySelector('.logo').textContent = QUIZ_CONFIG.texts.headerTitle;
    }
}

// Função para personalizar redirecionamentos
function handleFinishQuiz() {
    const redirect = QUIZ_CONFIG.redirects;
    
    if (redirect.openInNewTab) {
        window.open(redirect.finish, '_blank');
    } else {
        window.location.href = redirect.finish;
    }
}

// Função para renderizar depoimentos dinamicamente
function renderTestimonials() {
    const container = document.querySelector('.testimonials-slider');
    container.innerHTML = '';
    
    QUIZ_CONFIG.testimonials.forEach(testimonial => {
        const testimonialHTML = `
            <div class="feedback-widget">
                <div class="feedback-head">
                    <div class="feedback-avatar">${testimonial.avatar}</div>
                    <div>
                        <div class="feedback-name">${testimonial.name}</div>
                        <div class="feedback-stars">
                            ${Array(testimonial.stars).fill('<div class="star"></div>').join('')}
                        </div>
                    </div>
                </div>
                <div class="feedback-title">${testimonial.title}</div>
                <div class="feedback-message">${testimonial.message}</div>
            </div>
        `;
        container.innerHTML += testimonialHTML;
    });
}
