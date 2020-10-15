$(document).ready(function () {

  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 200) {
      $('.switch-btn').fadeOut(80);
    } else {
      $('.switch-btn').fadeIn(80);
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

