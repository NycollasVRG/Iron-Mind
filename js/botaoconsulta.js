document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.booking-form');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o envio do formulário

      // Coleta os valores dos campos
      const nome = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const telefone = document.getElementById('phone').value;
      const idade = document.getElementById('age').value;
      const tipoConsulta = document.querySelector('input[name="consultation_type"]:checked')?.value || 'Não selecionado';
      const data = document.getElementById('date').value;
      const hora = document.getElementById('time').value;

      
      alert(`Consulta Agendada!\n
Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Idade: ${idade}
Tipo de Consulta: ${tipoConsulta}
Data: ${data}
Hora: ${hora}`);

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 100);
    });
  } else {
    console.error('Formulário não encontrado!');
  }
});