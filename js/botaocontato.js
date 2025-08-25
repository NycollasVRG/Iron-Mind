function enviarContato() {
    const nome = document.getElementById('input-nome').value;
    const email = document.getElementById('input-email').value;
    const mensagem = document.getElementById('input-mensagem').value;

    if (nome && email && mensagem) {
        alert(`Contato enviado!\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
        window.location.href = '../index.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}