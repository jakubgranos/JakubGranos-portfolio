const menu = ['assets/images/gallery-1.PNG', 'assets/images/gallery-2.jpg', 'assets/images/gallery-3.PNG']
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
