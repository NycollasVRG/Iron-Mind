document.addEventListener('DOMContentLoaded', () => {
let semanas = [];
let cargas = [];

let grafico;

  // Função para carregar os dados do localStorage ao abrir a página
  function carregarDados() {
    const dadosSalvos = localStorage.getItem('progressoTreino');
    if (dadosSalvos) {
      const dados = JSON.parse(dadosSalvos);
      semanas = dados.semanas || [];
      cargas = dados.cargas || [];
    }
  }

  // Função para salvar os dados no localStorage
  function salvarDados() {
    const dados = { semanas, cargas };
    localStorage.setItem('progressoTreino', JSON.stringify(dados));
  }

  carregarDados();

  // Criação de gráfico com os dados carregados
  const ctx = document.getElementById('grafico').getContext('2d');
  grafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: semanas,
      datasets: [{
        label: 'Carga (kg)',
        data: cargas,
        backgroundColor: 'rgba(255, 107, 0, 0.6)',
        borderColor: 'rgba(255, 107, 0, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Carga (kg)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Semana'
          }
        }
      }
    }
  });

  // Função para adicionar uma nova carga
window.adicionarCarga = function () {
  const semanaInput = document.getElementById('semana').value;
  const cargaInput = document.getElementById('carga').value;

  const semanaNum = parseInt(semanaInput);
  const cargaNum = parseFloat(cargaInput);

  if (!semanaNum || !cargaInput) {
    alert("Preencha os dois campos corretamente.");
    return;
  }

  const novaSemana = 'Semana ' + semanaNum;

  // Encontrar índice de inserção (antes da próxima semana maior)
  let index = semanas.findIndex(s => {
    const num = parseInt(s.replace('Semana ', ''));
    return num > semanaNum;
  });

  // Se não achou posição (ou é o maior), adiciona no final
  if (index === -1) {
    semanas.push(novaSemana);
    cargas.push(cargaNum);
  } else {
    semanas.splice(index, 0, novaSemana);
    cargas.splice(index, 0, cargaNum);
  }

  salvarDados();
  grafico.update();

  document.getElementById('semana').value = '';
  document.getElementById('carga').value = '';
};

  // Função para limpar o progresso
  window.limparProgresso = function () {
    if (confirm("Tem certeza que deseja limpar a progressão semanal?")) {
      localStorage.removeItem('progressoTreino');
      semanas.length = 0;
      cargas.length = 0;
      grafico.update();
    }
  };
});
