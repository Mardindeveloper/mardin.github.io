var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// str-icon
var stars = document.querySelectorAll('.star-icon');

document.addEventListener('click', function (e) {
  var classStar = e.target.classList;
  if (!classStar.contains('ativo')) {
    stars.forEach(function (star) {
      star.classList.remove('ativo');
    });
    classStar.add('ativo');
    console.log(e.target.getAttribute('data-avaliacao'));
  }
});