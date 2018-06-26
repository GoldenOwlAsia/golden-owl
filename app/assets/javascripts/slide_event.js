// this js file involves in slide action performences (swiping, using arrow key)
$(document).ready(function() {

  var carousel = document.getElementById('myCarousel');
  // handling arrow keys pressing event
  $(document).keydown(function(event) {
    if (event.keyCode == 39) {
      $(carousel).carousel('next');
    }
    if (event.keyCode == 37) {
      $(carousel).carousel('prev');
    }
  });

  // handling swiping event

  delete Hammer.defaults.cssProps.userSelect; // select text

  Hammer(carousel).on('swipeleft', function() {
    $(carousel).carousel('next');
  });

  Hammer(carousel).on('swiperight', function() {
    $(carousel).carousel('prev');
  });
});
