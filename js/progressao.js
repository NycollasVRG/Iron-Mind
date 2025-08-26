document.addEventListener('DOMContentLoaded', () => {
  const API_URL = "http://localhost:3000/progressoTreino";
  let grafico;

  async function carregarDados() {
    try {
      const response = await fetch(API_URL);
      const dados = await response.json();

      const semanas = dados.map(item => item.semana);
      const cargas = dados.map(item => item.carga);

      const ctx = document.getElementById('grafico').getContext('2d');

      if (grafico) grafico.destroy(); // Remove gráfico antigo

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
            y: { beginAtZero: true, title: { display: true, text: 'Carga (kg)' } },
            x: { title: { display: true, text: 'Semana' } }
          }
        }
      });

    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  }

  async function salvarDado(semana, carga) {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ semana, carga })
      });
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  }

  async function limparProgressoAPI() {
    try {
      const response = await fetch(API_URL);
      const dados = await response.json();
      for (let item of dados) {
        await fetch(`${API_URL}/${item.id}`, { method: "DELETE" });
      }
    } catch (error) {
      console.error("Erro ao limpar progresso:", error);
    }
  }

  window.adicionarCarga = async function() {
    const semanaNum = parseInt(document.getElementById('semana').value);
    const cargaNum = parseFloat(document.getElementById('carga').value);

    if (!semanaNum || !cargaNum) {
      alert("Preencha os dois campos corretamente.");
      return;
    }

    await salvarDado('Semana ' + semanaNum, cargaNum);
    await carregarDados();

    document.getElementById('semana').value = '';
    document.getElementById('carga').value = '';
  }

  window.limparProgresso = async function() {
    if (confirm("Tem certeza que deseja limpar a progressão semanal?")) {
      await limparProgressoAPI();
      await carregarDados();
    }
  }

  // Carrega os dados assim que abrir a página
  carregarDados();
});
