@@include('webp_.js');

new Swiper('.main-slider', {
  // Optional parameters
  loop: true,
  effect: "fade",
  autoplay: true,
  speed: 800,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.main-slider__button-next',
    prevEl: '.main-slider__button-prev',
  }
});
new Swiper('.feedback-slider', {
  // Optional parameters
  loop: true,
  autoplay: true,
  slidesPerView: 2,
  effect: "fade",
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.feedback-slider__button-next',
    prevEl: '.feedback-slider__button-prev',
  }
});