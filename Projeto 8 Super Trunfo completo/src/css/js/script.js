var carta1 = {
    nome: "Agumon",
    imagem: "https://i.pinimg.com/564x/33/09/0b/33090bc6908c2d639fd980f903debd4f.jpg",
    atributos: {
      ataque: 6,
      defesa: 5,
      velocidade: 4
    }
  };
  
  var carta2 = {
    nome: "Gabumon",
    imagem: "https://i.pinimg.com/564x/af/2f/23/af2f23b3553a3e2b5403242218b33451.jpg",
    atributos: {
      ataque: 6,
      defesa: 3,
      velocidade: 5
    }
  };
  
  var carta3 = {
    nome: "Piyomon",
    imagem: "https://i.pinimg.com/564x/78/a2/24/78a2248d0125488009eaea5f9e778f12.jpg",
    atributos: {
      ataque: 5,
      defesa: 4,
      velocidade: 6
    }
  };

  var carta4 = {
    nome: "Patamon",
    imagem: "https://i.pinimg.com/564x/cf/14/3b/cf143bd2a29381e375255ec618adff3f.jpg",
    atributos: {
      ataque: 5,
      defesa: 5,
      velocidade: 5
    }
  };

  var carta5 = {
    nome: "Palmon",
    imagem: "https://i.pinimg.com/564x/16/29/4b/16294bebc5622dd41237c5165e44693d.jpg",
    atributos: {
      ataque: 6,
      defesa: 5,
      velocidade: 3
    }
  };

  var carta6 = {
    nome: "Tentomon",
    imagem: "https://i.pinimg.com/564x/66/e5/71/66e57171ce627002613738f450eb3388.jpg",
    atributos: {
      ataque: 5,
      defesa: 4,
      velocidade: 7
    }
  };

  var carta7 = {
    nome: "Gatomon",
    imagem: "https://i.pinimg.com/564x/04/90/e5/0490e5a635dd8f12dc4863198ca533e3.jpg",
    atributos: {
      ataque: 7,
      defesa: 4,
      velocidade: 4
    }
  };

  var carta8 = {
    nome: "Gomamon",
    imagem: "https://i.pinimg.com/564x/33/fd/9b/33fd9bb45e2e11564011c2226bfd86dd.jpg",
    atributos: {
      ataque: 5,
      defesa: 7,
      velocidade: 3
    }
  };
  
  var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
  var cartaMaquina = 0;
  var cartaJogador = 0;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 8);
    cartaMaquina = cartas[numeroCartaMaquina];
    
     var numeroCartaJogador = parseInt(Math.random() * 8);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 8);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
    
    document.getElementById("btnJogar").disabled = false;
    
    exibirCartaJogador();

  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for(var i = 0; i < radioAtributos.length; i++) {
      if(radioAtributos[i].checked == true) {
        return radioAtributos[i].value
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "<p class='resultado-final'>Você Venceu!</p>" + "Atualize a página ou jogue novamente."
      
    }else if (valorCartaMaquina > valorCartaJogador){
      elementoResultado.innerHTML = "<p class='resultado-final'>Você perdeu, a carta do seu inimigo é maior</p>" + "Atualize a página ou jogue novamente."

    } else {
      elementoResultado.innerHTML = "<p class='resultado-final'>Empatou, jogue novamente</p>" + "Atualize a página ou jogue novamente."
    }
        
    document.getElementById('btnJogar').disabled = true
    exibirCartaMaquina()
  }

  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; heigth: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "  " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  }

  function exibirCartaMaquina() {
    
        var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    //divCartaMaquina.style.backgroundImage = "url(" + cartaMaquina.imagem + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; heigth: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + "  " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  }
  