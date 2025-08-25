document.addEventListener('DOMContentLoaded', function () {
    // Data mínima no input
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.min = `${yyyy}-${mm}-${dd}`;
    }

    // Formatação de telefone
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length <= 10) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else {
                value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
            }

            e.target.value = value;
        });
    }

    // Formulário
   // Formulário
// Formulário
const form = document.querySelector('.booking-form');
if (form) {
    // A função do evento continua 'async'
    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Suas validações de formato continuam as mesmas
        if (!validatePhone() || !validateDate()) {
            return;
        }

        // Organiza os dados do formulário em um objeto
        const novaConsulta = {
            nome: document.getElementById('name').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('phone').value,
            idade: document.getElementById('age').value,
            tipoConsulta: document.querySelector('input[name="consultation_type"]:checked')?.value || 'Não selecionado',
            data: document.getElementById('date').value,
            hora: document.getElementById('time').value,
            status: "Agendada",
            dataAgendamento: new Date().toISOString()
        };

        // --- INÍCIO DA NOVA LÓGICA DE VERIFICAÇÃO ---
        try {
            // 1. Pergunta à API se já existe uma consulta com a mesma data e hora
            const urlVerificacao = `http://localhost:3000/consultas?data=${novaConsulta.data}&hora=${novaConsulta.hora}`;
            const responseVerificacao = await fetch(urlVerificacao);
            const agendamentosExistentes = await responseVerificacao.json();

            // 2. Se a lista de agendamentos existentes não estiver vazia, significa que o horário está ocupado
            if (agendamentosExistentes.length > 0) {
                alert('Este horário já está agendado. Por favor, selecione outra data ou hora.');
                return; // Impede o envio do formulário
            }

            // --- FIM DA NOVA LÓGICA DE VERIFICAÇÃO ---


            // 3. Se o horário estiver livre, continua com o salvamento (código que já tínhamos)
            const responseSalvar = await fetch('http://localhost:3000/consultas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novaConsulta)
            });

            if (!responseSalvar.ok) {
                throw new Error('Erro na comunicação com o servidor ao salvar.');
            }

            // 4. Se a consulta foi salva com sucesso
            alert('Consulta Agendada com sucesso!');
            
            setTimeout(() => {
                window.location.href = "../index.html";
            }, 100);

        } catch (error) {
            // 5. Se ocorrer um erro de rede ou do servidor
            console.error('Falha ao agendar consulta:', error);
            alert('Não foi possível agendar a consulta. Verifique se o servidor está ativo e tente novamente.');
        }
    });
} else {
    console.error("Formulário não encontrado.");
}

// Valida telefone
    function validatePhone() {
    const phone = document.getElementById('phone').value;
    const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (!regex.test(phone)) {
        alert("Telefone inválido. Use o formato (99) 99999-9999.");
        return false;
    }
    return true;
}
    // Valida data
    function validateDate() {
        const selected = new Date(document.getElementById('date').value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selected < today) {
            alert("Por favor, selecione uma data atual ou futura.");
            return false;
        }
        return true;
    }
});
