
  function redirecionarpagina() {
    // Checar se preencheram as perguntas
    var pergunta1 = document.querySelector('input[name="pergunta1"]:checked');
    var pergunta3 = document.querySelector('input[name="pergunta3"]:checked');
    
    // Verificar se todas as respostas requeridas estão preenchidas
    if (pergunta1  && pergunta3) {
      // Envia formulário
      window.location.href = "thankyou.html"
    }
    else {
      alert('Por favor, preencha todas as respostas obrigatórias!');
    }

  }
