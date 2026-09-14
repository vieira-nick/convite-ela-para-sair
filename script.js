const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const buttonsArea = document.getElementById('buttonsArea');
const result = document.getElementById('result');
const subtitle = document.getElementById('subtitle');

// Lista de mensagens que aparecem quando tentam clicar no "Não"
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
let ultimaPosicao = { x: null, y: null };

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

// Faz o botão "Não" pular para um lugar bem diferente da tela,
// evitando cair perto de onde ele estava antes
function moverBotaoNao() {
  const margem = 20; // distância mínima das bordas
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = Math.max(margem, window.innerWidth - btnWidth - margem);
  const maxY = Math.max(margem, window.innerHeight - btnHeight - margem);

  // Distância mínima exigida em relação à posição anterior,
  // pra garantir que o botão realmente "fuja" pra outro canto
  const distanciaMinima = Math.min(window.innerWidth, window.innerHeight) * 0.35;

  let novoX, novoY, tentativas = 0;

  do {
    novoX = margem + Math.random() * (maxX - margem);
    novoY = margem + Math.random() * (maxY - margem);
    tentativas++;
  } while (
    ultimaPosicao.x !== null &&
    tentativas < 12 &&
    Math.hypot(novoX - ultimaPosicao.x, novoY - ultimaPosicao.y) < distanciaMinima
  );

  ultimaPosicao = { x: novoX, y: novoY };

  noBtn.style.left = novoX + 'px';
  noBtn.style.top = novoY + 'px';
}

function fugirDoNao() {
  moverBotaoNao();
}

function dizerSim() {
  buttonsArea.style.display = 'none';
  noBtn.style.display = 'none';
  result.innerHTML = '🎉 Ebaaa, você não vai se arrepender! 🎉';
  result.classList.add('show');
}

// Cria os corações caindo no fundo
function criarCoracoesCaindo() {
  const container = document.getElementById('heartsBg');
  const emojis = ['💖', '💕', '❤️', '💗', '💓', '💘'];
  const quantidade = 35;

  for (let i = 0; i < quantidade; i++) {
    const coracao = document.createElement('span');
    coracao.className = 'falling-heart';
    coracao.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const tamanho = 14 + Math.random() * 20; // entre 14px e 34px
    const duracao = 6 + Math.random() * 8;   // entre 6s e 14s
    const atraso = Math.random() * 14;       // até 14s de atraso
    const posicaoX = Math.random() * 100;    // 0% a 100% da largura

    coracao.style.left = posicaoX + 'vw';
    coracao.style.fontSize = tamanho + 'px';
    coracao.style.animationDuration = duracao + 's';
    coracao.style.animationDelay = '-' + atraso + 's';

    container.appendChild(coracao);
  }
}

criarCoracoesCaindo();

// Eventos do botão "Sim"
yesBtn.addEventListener('click', dizerSim);

// Eventos do botão "Não": cobre mouse, toque e teclado/foco
noBtn.addEventListener('mouseover', mudarMensagem);
noBtn.addEventListener('focus', mudarMensagem);
noBtn.addEventListener('click', fugirDoNao);

noBtn.addEventListener('touchstart', function (e) {
  e.preventDefault();
  mudarMensagem();
}, { passive: false });

// Reposiciona se a tela for redimensionada e o botão ficar fora da área visível
window.addEventListener('resize', () => {
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;
  const atualX = parseFloat(noBtn.style.left) || 0;
  const atualY = parseFloat(noBtn.style.top) || 0;

  if (atualX > maxX || atualY > maxY) {
    moverBotaoNao();
  }
});

// Posiciona o botão "Não" pela primeira vez, meio deslocado pro lado
window.addEventListener('load', () => {
  const x = window.innerWidth * 0.68;
  const y = window.innerHeight * 0.6;
  ultimaPosicao = { x, y };
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});
