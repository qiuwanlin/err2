!function(){
var view = document.querySelector('#myslides')
var mySwiper = new Swiper(view.querySelector('.swiper-container'), {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}.call()