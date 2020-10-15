$(document).ready(function () {
  $('.icon-util').on('click', function () {
    $(this).toggleClass('change');
    $('.category-list').slideToggle();
  });

  $('.switch-btn').on('click', function () {
    $('.thumb-contents').toggleClass('switched');
  });
});

