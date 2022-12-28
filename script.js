function navToggle() {
  var navToggleNav = document.getElementById("nav");
  navToggleNav.classList.toggle("_active");
  var html = document.getElementById("html");
  html.classList.toggle("_overflow");
  var body = document.getElementById("body");
  body.classList.toggle("_overflow");
}


function toggleThing(id) {
  var thing = document.getElementById(id);
  thing.classList.toggle("_active");
}
 





const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});