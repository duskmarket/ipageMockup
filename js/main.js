var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});

$(document).ready(function () {

  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 200) {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
      $('.category-list').hide();
    }
  });

  $('.icon-util').on('click', function () {
    $(this).toggleClass('change');
    $('.category-list').slideToggle();
  });

  $('.switch-btn').on('click', function () {
    $('.thumb-contents').toggleClass('switched');
  });
});
