document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })


    const video = document.getElementById("video");

    video.addEventListener("click", function () {
        
    });

});
























// //SCROLL LENTAMENTE
// function scrollDown() {
//   const scrollHeight = document.documentElement.scrollHeight;
//   const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//   const scrollBottom = scrollHeight - window.innerHeight - scrollTop;
//   const scrollStep = Math.max(scrollBottom / 200, 200);

//   function doScroll() {
//     window.scrollBy(0, scrollStep);

//     const reachedBottom = (scrollTop + window.innerHeight) >= scrollHeight;

//     if (!reachedBottom) {
//       requestAnimationFrame(doScroll);
//     }
//   }

//   doScroll();
// }