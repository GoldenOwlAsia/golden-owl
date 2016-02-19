$('document').ready(function() {
  $('label.tree-toggler').click(function () {
    $(this).parent().children('ul.tree').toggle(300);
  });

  var current_menu = $('.category > ul > .category-menu:first-child');
  var current_blog = $('.category > ul > .show-category-name > p:first-child');
  // $('.category > ul > .category-menu').click(function(){
  //   current_menu.removeClass('active');
  //   $('.category > ul > li:last-of-type > div:nth-child(' + current_blog + ')').removeClass('active');
  //   current_menu = $(this);
  //   current_blog = $(this).index() + 1;
  //   current_menu.addClass('active');
  //   $('.category > ul > li:last-of-type > div:nth-child(' + current_blog + ')').addClass('active');
  // });
  $('.category > ul > .category-menu').hover(function(){
    current_menu.removeClass('hover-category');
    $('.category > ul > li:last-of-type > p:nth-child(' + current_blog + ')').removeClass('active');
    current_menu = $(this);
    current_blog = $(this).index() + 1;
    current_menu.addClass('hover-category');
    $('.category > ul > li:last-of-type > p:nth-child(' + current_blog + ')').addClass('active');

    }, function(){
      $('.category > ul > li:nth-child(' + current_blog + ')').removeClass('hover-category');
      $('.category > ul > li:last-of-type > p:nth-child(' + current_blog + ')').removeClass('active');
      $('.category > ul > li:last-of-type > p:nth-child(current_blog)').addClass('active');
  });


});