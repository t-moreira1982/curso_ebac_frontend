const form = document.getElementById('form-numbers');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const fNumber = parseFloat(document.querySelector('#firstNumber').value);
    const sNumber = parseFloat(document.querySelector('#secondNumber').value);
    const errorMessage = `Não é válido, pois o primeiro número (${fNumber}) é maior que o segundo número (${sNumber}).`;
    const errorMessageEqual = `Não é válido, pois o primeiro número (${fNumber}) é igual ao segundo número (${sNumber}).`;
    const sucessMessage = `Está válido, pois o primeiro número (${fNumber}) é menor que o segundo número (${sNumber})`;

    if (fNumber > sNumber) {
        const containerMessage = document.querySelector('.message');
        containerMessage.innerHTML = errorMessage;
        containerMessage.style.display = 'block';
        containerMessage.style.backgroundColor = 'red';
        containerMessage.style.fontWeight = 'bold';
        
    } else if (fNumber == sNumber) {
        const containerMessage = document.querySelector('.message');
        containerMessage.innerHTML = errorMessageEqual;
        containerMessage.style.display = 'block'
        containerMessage.style.backgroundColor = 'red';
        containerMessage.style.fontWeight = 'bold';
    } else {
        const containerMessage = document.querySelector('.message');
        containerMessage.innerHTML = sucessMessage;
        containerMessage.style.display = 'block';
        containerMessage.style.backgroundColor = '#0374ec';
    }

    form.reset();
})


