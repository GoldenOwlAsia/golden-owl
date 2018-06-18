// contains configurations for using fullPage library
$(document).ready(function() {
  var anchors = ['home', 'what-we-do', 'what-we-know', /*'about-us',*/
                 'testimonial', 'contact', 'contact'];

  var sideBar = $('.sidebar ul li a.nav-icon');

  $('#home-container').fullpage({
    anchors: anchors,
    menu: '.menu',
    scrollOverflow: true,
    paddingTop: '46px',
    verticalCentered: false,

    /* default slide selector is '.slide', conflicts with bootstrap carousel
     * should be changed if you want to use fullpage slide component
     */
    slideSelector: '',

    // for selecting text
    scrollOverflowOptions: { disablePointer: true, }
  });
});

