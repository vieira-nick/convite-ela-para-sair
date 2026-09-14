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

// Faz o botão "Não" fugir do mouse/toque
function moverBotaoNao() {
  const areaWidth = buttonsArea.offsetWidth;
  const areaHeight = buttonsArea.offsetHeight;
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = areaWidth - btnWidth;
  const maxY = areaHeight - btnHeight;

  const novoX = Math.random() * maxX;
  const novoY = Math.random() * maxY;

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
  result.innerHTML = '🎉 Ela(e) disse SIM! 🎉';
  result.classList.add('show');
}
