$('document').ready(function() {
    var mn = $('.menu-section');
    var mns_01 = 'menu-section-scroll-01';
    var mns_02 = 'menu-section-scroll-02';
    var service = $('.service-section').offset().top - 100;
    var current_slider = 1;

    var stt = $('.scrollToTop');
    var stt_1 = 'scrollToTop-1';
    var stt_2 = 'scrollToTop-2';

    var current_menu = $('.menu-content > li:nth-child(1) > .inside');
    var numService = $('.service-row').size();

    //Set height auto for slider
    var heightSlider = $('.image:nth-child(1)').height();
    $('.slider').css('height', heightSlider + 'px');

    //Auto slider
    var autoNext = setInterval(setAuto,10000);
    $('.image-slider > .image:nth-child(1) > img').css({'transform':'scale(1)','opacity':'0.4'});


    //Scroll
    $(window).scroll(function(){

      //Active menu
      if($(this).scrollTop() >= $('.header-section').offset().top - 80){
        current_menu.removeClass('active');
        current_menu = $('.menu-content > li:nth-child(1) > .inside');
        current_menu.addClass('active');
      }
      for(var i = 1; i <= $('.menu-content > li').size(); i++){
        if($(this).scrollTop() >= $('.body-content > section:nth-child(' + i + ')').offset().top - 80){
          current_menu.removeClass('active');
          var y = i + 1;
          current_menu = $('.menu-content > li:nth-child(' + y + ') > .inside')
          current_menu.addClass('active');
        }
      }

      //Animation Scroll
      var header = $('.header-section').height();
      var top = header + $(this).scrollTop();
      var mql = window.matchMedia("screen and (min-width: 861px)");
      if(mql.matches){
        if (top > $('.service-row').offset().top){
          animateService_01();
        }
      }else {
        for(var i = 1; i <= 4; i++){
          var position = $('.service-row:nth-child(' + i + ')').offset().top + 100;
          if (top > position){
            $('.service-row:nth-child(' + i + ') > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px'});
            $('.service-row:nth-child(' + i + ') > .text-service').delay(500).animate({'opacity':'1'}, 500);
          }
        }
      }

      //Check to see if the window is top if not then display button
      if ($(this).scrollTop() > 0) {
         $('.scrollToTop').fadeIn();
         $('.navigation').css('position','fixed');
      } else {
         $('.scrollToTop').fadeOut();
         $('.navigation').css('position','static');
      }
    });


    //Click event to scroll to top
    $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });


    //Navbar Responsive
    $('.navbar').click(function(){
      $('.menu-content').slideToggle();
    });


    //Navigation
    $('.menu-content > li').click(function(){
      var index = $(this).attr('id');
      var current_top = $('.' + index + '-section').offset().top - 70;
      $('html, body').animate({ scrollTop: current_top }, 1000);

      var mql = window.matchMedia("screen and (min-width: 861px)");
      if (mql.matches){ // if media query matches
        animateService_01();
      }else {
        animateService_02();
      }

      current_menu.removeClass('active');
      current_menu = $('#' + index + ' > .inside');
      current_menu.addClass('active');
    });


    //Function
    function setAuto(){
      current_slider = current_slider + 1;
      if(current_slider > 3){
        current_slider = 1;
      }
      $('.image-slider > .image:nth-child(' + current_slider + ') > img').css({'transform':'scale(1)','opacity':'0.4'});
      var before = current_slider - 1;
      var next = current_slider + 1;
      if(before < 1){
        before = 3;
      }
      if(next > 3){
        next = 1;
      }
      $('.image-slider > .image:nth-child(' + next + ') > img').css({'transform':'scale(1.5)','opacity':'0'});
      $('.image-slider > .image:nth-child(' + before + ') > img').css({'opacity':'0'});
    }
    function animateService_01(){
      //Amination image
      $('.service-row:nth-child(1) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'1s'});
      $('.service-row:nth-child(2) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'1.5s'});
      $('.service-row:nth-child(3) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'2.5s'});
      $('.service-row:nth-child(4) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'2s'});
      //Amination Text
      $('.service-row:nth-child(1) > .text-service').delay(3000).animate({'opacity':'1'}, 500);
      $('.service-row:nth-child(2) > .text-service').delay(3500).animate({'opacity':'1'}, 500);
      $('.service-row:nth-child(3) > .text-service').delay(4500).animate({'opacity':'1'}, 500);
      $('.service-row:nth-child(4) > .text-service').delay(4000).animate({'opacity':'1'}, 500);
    }
    function animateService_02(){
      //Amination image
      $('.service-row:nth-child(1) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'1s'});
      $('.service-row:nth-child(2) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'2s'});
      $('.service-row:nth-child(3) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'3s'});
      $('.service-row:nth-child(4) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'4s'});
      //Amination Text
      $('.service-row:nth-child(1) > .text-service').delay(1500).animate({'opacity':'1'}, 500);
      $('.service-row:nth-child(2) > .text-service').delay(2500).animate({'opacity':'1'}, 500);
      $('.service-row:nth-child(3) > .text-service').delay(3500).animate({'opacity':'1'}, 500);
      $('.service-row:nth-child(4) > .text-service').delay(4500).animate({'opacity':'1'}, 500);
    }


});
$('document').ready(function() {
  $('label.tree-toggler').click(function () {
    $(this).parent().children('ul.tree').toggle(300);
  });
});

