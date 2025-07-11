const diasDaSemana = ["segunda", "terça", "quarta", "quinta", "sexta"];
const opcoesTreino = ["Peito", "Costas", "Pernas", "Bíceps", "Tríceps", "Ombro", "Cardio", "Descanso"];

const form = document.getElementById("form-treinos");
const containerDias = document.querySelector(".dias-container");
const resultado = document.getElementById("resultado");

// Cria os selects de cada dia
diasDaSemana.forEach(dia => {
  const div = document.createElement("div");
  div.className = "dia";

  const label = document.createElement("label");
  label.textContent = `Treinos da ${dia}:`;

  const select = document.createElement("select");
  select.setAttribute("multiple", true);
  select.setAttribute("name", dia);

  opcoesTreino.forEach(opcao => {
    const option = document.createElement("option");
    option.value = opcao;
    option.textContent = opcao;
    select.appendChild(option);
  });

  div.appendChild(label);
  div.appendChild(select);
  containerDias.appendChild(div);
});

// Ao enviar o formulário
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const semana = {};

  diasDaSemana.forEach(dia => {
    const select = form.elements[dia];
    const selecionados = Array.from(select.selectedOptions).map(opt => opt.value);
    semana[dia] = selecionados;
  });

  exibirResultado(semana);
});

function exibirResultado(semana) {
  resultado.innerHTML = "<h2>Treino da Semana</h2>";
  for (const dia in semana) {
    const treinos = semana[dia].join(", ") || "Nenhum treino";
    const p = document.createElement("p");
    p.textContent = `${dia}: ${treinos}`;
    resultado.appendChild(p);
  }
}