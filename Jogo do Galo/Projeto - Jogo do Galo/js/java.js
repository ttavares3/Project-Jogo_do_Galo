	var caracter = 'X';
	var NRJogadas = 0;
	var jogadas = [];
	var linha0 = [0,1,2];
	var linha1 = [3,4,5];
	var linhas = [
		[0,1,2], // Linha 0
		[3,4,5], // Linha 1
		[6,7,8], // Linha 2
		[0,3,6], // Linha 3
		[1,4,7], // Linha 4
		[2,5,8], // Linha 5
		[0,4,8], // Linha 6
		[2,4,6]  // Linha 7
	];
	var jogoTerminado = false;
	
	// função que vai validar onde estão postos os caracteres e mostrar um vencedor
	function validarLinha( indiceDaLinha ) {
		var linhaAtual = linhas[indiceDaLinha];
		var paraoX = jogadas[linhaAtual[0] ] == 'X' && jogadas[ linhaAtual[1] ] == 'X' && jogadas[ linhaAtual[2] ] == 'X';
		var paraoO = jogadas[linhaAtual[0] ] == 'O' && jogadas[ linhaAtual[1] ] == 'O' && jogadas[ linhaAtual[2] ] == 'O';
		
		if ( paraoX ) {
			jogoTerminado = true;
			alert("Ganhou o jogador 1: (X)!");
		}
		if ( paraoO ) {
			jogoTerminado = true;
			alert("Ganhou o jogador 2: (O)!");
		}
	}
	
	/*função que diz quando o jog acaba sem um vencedor e também avisa quando o utilizador 
	já carregou mais do que um vez no mesmo quadrado*/
	function clica(NRQuadrado) {
		if ( jogoTerminado == true ) {
			alert("Acabou o Jogo!");
			return;
		}
		if ( jogadas[NRQuadrado] ) {
			alert("O quadrado já está preenchido! Escolha outro!");
			return;
		}
		
		//indica que vai ganhar aquele que tiver um NRJogadas=3, aquele que tiver apenas 2 jogadas é o que perde
		NRJogadas = NRJogadas + 1;
		var Par = (NRJogadas % 2) == 0;
		if ( Par ) {
			caracter = 'O';
		} else {
			caracter = 'X';
		}
		jogadas[NRQuadrado] = caracter;
		document.getElementById('quadrado'+NRQuadrado).innerHTML = caracter;
		validarLinha(0);
		validarLinha(1);
		validarLinha(2);
		validarLinha(3);
		validarLinha(4);
		validarLinha(5);
		validarLinha(6);
		validarLinha(7);
	}