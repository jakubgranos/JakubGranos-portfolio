const menu = ['{{work-12.PNG}}', 'img/gallery-2.jpg', 'img/gallery-3.PNG']
const mySwiper = new Swiper ('.swiper-container', {
  allowTouchMove: false,
  pagination: {
    el: '.swiper-pagination',
	  clickable: true,
      renderBullet: function (index, className) {
        return '<img class="gallery-thumb ' + className + '" src="'+ (menu[index]) + '">';
      },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
