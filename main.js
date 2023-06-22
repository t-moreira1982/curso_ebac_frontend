$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
  
    $('#myform').validate({
      rules: {
        nome: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        telefone: {
          required: true,
          pattern: /^\(\d{2}\)\s\d{5}-\d{4}$/
        },
        informacoes: {
          required: true
        }, 
      },
      messages: {
        nome: 'Por favor, preencha seu nome.',
        telefone: 'Por favor, insira um número de telefone válido.',
        informacoes: 'Por favor, valide suas informações'
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
  