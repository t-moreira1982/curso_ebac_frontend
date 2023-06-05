$(document).ready(function() {
    $('#phoneNumber').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#postalCode').mask('00000-000');
  
    $('form').validate({
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        phoneNumber: {
          required: true,
          pattern: /^\(\d{2}\)\s\d{5}-\d{4}$/
        },
        cpf: {
          required: true,
          pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
        },
        address: {
          required: true
        },
        postalCode: {
          required: true,
          pattern: /^\d{5}-\d{3}$/
        }
      },
      messages: {
        name: 'Por favor, preencha seu nome.',
        phoneNumber: 'Por favor, insira um número de telefone válido.',
        cpf: 'Por favor, insira um CPF válido.',
        postalCode: 'Por favor, insira um CEP válido.'
      },
      submitHandler: function(form) {
        console.log(form);
        form.reset();
      },
      invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
          alert(`Existem ${camposIncorretos} campos incorretos`);
        }
      }
    });
  });
  