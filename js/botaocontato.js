async function enviarContato() {
    const nome = document.getElementById('input-nome').value;
    const email = document.getElementById('input-email').value;
    const mensagem = document.getElementById('input-mensagem').value;

    // 1. Validação dos campos (continua igual)
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return; // Para a execução se os campos não estiverem preenchidos
    }

    // 2. Cria um objeto com os dados do contato
    const novoContato = {
        nome: nome,
        email: email,
        mensagem: mensagem,
        data: new Date().toISOString() // Opcional: adiciona a data do envio
    };

    try {
        // 3. Envia os dados para a API (a parte nova!)
        const response = await fetch('http://localhost:3000/contatos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoContato)
        });

        if (!response.ok) {
            // Se o servidor retornar um erro (ex: 404, 500)
            throw new Error('Erro ao enviar para o servidor');
        }

        // 4. Se tudo deu certo, mostra o sucesso e redireciona
        alert('Contato enviado com sucesso e salvo no banco de dados!');
        window.location.href = '../index.html';

    } catch (error) {
        // 5. Se houver um erro de rede ou no servidor
        console.error('Falha na requisição:', error);
        alert('Houve um erro ao enviar o contato. Verifique se o servidor está rodando e tente novamente.');
    }
}