document.querySelector('#btnMostrar').addEventListener('click', function() {
    const altura = parseFloat(document.querySelector('#txtAltura').value);
    const peso = parseFloat(document.querySelector('#txtPeso').value);
    const nome = document.querySelector('#txtNome').value;

    if (isNaN(altura) || isNaN(peso)) {
        alert('Por favor, insira valores válidos para altura e peso.');
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    document.querySelector('#resultado').innerHTML = `${nome}, seu IMC é ${imc.toFixed(2)} (${classificacao})`;
});

