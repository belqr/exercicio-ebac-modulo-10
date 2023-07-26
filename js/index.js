$(document).ready(function() {
  $('#telefone').mask('(00) 0 00000-0000')
  $('#cpf').mask('000.000.000-00')
  $('#cep').mask('00000-000')

  $('form').validate({
     rules: {
        nome: {
           required: true
        },
        email: {
           required: true,
           email: true
        },
        telefone: {
           required: true
        },
        cpf: {
           required: true
        },
        endereco: {
           required: true
        },
        cep: {
          required: true
        },
        termos: {
          required: true
        }
     },
     messages: {
        nome: '<p class="validate"> Por favor insira o seu nome </p>',
        telefone: '<p class="validate"> Por favor insira o seu telefone </p>',
        email: '<p class="validate"> Por favor insira o seu e-mail </p>',
        cpf: '<p class="validate"> Por favor insira o seu CPF </p>',
        endereco: '<p class="validate"> Por favor insira o seu endereço </p>',
        cep: '<p class="validate"> Por favor insira o seu CEP </p>',
        termos: '<p class="validate-termos"> Por favor aceite os termos de uso e privacidade </p>'
     },

     submitHandler: function(form) {
      let nome = $('#nome').val();
      let email = $('#email').val();
      let telefone = $('#telefone').val();
      let cpf = $('#cpf').val();
      let endereco = $('#endereco').val();
      let cep = $('#cep').val();

      localStorage.setItem('nome', nome);
      localStorage.setItem('email', email);
      localStorage.setItem('telefone', telefone);
      localStorage.setItem('cpf', cpf);
      localStorage.setItem('endereco', endereco);
      localStorage.setItem('cep', cep);

      form.submit();
    }
  })
})