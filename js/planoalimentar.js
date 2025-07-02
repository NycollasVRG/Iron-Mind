document.addEventListener('DOMContentLoaded', function() {
    // Dados completos dos planos nutricionais
    const nutritionPlans = {
        hipertrofia: [
            { 
                refeicao: "Café da manhã", 
                alimentos: [
                    "3 ovos inteiros (omelete ou mexidos)",
                    "2 fatias de pão integral",
                    "1 banana média",
                    "1 colher de sopa de pasta de amendoim",
                    "1 xícara de leite desnatado"
                ]
            },
            { 
                refeicao: "Lanche da manhã", 
                alimentos: [
                    "1 scoop de whey protein",
                    "1/2 xícara de aveia",
                    "10 amêndoas",
                    "1 fruta (maçã ou pêra)"
                ]
            },
            { 
                refeicao: "Almoço", 
                alimentos: [
                    "200g de frango grelhado",
                    "1 xícara de arroz integral",
                    "1/2 xícara de feijão",
                    "1 batata-doce média",
                    "Vegetais à vontade (brócolis, cenoura, abobrinha)"
                ]
            },
            { 
                refeicao: "Lanche da tarde", 
                alimentos: [
                    "1 lata de atum em água",
                    "2 fatias de pão integral",
                    "1/2 abacate",
                    "1 colher de azeite extra virgem"
                ]
            },
            { 
                refeicao: "Jantar", 
                alimentos: [
                    "200g de carne vermelha magra",
                    "1 xícara de quinoa",
                    "1 porção de legumes grelhados",
                    "1 colher de sopa de azeite"
                ]
            },
            { 
                refeicao: "Ceia", 
                alimentos: [
                    "1 porção de queijo cottage",
                    "1 colher de chia",
                    "1 punhado de castanhas",
                    "1 xícara de chá verde"
                ]
            }
        ],
        definicao: [
            { 
                refeicao: "Café da manhã", 
                alimentos: [
                    "4 claras de ovo + 1 gema",
                    "1 fatia de pão integral",
                    "1/2 abacate pequeno",
                    "1 xícara de chá verde"
                ]
            },
            { 
                refeicao: "Lanche da manhã", 
                alimentos: [
                    "1 iogurte natural desnatado",
                    "1 colher de linhaça",
                    "1/2 xícara de morangos",
                    "5 castanhas de caju"
                ]
            },
            { 
                refeicao: "Almoço", 
                alimentos: [
                    "150g de peixe (salmão ou tilápia)",
                    "1/2 xícara de arroz integral",
                    "1 xícara de lentilha",
                    "Vegetais crus à vontade",
                    "1 colher de azeite"
                ]
            },
            { 
                refeicao: "Lanche da tarde", 
                alimentos: [
                    "1 scoop de whey protein isolado",
                    "1 colher de pasta de amendoim",
                    "1 maçã pequena"
                ]
            },
            { 
                refeicao: "Jantar", 
                alimentos: [
                    "150g de frango grelhado",
                    "1 xícara de abóbora cozida",
                    "1 porção de aspargos",
                    "Salada verde à vontade"
                ]
            },
            { 
                refeicao: "Ceia", 
                alimentos: [
                    "1 porção de queijo cottage",
                    "1 colher de semente de girassol",
                    "1 xícara de chá de camomila"
                ]
            }
        ],
        emagrecimento: [
            { 
                refeicao: "Café da manhã", 
                alimentos: [
                    "1 iogurte natural desnatado",
                    "1 colher de chia",
                    "1/2 xícara de granola sem açúcar",
                    "1 fruta pequena (kiwi ou morangos)"
                ]
            },
            { 
                refeicao: "Lanche da manhã", 
                alimentos: [
                    "2 ovos cozidos",
                    "1 punhado de tomates cereja",
                    "1 xícara de chá verde"
                ]
            },
            { 
                refeicao: "Almoço", 
                alimentos: [
                    "120g de peixe branco grelhado",
                    "1 xícara de vegetais crus (alface, rúcula, pepino)",
                    "1/2 xícara de quinoa",
                    "1 colher de azeite"
                ]
            },
            { 
                refeicao: "Lanche da tarde", 
                alimentos: [
                    "1 smoothie verde (couve + abacaxi + gengibre)",
                    "1 colher de farinha de linhaça",
                    "2 castanhas-do-pará"
                ]
            },
            { 
                refeicao: "Jantar", 
                alimentos: [
                    "100g de frango grelhado",
                    "1 xícara de sopa de legumes",
                    "1 porção de brócolis no vapor"
                ]
            },
            { 
                refeicao: "Ceia", 
                alimentos: [
                    "1 xícara de chá de hibisco",
                    "1 colher de semente de abóbora",
                    "1 fatia fina de queijo minas"
                ]
            }
        ]
    };

    // Elementos do DOM
    const generateBtn = document.getElementById('generate-plan');
    const goalSelect = document.getElementById('goal');
    const planContainer = document.getElementById('nutrition-plan-result');

    // Função para gerar o plano alimentar
    function generateNutritionPlan(goal) {
        if (!nutritionPlans[goal]) {
            showError("Por favor, selecione um objetivo válido.");
            return;
        }
        
        const planData = nutritionPlans[goal];
        const goalName = getGoalName(goal);
        
        let html = `
            <div class="plan-header">
                <h3>Plano Alimentar para ${goalName}</h3>
                <p class="plan-description">${getGoalDescription(goal)}</p>
            </div>
        `;
        
        planData.forEach(meal => {
            html += `
                <div class="meal-card">
                    <div class="meal-header">
                        <h4>${meal.refeicao}</h4>
                        <span class="meal-time">${getMealTime(meal.refeicao)}</span>
                    </div>
                    <ul class="food-list">
                        ${meal.alimentos.map(food => `<li>${food}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
        
        // Adiciona dicas finais
        html += `
            <div class="nutrition-tips">
                <h4>Dicas Importantes:</h4>
                <ul>
                    ${getNutritionTips(goal).map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        `;
        
        planContainer.innerHTML = html;
        planContainer.style.display = 'block';
        
        // Rolagem suave para o resultado
        planContainer.scrollIntoView({ behavior: 'smooth' });
    }

    // Funções auxiliares
    function getGoalName(goal) {
        const names = {
            hipertrofia: "Hipertrofia Muscular",
            definicao: "Definição Muscular",
            emagrecimento: "Emagrecimento"
        };
        return names[goal] || "Seu Objetivo";
    }

    function getGoalDescription(goal) {
        const descriptions = {
            hipertrofia: "Plano rico em proteínas e carboidratos complexos para maximizar o ganho de massa muscular",
            definicao: "Equilíbrio perfeito entre proteínas e nutrientes para definir seus músculos",
            emagrecimento: "Plano com alimentos termogênicos e de baixa caloria para perda de peso saudável"
        };
        return descriptions[goal] || "";
    }

    function getMealTime(mealName) {
        const times = {
            "Café da manhã": "07:00 - 08:00",
            "Lanche da manhã": "10:00 - 10:30",
            "Almoço": "12:30 - 13:30",
            "Lanche da tarde": "16:00 - 16:30",
            "Jantar": "19:30 - 20:30",
            "Ceia": "22:00 - 22:30"
        };
        return times[mealName] || "";
    }

    function getNutritionTips(goal) {
        const tips = {
            hipertrofia: [
                "Mantenha-se hidratado - beba pelo menos 3L de água por dia",
                "Consuma proteína a cada 3-4 horas",
                "Priorize carboidratos complexos antes e depois do treino",
                "Durma pelo menos 7-8 horas por noite para melhor recuperação"
            ],
            definicao: [
                "Controle a ingestão de sódio para reduzir retenção líquida",
                "Mantenha o déficit calórico moderado (200-300kcal)",
                "Aumente o consumo de fibras para melhor saciedade",
                "Faça cardio em jejum 2-3x por semana (opcional)"
            ],
            emagrecimento: [
                "Beba água antes das refeições para ajudar na saciedade",
                "Evite bebidas calóricas - prefira água, chás e café sem açúcar",
                "Mastigue devagar e coma sem distrações",
                "Inclua alimentos termogênicos como gengibre e canela"
            ]
        };
        return tips[goal] || [];
    }

    function showError(message) {
        planContainer.innerHTML = `<p class="error-message">${message}</p>`;
        planContainer.style.display = 'block';
    }

    // Event Listeners
    if (generateBtn && goalSelect && planContainer) {
        generateBtn.addEventListener('click', function() {
            const selectedGoal = goalSelect.value;
            generateNutritionPlan(selectedGoal);
        });
    }
});