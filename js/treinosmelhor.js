document.addEventListener('DOMContentLoaded', function () {
  const workouts = {
    peito: [
      {
        nome: "Supino Reto",
        descricao: "3 séries de 12 repetições",
        imagem: "../treinos/peitoral/supino.png"
      },
      {
        nome: "Cruxifixo",
        descricao: "3 séries de 12 repetições",
        imagem: "../treinos/peitoral/cruxifixo.png"
      },
      {
        nome: "Flexão de Braço",
        descricao: "3 séries até a falha",
        imagem: "../treinos/peitoral/flexaobraço.webp"
      }
    ],
    biceps: [
      {
        nome: "Rosca Direta",
        descricao: "3 séries de 12, 10, 8 repetições com aumento de peso",
        imagem: "../treinos/biceps/treino2biceps.png"
      },
      {
        nome: "Martelo com Halteres",
        descricao: "3 séries de 12 repetições",
        imagem: "../treinos/biceps/treino3.png"
      },
      {
        nome: "Rosca Alternada",
        descricao: "3 séries de 10-12 repetições (cada braço)",
        imagem: "../treinos/biceps/treino4.png"
      }
    ],
    ombro: [
      {
        nome: "Desenvolvimento com Halteres",
        descricao: "3 séries de 10-12 repetições",
        imagem: "../treinos/ombro/treino1.png"
      },
      {
        nome: "Elevação Lateral",
        descricao: "3 séries de 15 repetições",
        imagem: "../treinos/ombro/treino2.png"
      },
      {
        nome: "Crucifixo Invertido",
        descricao: "3 séries de 12 repetições",
        imagem: "../treinos/ombro/treino3.png"
      }
    ],
    costas: [
      {
        nome: "Remada Curvada",
        descricao: "3 séries de 10-12 repetições",
        imagem: "../treinos/costas/treino1.png"
      },
      {
        nome: "Barra Fixa",
        descricao: "3 séries até a falha",
        imagem: "../treinos/costas/treino2.png"
      },
      {
        nome: "Puxada Frontal",
        descricao: "3 séries de 12 repetições",
        imagem: "../treinos/costas/treino3.png"
      },
      {
        nome: "Encolhimento de Ombros com Barra",
        descricao: "3 séries de 15 repetições",
        imagem: "../treinos/costas/trapezio.webp"
      }
    ],
    pernas: [
      {
        nome: "Agachamento",
        descricao: "3 séries de 10-12 repetições",
        imagem: "../treinos/pernas/agachamento.webp"
      },
      {
        nome: "Cadeira Extensora",
        descricao: "3 séries até a falha",
        imagem: "../treinos/pernas/extensora.webp"
      },
      {
        nome: "Stiff com Barra",
        descricao: "3 séries de 12 repetições",
        imagem: "../treinos/pernas/stiff.jpg"
      },
      {
        nome: "Mesa Flexora",
        descricao: "3 séries de 12 repetições",
        imagem: "../treinos/pernas/flexora.webp"
      },
      {
        nome: "Elevação Pélvica",
        descricao: "3 séries de 12 repetições",
        imagem: "../treinos/pernas/elevaçao.webp"
      }
    ],
    tricips: [
      {
        nome: "Mergulho entre Bancos",
        descricao: "3 séries de 12 repetições",
        imagem: "../treinos/tricips/mergulho.webp"
      },
      {
        nome: "Tricips na Polia",
        descricao: "3 séries de 12 repetições",
        imagem: "../treinos/tricips/polia.webp"
      },
      {
        nome: "Tricips Testa",
        descricao: "3 séries de 12 repetições",
        imagem: "../treinos/tricips/testa.webp"
      }
    ],
    abdomen: [
      {
        nome: "Abdominal Infra",
        descricao: "3 séries até a falha",
        imagem: "../treinos/abdomen/infra.avif"
      },
      {
        nome: "Prancha Isométrica",
        descricao: "3 séries até a falha",
        imagem: "../treinos/abdomen/prancha.jpg"
      },
      {
        nome: "Abdominal Oblíquo",
        descricao: "3 séries até a falha",
        imagem: "../treinos/abdomen/obliquo.jpg"
      }
    ],
    panturrilha: [
      {
        nome: "Elevação Sentado",
        descricao: "3 séries de 15 repetições",
        imagem: "../treinos/panturrilha/sentado.jpg"
      },
      {
        nome: "Elevação em Pé",
        descricao: "3 séries até a falha",
        imagem: "../treinos/panturrilha/empe.webp"
      },
      {
        nome: "Elevação Unilateral",
        descricao: "3 séries de 15 repetições",
        imagem: "../treinos/panturrilha/unilateral.webp"
      }
    ]
  };

  const select = document.getElementById("muscle-group");
  const button = document.getElementById("generate-workout");
  const result = document.getElementById("workout-result");

  button.addEventListener("click", () => {
    const grupo = select.value;
    result.innerHTML = "";

    if (!workouts[grupo]) {
      result.innerHTML = "<p class='error-message'>Escolha um grupo muscular válido.</p>";
      return;
    }

    workouts[grupo].forEach(exercicio => {
      result.innerHTML += `
        <div class="meal-card">
          <div class="meal-header">
            <h4>${exercicio.nome}</h4>
          </div>
          <img src="${exercicio.imagem}" alt="${exercicio.nome}" style="width:60%; border-radius: 8px; margin: 10px 0;">
          <p>${exercicio.descricao}</p>
        </div>
      `;
    });

    result.style.display = "block";
    result.scrollIntoView({ behavior: "smooth" });
  });
});
