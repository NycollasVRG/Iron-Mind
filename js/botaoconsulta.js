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
    const form = document.querySelector('.booking-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (!validatePhone() || !validateDate()) {
                return;
            }

            const nome = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('phone').value;
            const idade = document.getElementById('age').value;
            const tipoConsulta = document.querySelector('input[name="consultation_type"]:checked')?.value || 'Não selecionado';
            const data = document.getElementById('date').value;
            const hora = document.getElementById('time').value;

            alert(`Consulta Agendada!\n\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nIdade: ${idade}\nTipo de Consulta: ${tipoConsulta}\nData: ${data}\nHora: ${hora}`);

            setTimeout(() => {
                window.location.href = "../index.html";
            }, 100);
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
