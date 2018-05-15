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
//= require jquery.fullPage
//= require scrolloverflow
$(document).ready(function() {
  $('#home-container').fullpage({
    anchors:['home', 'what-we-do', 'what-we-know', 'who-we-are', 'contact'],
    menu: '#navbar',
    scrollBar: true,
  });

  // add or remove active class for sidebar element
  // base on current section
  function activeClass(selector) {
    var sideBar = $(selector);
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1);

    sideBar.each(function() { 
      if ($(this).attr('href') == id) {
        $(this).addClass('active');
      }
      else {
        $(this).removeClass('active');
      }
      $(this).blur();
    });
  }

  $(window).load(function() {
    activeClass('.sidebar ul li a');
  });

  $(window).scroll(function() {
    activeClass('.sidebar ul li a');
  });

});
