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

//add or remove active class for sidebar element
//base on current section
function activeClass(nav, currentAnchor) {
  if (!currentAnchor)
    currentAnchor = "#home";

  nav.each(function() { 
    var imgSrc = $("img", this).attr('src'),
        active = 'active-',

        lastSlashIdx = imgSrc.lastIndexOf('/'),
        base = imgSrc.substring(0, lastSlashIdx + 1),
        imgName = imgSrc.substring(lastSlashIdx + 1),
        newName = imgSrc;

    if ($(this).attr('href') == currentAnchor) {
      if (imgSrc.search(active) == -1) {
        newName = base + active + imgName;
      }
      $(this).parent().addClass('active');
    }

    else {
      // not active section but have active in name
      if (imgSrc.search(active) != -1) {
        newName = base + imgName.substring(active.length);
      }
      $(this).parent().removeClass('active');
    }

    $("img", this).attr('src', newName);
    $(this).blur();
  });
}

$(document).ready(function() {
  var anchors = ['home', 'what-we-do', 'what-we-know', 'who-we-are', 'contact']
  var sideBar = $('.sidebar ul li a.nav-icon');

  $('#home-container').fullpage({
    anchors: anchors,
    menu: '#navbar',
    scrollBar: true,
    scrollOverflow: true,
    
    onLeave: function(index, nextIndex, direction){
      // index and nextIndex of sections start from 1 !!!
      var currentAnchor = '#' + anchors[nextIndex - 1];
      activeClass(sideBar, currentAnchor);
    }
  });
  

  $(window).load(function() {
    var url = window.location.href;
    var currentAnchor = url.substring(url.lastIndexOf('/') + 1);
    activeClass(sideBar, currentAnchor);
  });

  $('.navbar-toggle.collapsed').click(function() {
    $('#navbar').css("height", "100vh");
  });
  
});
