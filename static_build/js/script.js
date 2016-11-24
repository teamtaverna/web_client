const $ = window.$;

$.ready(() => {
  // initialize semantic ui accordion module:
  $('.ui.accordion').accordion({
    exclusive: false,
  });

  // initialize semantic ui ratings module:
  $('.serving.card .ui.rating').rating({
    maxRating: 5,
    interactive: false,
  });
});
