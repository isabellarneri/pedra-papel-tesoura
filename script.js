function jogar(jogador) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const computador = opcoes[Math.floor(Math.random() * 3)];
  
    let resultado = '';
  
    if (jogador === computador) {
      resultado = 'Empate!';
    } else if (
      (jogador === 'pedra' && computador === 'tesoura') ||
      (jogador === 'papel' && computador === 'pedra') ||
      (jogador === 'tesoura' && computador === 'papel')
    ) {
      resultado = 'Você venceu!';
    } else {
      resultado = 'Você perdeu!';
    }
  
    document.getElementById('resultado').innerText = `Você escolheu ${jogador}, o computador escolheu ${computador}. ${resultado}`;
  }
  