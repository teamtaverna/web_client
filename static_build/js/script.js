/* eslint-disable */

$(function() {
  // initialize semantic ui accordion module:
  $('.ui.accordion').accordion({
    exclusive: false,
  });

  // initialize semantic ui ratings:
  $('.ui.rating').rating({
    maxRating: 5,
    interactive: false,
  });
  $('.ui.rating.interactive').rating({
    interactive: true,
  });

  // initialize semantic ui sidebar:
  $('.sidebar')
    .sidebar({
      context: $('.pushable.content'),
      scrollLock: true,
    })
    .sidebar('setting', 'transition', 'push')
    .sidebar('setting', 'mobileTransition', 'push');

  // toggle the sidebar when you click a card
  // or the sidebar's close button:
  $('.serving.card, .sidebar .close.button').click(function() {
    $('.sidebar').sidebar('toggle');
  });
});
