const $ = window.$;

$(() => {
  // initialize semantic ui accordion module:
  $('.ui.accordion').accordion({
    exclusive: false,
  });

  // initialize semantic ui ratings module:
  $('.serving.card .ui.rating').rating({
    maxRating: 5,
    interactive: false,
  });

  // initialize semantic ui sidebar:
  $('.sidebar')
    .sidebar({
      context: $('.tvn.page > .main'),
      scrollLock: true,
    })
    .sidebar('setting', 'transition', 'push');

  // toggle the sidebar when you click a card
  $('.serving.card').click(() => {
    $('.sidebar').sidebar('toggle');
  });
});
