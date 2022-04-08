function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});;

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