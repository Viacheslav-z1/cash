$(function () {
  $('button').on('click', function () {
    $('.js-overlay-campaign').fadeIn();
    $('body').addClass('lock');
  });
  $('.close__popup').on('click', function () {
    $('.js-overlay-campaign').fadeOut();
    $('body').removeClass('lock');
  });
})