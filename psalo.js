document.addEventListener('DOMContentLoaded', function () {
    var playButton = document.getElementById('playButton');
    var gif = document.getElementById('gif');
    var playButton2 = document.getElementById('playButton2');
    var gif2 = document.getElementById('gif2');
    var resultado = document.getElementById('resultado');
  
    playButton.addEventListener('click', function () {
      // Alterna entre exibir e ocultar a imagem/GIF
      if (gif.style.display === 'none') {
        gif.style.display = 'block';
        resultado.innerHTML = "Psy";
        if(gif2.style.display == 'block'){
          gif2.style.display = 'none';
        }
      } else {
        gif.style.display = 'none';
      }
    });
    playButton2.addEventListener('click', function () {
      // Alterna entre exibir e ocultar a imagem/GIF
      if (gif2.style.display === 'none') {
        gif2.style.display = 'block';
        resultado.innerHTML = "Cara amarelo";
        if(gif.style.display == 'block'){
          gif.style.display = 'none';
        }
      } else {
        gif2.style.display = 'none';
      }
    });
  });