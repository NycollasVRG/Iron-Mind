document.addEventListener('DOMContentLoaded', function () {
  const workouts = {
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
