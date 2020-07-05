$(document).ready(function(){

  $('.slider__main').slick({
    arrows: true,
    speed: 700,
    asNavFor: '.slider__nav',
    slidesToShow: 1,
  });

  $('.slider__nav').slick({
    asNavFor: '.slider__main',
    focusOnSelect: true,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        }
      },
    ],
  });
});

$('.header__menu-btn').on('click', function(){
  $('.menu > ul').slideToggle();
});

$('.dropdown > li').on('click', function(){
  $('dropdown__list').slideToggle();
});