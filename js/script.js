window.addEventListener("load", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    speed: 1200,
  });
});