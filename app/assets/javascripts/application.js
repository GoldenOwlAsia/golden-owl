// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require bootstrap
//= require_tree
//= require ckeditor/init
//= require bootstrap.min
//= require scrolloverflow
//= require jquery.fullPage

$(document).ready(function() {
  var anchors = ['home', 'what-we-do', 'what-we-know', 'about-us', 'contact', 'contact'];
  var sideBar = $('.sidebar ul li a.nav-icon');

  $('#home-container').fullpage({
    anchors: anchors,
    menu: '.menu',
    scrollOverflow: true,
    paddingTop: '46px',
    verticalCentered: false
  });
});
