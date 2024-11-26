const ledVermelho = document.getElementById('ledVermelho');
const ledVerde = document.getElementById('ledVerde');
const botao = document.getElementById('botao');
const sucessoAudio = document.getElementById('sucessoAudio');
const erroAudio = document.getElementById('erroAudio');

let jogoAtivo = false;
let tempoEspera;
let tempoInicio;
let tempoLimite = 500; 
let limiteAtingido = false;

function iniciarJogo() {
  ledVermelho.style.opacity = 1;  
  ledVerde.style.opacity = 0.2;   
  jogoAtivo = true;
  limiteAtingido = false;
  tempoEspera = Math.random() * 4000 + 2000;  
  tempoInicio = Date.now();
  
  setTimeout(() => {
    if (jogoAtivo) {
      ledVermelho.style.opacity = 0.2;
      ledVerde.style.opacity = 1;  
      tempoInicio = Date.now();

      
      setTimeout(() => {
        if (jogoAtivo && !limiteAtingido) {
          erro(); 
        }
      }, tempoLimite);
    }
  }, tempoEspera);
}

function sucesso() {
  ledVerde.style.opacity = 0.2;
  sucessoAudio.play();
  limiteAtingido = true;  
  jogoAtivo = false;     
}

function erro() {
  ledVermelho.style.opacity = 0.2;
  ledVerde.style.opacity = 0.2;
  erroAudio.play();
  jogoAtivo = false;  
}

botao.addEventListener('click', () => {
  if (!jogoAtivo) {
    iniciarJogo();  
  } else {
    
    if (ledVerde.style.opacity == 1) {
      sucesso();
    } else {
      erro();
    }
  }
});

function copiarTex() {
  const textToCopy = document.getElementById('codigo__tex').innerText;

  
  const tempInput = document.createElement('input');
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  alert('Texto copiado para a área de transferência!');
}
function baixarArquivo(){
  document.getElementById('downloadZip').addEventListener('click', function() {
    
    const url = 'URL_DO_ARQUIVO_ZIP'; 

    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'GreenGo.zip';  
    link.click();
  });
}