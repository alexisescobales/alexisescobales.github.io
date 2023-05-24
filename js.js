document.addEventListener("DOMContentLoaded", (event) => {
    var header = document.querySelector("header");
    var logo = document.querySelector('#logo');
  
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    }

    //CAMBIO DE LOGO DE NEGRO A BLANCO
    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 0);
        
        if (header.classList.contains("sticky")) {
            logo.classList.remove('logo');
            logo.classList.add('logoN');
        } else {
            logo.classList.remove('logoN');
            logo.classList.add('logo');
        }
    });

  const video = document.getElementById('videoPlayer');
  const btnQuienSoy = document.querySelector('#btn_quien_soy');
  const btnLenguajes = document.querySelector('#btn_lenguajes');
  const btnHabilidades = document.querySelector('#btn_habilidades');
  const btnObjetivos = document.querySelector('#btn_objetivos');
  const btnHobbies = document.querySelector('#btn_hobbies');

  // Agrega los event listeners para cada botón
  btnQuienSoy.addEventListener('click', function() {
      video.currentTime = 12;
  });

  btnLenguajes.addEventListener('click', function() {
      video.currentTime = 30;
  });

  btnHabilidades.addEventListener('click', function() {
    video.currentTime =50;
  });

  btnObjetivos.addEventListener('click', function() {
    video.currentTime = 1;
  });

  btnHobbies.addEventListener('click', function() {
    video.currentTime =1;
  });

    //REEDIRECION A LA PAGINA AL HACER CLICK EN EL DIV CARD_ITB
    document.getElementById("card_itb").onclick = function () {
        window.open("https://www.itb.cat/", "_blank");
    };

    //REEDIRECION A LA PAGINA AL HACER CLICK EN EL DIV CARD_CEP
    document.getElementById("card_cep").onclick = function () {
        window.open("https://politecnics.barcelona/es/", "_blank");
    };
<<<<<<< HEAD

    //REEDIRECION A LA PAGINA AL HACER CLICK EN EL DIV CARD_CEP
    document.getElementById("card_cep").onclick = function () {
        window.open("https://politecnics.barcelona/es/", "_blank");
    };

    //REEDIRECION A LA PAGINA AL HACER CLICK EN EL DIV CARD_CEP
    document.getElementById("card_cep").onclick = function () {
        window.open("https://politecnics.barcelona/es/", "_blank");
    };
=======
>>>>>>> parent of 9ab44e4 (changes)
});
