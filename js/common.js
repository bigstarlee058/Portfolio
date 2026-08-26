$(function () {
  var $grid = $('.center').masonry({
    itemSelector: '.grid',
    isFitWidth: true,
    isResizable: true,
    isAnimated: true,
    animationOptions: {
      duration: 400,
      easing: 'linear',
      queue: false
    }
  });

  $(window).on('load', function () {
    $grid.masonry('layout');
  });
});
