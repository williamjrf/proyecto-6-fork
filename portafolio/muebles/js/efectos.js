// Side Nav

$(".button-collapse").sideNav({
    menuWidth: 270
});

// Paralax
$('.parallax').parallax();

// Carrusel
$('.carousel.carousel-slider').carousel({ fullWidth: false });

// Slider 

$('.slider').slider({
    height: 313
});

$('.carousel').carousel();

// Top Menu Fixed
var altura=$(".efecto-menu").offset().top;$(window).on("scroll",function(){$(window).scrollTop()>altura?$(".efecto-menu").addClass("menu-fixed"):$(".efecto-menu").removeClass("menu-fixed")})
// Scroll Nav Fixed
$(function() {
    $('a[href*=#]').click(function() {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({
                    scrollTop: targetOffset
                }, 500);

                return false;
            }
        }
    });

});

//Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 5,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });