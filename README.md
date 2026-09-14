[Uploading index.html…]()
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Quer sair comigo?</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="card">
    <div class="hearts">💖💌💖</div>
    <h1>Quer sair comigo?</h1>
    <p class="subtitle" id="subtitle">prometo que vai ser legal</p>

    <div class="buttons" id="buttonsArea">
      <button id="yesBtn" onclick="dizerSim()">Sim!</button>
      <button id="noBtn" onmouseover="mudarMensagem()" onclick="fugirDoNao()">Não</button>
    </div>

    <div id="result"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
