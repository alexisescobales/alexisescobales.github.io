// document.addEventListener("DOMContentLoaded", (event) => {
//     window.addEventListener("scroll", function () {
//         var header = document.querySelector("header");
//         header.classList.toggle("sticky", window.scrollY > 0);
//         logo = document.querySelector('#logo');
//         logo.style.backgroundImage = "url(/logoblanco.svg)";
//         if (header.classList.contains("sticky")) {
//              logo.classList.add('logoN')
//         } else {
//             logo.style.backgroundImage = "url(/logoblanco.svg)";
//         }
//     })
// });

document.addEventListener("DOMContentLoaded", (event) => {
    var header = document.querySelector("header");
    var logo = document.querySelector('#logo');
  
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    }

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

    document.getElementById("card_itb").onclick = function () {
        window.open("https://www.itb.cat/", "_blank");
    };

    document.getElementById("card_cep").onclick = function () {
        window.open("https://politecnics.barcelona/es/", "_blank");
    };
});
