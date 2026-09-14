const noBtn = document.getElementById('noBtn');
const buttonsArea = document.getElementById('buttonsArea');
const result = document.getElementById('result');
const subtitle = document.getElementById('subtitle');

// Lista de mensagens que aparecem quando o mouse passa por cima do "Não"
const mensagens = [
  "prometo que vai ser legal",
  "por que você não quer?",
  "vamos fazer muitas coisas divertidas",
  "tem certeza mesmo?",
  "só uma chance, vai...",
  "vai ser a melhor decisão do seu dia",
  "eu prometo que não vou pisar no seu pé",
  "pensa bem antes de recusar 👀"
];

let ultimoIndex = -1;

function mudarMensagem() {
  let novoIndex;
  // Evita repetir a mesma mensagem duas vezes seguidas
  do {
    novoIndex = Math.floor(Math.random() * mensagens.length);
  } while (novoIndex === ultimoIndex);

  ultimoIndex = novoIndex;

  subtitle.style.opacity = 0;
  setTimeout(() => {
    subtitle.textContent = mensagens[novoIndex];
    subtitle.style.opacity = 1;
  }, 150);

  moverBotaoNao();
}

// Faz o botão "Não" fugir do mouse/toque pela tela inteira
function moverBotaoNao() {
  const margem = 20; // distância mínima das bordas
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth - margem;
  const maxY = window.innerHeight - btnHeight - margem;

  // Evita que o botão caia exatamente onde já estava, pra parecer mais "fujão"
  const novoX = margem + Math.random() * (maxX - margem);
  const novoY = margem + Math.random() * (maxY - margem);

  noBtn.style.left = novoX + 'px';
  noBtn.style.top = novoY + 'px';
}

noBtn.addEventListener('touchstart', function(e) {
  e.preventDefault();
  mudarMensagem();
});

function fugirDoNao() {
  moverBotaoNao();
}

function dizerSim() {
  buttonsArea.style.display = 'none';
  noBtn.style.display = 'none';
  result.innerHTML = '🎉 EBAAAAA 🎉';
  result.classList.add('show');
}

// Cria os corações caindo no fundo
function criarCoracoesCaindo() {
  const container = document.getElementById('heartsBg');
  const emojis = ['💖', '💕', '❤️', '💗', '💓', '💘'];
  const quantidade = 25;

  for (let i = 0; i < quantidade; i++) {
    const coracao = document.createElement('span');
    coracao.className = 'falling-heart';
    coracao.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const tamanho = 14 + Math.random() * 20; // entre 14px e 34px
    const duracao = 6 + Math.random() * 8;   // entre 6s e 14s
    const atraso = Math.random() * 10;       // até 10s de atraso
    const posicaoX = Math.random() * 100;    // 0% a 100% da largura

    coracao.style.left = posicaoX + 'vw';
    coracao.style.fontSize = tamanho + 'px';
    coracao.style.animationDuration = duracao + 's';
    coracao.style.animationDelay = '-' + atraso + 's';

    container.appendChild(coracao);
  }
}

criarCoracoesCaindo();

// Posiciona o botão "Não" pela primeira vez, meio deslocado pro lado
window.addEventListener('load', () => {
  const margem = 20;
  noBtn.style.left = (window.innerWidth * 0.68) + 'px';
  noBtn.style.top = (window.innerHeight * 0.6) + 'px';
});
