// Função para buscar e exibir os agendamentos com status dinâmico
async function listarAgendamentos() {
    const listaDiv = document.getElementById('lista-agendamentos');
    listaDiv.innerHTML = 'Carregando agendamentos...';

    try {
        // 1. Busca os dados do seu banco (ex: agendamentos)
        const response = await fetch('http://localhost:3000/consultas'); // Mude para a sua URL de agendamentos
        if (!response.ok) {
            throw new Error('Não foi possível carregar os agendamentos.');
        }
        const agendamentos = await response.json();

        listaDiv.innerHTML = ''; // Limpa a mensagem de "Carregando"

        const hoje = new Date(); // Pega a data e hora atuais

        // 2. Para cada agendamento, aplica a lógica de data
        agendamentos.forEach(agendamento => {
            // Converte a data do agendamento (que vem como texto) para um objeto Date
            const dataAgendamento = new Date(agendamento.data); 
            
            let statusExibido = agendamento.status; // Começa com o status do banco

            // 3. A LÓGICA PRINCIPAL: Compara as datas
            // Se a data de hoje for posterior à data do agendamento, muda o status para "Confirmado"
            if (hoje > dataAgendamento) {
                statusExibido = "Confirmado";
            }

            // 4. Cria o HTML para exibir na tela com o status correto
            const card = document.createElement('div');
            card.className = 'agendamento-card';
            if (statusExibido === 'Confirmado') {
                card.classList.add('confirmado');
            }

            card.innerHTML = `
                <h3>Agendamento ID: ${agendamento.id}</h3>
                <p><strong>Data:</strong> ${dataAgendamento.toLocaleDateString('pt-BR')}</p>
                <p><strong>Status a ser exibido:</strong> ${statusExibido}</p>
                ${statusExibido !== 'Confirmado' ? `<button onclick="confirmarConsulta(${agendamento.id})">Confirmar</button>` : ''}
            `;
            listaDiv.appendChild(card);
        });

    } catch (error) {
        listaDiv.innerHTML = 'Erro ao carregar os agendamentos.';
        console.error(error);
    }
}

// Função para atualizar o status da consulta
async function confirmarConsulta(id) {
    try {
        const response = await fetch(`http://localhost:3000/consultas/${id}`, {
            method: 'PATCH', // ou 'PUT' dependendo da sua API
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'Confirmado' })
        });
        if (!response.ok) {
            throw new Error('Erro ao atualizar o status.');
        }
        // Atualiza a lista após confirmar
        listarAgendamentos();
    } catch (error) {
        alert('Não foi possível confirmar a consulta.');
        console.error(error);
    }
}

// Chama a função para listar os agendamentos assim que a página carregar
window.onload = listarAgendamentos;