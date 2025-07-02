document.addEventListener('DOMContentLoaded', function () {
    const trainingPlans = {
        hipertrofia: {
            nome: "Hipertrofia (Ganho de Massa Muscular)",
            descricao: "Foco em carga moderada a alta, 8–12 repetições, 60–90s de descanso, execução controlada. Divisão ABC.",
            treinos: [
                {
                    dia: "A – Peito, Tríceps e Ombro",
                    exercicios: [
                        "Supino reto – 4x10",
                        "Supino inclinado – 3x10",
                        "Crucifixo – 3x12",
                        "Tríceps testa – 3x10",
                        "Tríceps corda – 3x12",
                        "Elevação lateral – 3x15"
                    ]
                },
                {
                    dia: "B – Costas e Bíceps",
                    exercicios: [
                        "Puxada frontal – 4x10",
                        "Remada curvada – 3x10",
                        "Remada baixa – 3x12",
                        "Rosca direta – 3x10",
                        "Rosca alternada – 3x12"
                    ]
                },
                {
                    dia: "C – Pernas e Abdômen",
                    exercicios: [
                        "Agachamento livre – 4x10",
                        "Leg press – 3x12",
                        "Mesa flexora – 3x12",
                        "Cadeira extensora – 3x15",
                        "Elevação de pernas – 3x15",
                        "Abdominal infra no banco – 3x20"
                    ]
                }
            ]
        },
        emagrecimento: {
            nome: "Emagrecimento (Perder Gordura)",
            descricao: "Foco em alta intensidade, circuitos, repetições altas (12–20), pouco descanso (15–30s).", 
            treinos: [
                {
                    dia: "Segunda, Quarta, Sexta – Força + Cardio",
                    exercicios: [
                        "Agachamento com halteres – 3x15",
                        "Flexão de braço – 3x10–15",
                        "Remada curvada – 3x15",
                        "Abdominal prancha – 3x30s",
                        "Burpee – 3x10",
                        "Pular corda ou corrida 15–20 min após o treino"
                    ]
                },
                {
                    dia: "Terça, Quinta – HIIT ou Cardio Intervalado",
                    exercicios: [
                        "HIIT: 30s corrida intensa / 1min leve (20 min total)",
                        "Circuito 5x: agachamento, polichinelo, prancha, mountain climbers, saltos (30s cada, sem pausa)"
                    ]
                }
            ]
        },
        manutencao: {
            nome: "Manutenção Muscular",
            descricao: "Foco em equilíbrio entre força, resistência e mobilidade. Cargas moderadas, descanso médio (30–60s).",
            treinos: [
                {
                    dia: "A – Corpo Superior",
                    exercicios: [
                        "Supino reto – 3x12",
                        "Remada baixa – 3x12",
                        "Desenvolvimento – 3x12",
                        "Rosca direta – 3x12",
                        "Tríceps corda – 3x12"
                    ]
                },
                {
                    dia: "B – Pernas e Core",
                    exercicios: [
                        "Agachamento – 3x12",
                        "Stiff – 3x12",
                        "Cadeira extensora – 3x15",
                        "Prancha – 3x30s",
                        "Elevação de pernas – 3x15",
                        "+ Cardio leve 2x/semana (caminhada, pedalada, natação)"
                    ]
                }
            ]
        }
    };

    const generateBtn = document.getElementById('generate-plan');
    const goalSelect = document.getElementById('goal');
    const resultContainer = document.getElementById('nutrition-plan-result');

    function renderPlan(goal) {
        const plan = trainingPlans[goal];

        if (!plan) {
            resultContainer.innerHTML = '<p class="error-message">Selecione um objetivo válido.</p>';
            return;
        }

        let html = `
            <div class="plan-header">
                <h3>Treino para ${plan.nome}</h3>
                <p>${plan.descricao}</p>
            </div>
        `;

        plan.treinos.forEach(treino => {
            html += `
                <div class="training-day">
                    <h4>${treino.dia}</h4>
                    <ul>
                        ${treino.exercicios.map(ex => `<li>${ex}</li>`).join('')}
                    </ul>
                </div>
            `;
        });

        resultContainer.innerHTML = html;
        resultContainer.style.display = 'block';
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }

    if (generateBtn && goalSelect && resultContainer) {
        generateBtn.addEventListener('click', function () {
            const selectedGoal = goalSelect.value;
            renderPlan(selectedGoal);
        });
    }
});
