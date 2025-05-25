document.addEventListener("DOMContentLoaded", function() {
    function calcularIMC() {
        const altura = parseFloat(document.getElementById('altura').value) / 100;
        const peso = parseFloat(document.getElementById('peso').value);

        if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
            alert('Por favor, preencha altura e peso com valores válidos.');
            return;
        }

        const imc = peso / (altura * altura);
        let classificacao = '';

        if (imc < 18.5) classificacao = 'Abaixo do peso';
        else if (imc < 24.9) classificacao = 'Peso normal';
        else if (imc < 29.9) classificacao = 'Sobrepeso';
        else if (imc < 34.9) classificacao = 'Obesidade Grau 1';
        else if (imc < 39.9) classificacao = 'Obesidade Grau 2';
        else classificacao = 'Obesidade Grau 3';

        document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
    }

    document.getElementById('calcular').addEventListener('click', calcularIMC);
});
