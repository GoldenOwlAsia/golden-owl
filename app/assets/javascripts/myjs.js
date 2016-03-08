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


    //Set height auto for portfolio
    var heightPortfolio = $('.work-section > .content').height() + 160;
    $('.bg-portfolio').css('height', heightPortfolio + 'px');

    //Set height auto for contact
    var heightContact = $('.contact-section').height() + 100;
    $('.bg-contact').css('height', heightContact + 'px');

    //Auto slider
    var autoNext = setInterval(setAuto,10000); 
    $('.image-slider > .image:nth-child(1) > img').css({'transform':'scale(1)','opacity':'0.3'});

    
    //Scroll
    $(window).scroll(function(){

      //Check to see if the window is top if not then display button
      if ($(this).scrollTop() > 1) {
        $('.scrollToTop').fadeIn();
        var navbar = window.matchMedia("screen and (min-width: 987px)");
        if(navbar.matches){
          $('.navigation').css('position','fixed');
        }
      } else {
         $('.scrollToTop').fadeOut();
         $('.navigation').css('position','static');
      }

      //Active menu
      if($(this).scrollTop() >= $('.header-section').offset().top - 71){
        current_menu.removeClass('active');
        current_menu = $('.menu-content > li:nth-child(1) > .inside');
        current_menu.addClass('active');
      }
      for(var i = 1; i <= $('.menu-content > li').size(); i++){
        if($(this).scrollTop() >= $('.body-content > section:nth-child(' + i + ')').offset().top - 71){
          current_menu.removeClass('active');
          var y = i + 1;
          current_menu = $('.menu-content > li:nth-child(' + y + ') > .inside')
          current_menu.addClass('active');
        }
      }

      //Animation Service Scroll
      var header = $('.header-section').height();
      var top = header + $(this).scrollTop();
      var mql = window.matchMedia("screen and (min-width: 861px)");
      if(mql.matches){
        if (top > $('.service-row').offset().top){ 
          animateService_01();
        }
      }else {
        for(var i = 1; i <= 4; i++){
          var positionService = $('.service-row:nth-child(' + i + ')').offset().top;
          if (top > positionService){
            $('.service-row:nth-child(' + i + ') > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px'});
            $('.service-row:nth-child(' + i + ') > .text-service').delay(500).animate({'opacity':'1'}, 500);
          }
        }
      }

      //Animation Portfolio Scroll
      var header = $('.work-section').height();
      var top = header + $(this).scrollTop();
      var mql = window.matchMedia("screen and (min-width: 861px)");
      if(mql.matches){
        if (top > $('.content-work').offset().top){ 
          // $('.content-element').css({'margin-top':'0px','opacity':'1'});
        }
      }else {
        // for(var i = 1; i <= 4; i++){
        //   var positionService = $('.service-row:nth-child(' + i + ')').offset().top;
        //   if (top > positionService){
        //     $('.service-row:nth-child(' + i + ') > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px'});
        //     $('.service-row:nth-child(' + i + ') > .text-service').delay(500).animate({'opacity':'1'}, 500);
        //   }
        // }
      }

      //Animation About Scroll
      var about = window.matchMedia("screen and (min-width: 987px)");
      if(about.matches){
        for(var i = 1; i <= 4; i++){
          var positionSkill = $('.about-skill:nth-child(' + i + ')').offset().top - 100;
          if (top > positionSkill){
            if(i === 1){
              $('.about-skill:nth-child(' + i + ') > .skill').css({'width':'85%'});
            }
            if(i === 2){
              $('.about-skill:nth-child(' + i + ') > .skill').css({'width':'70%'});
            }
            if(i === 3){
              $('.about-skill:nth-child(' + i + ') > .skill').css({'width':'80%'});
            }
            if(i === 4){
              $('.about-skill:nth-child(' + i + ') > .skill').css({'width':'100%'});
            }
          }
        }
      }else{
        var positionSkill = $('.about-skill:nth-child(1)').offset().top - 200;
        if (top > positionSkill){
          $('.about-skill:nth-child(1) > .skill').css({'width':'85%'});
          $('.about-skill:nth-child(2) > .skill').css({'width':'70%'});
          $('.about-skill:nth-child(3) > .skill').css({'width':'80%'});
          $('.about-skill:nth-child(4) > .skill').css({'width':'100%'});
        }
      }
      
      //Animation Contact Scroll
      var contact = window.matchMedia("screen and (min-width: 846px)");
      if(contact.matches){
        for(var j = 1; j <= 2; j++){
          var positionContact = $('.contact-col:nth-child(' + j + ')').offset().top + 200;
          if (top > positionContact){
            $('.contact-col:nth-child(' + j + ') > .contact-form').css({'animation':'contact 1s forwards'});
          }
        }
      }else{
        for(var j = 1; j <= 2; j++){
          var positionContact = $('.contact-col:nth-child(' + j + ')').offset().top - 300;
          if (top > positionContact){
            $('.contact-col:nth-child(' + j + ') > .contact-form').css({'animation':'contact 1s forwards'});
          }
        }
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
      var current_top = $('.' + index + '-section').offset().top - 71;
      $('html, body').animate({ scrollTop: current_top }, 1000);
      current_menu.removeClass('active');
      current_menu = $('#' + index + ' > .inside');
      current_menu.addClass('active');
    });

    //Btn View About Us
    $('.btn-view').click(function(){
      var current_top = $('.contact-section').offset().top - 100;
      $('html, body').animate({ scrollTop: current_top }, 1000);
    });

    //Btn Zoom Out
    var current_img = 1;
    $('.btn-search').click(function(){
      $('.image-large').css('display','block');
      current_img = $(this).parents('.content-element').index() + 1;
      // var src = $('.content-element:nth-child(' + index + ') > .content-image > img').attr('src');
      $('.image-large > .image-content > img:nth-child(' + current_img + ')').css('display','inline-block');
      $('.image-large > .image-content > img:nth-child(' + current_img + ')').css('margin-top','0px');
    });

    $('.image-large > .image-content > img').hover(function(){
      var top = $('.image-large > .image-content > img:nth-child(' + current_img + ')').height() - $('.image-large').height();
      $('.image-large > .image-content > img:nth-child(' + current_img + ')').animate({'margin-top':'-'+top+'px'}, 5000);
      },function(){
        $('.image-large > .image-content > img:nth-child(' + current_img + ')').animate({'margin-top':'0px'}, 1000);
    });

    $('.image-content').click(function(){
      $('.image-large').css('display','none');
      $('.image-large > .image-content > img').css('display','none');
    });

    //Slider customer's feedback
    var current_feedback = 2;
    var numFeedback = $('.image-customer').size();
    $('#btn_left_feedback').click(function(){
      if(current_feedback === 2){
        //Return last feedback when we stay at first feedback
        var delay = 250;
        for(var i = 2; i <= numFeedback; i++){
          $('.image-customer:nth-of-type(' + i + ')').delay(delay).animate({'margin-left':'-100%'},500);
          $('.text:nth-of-type(' + i + ')').delay(delay).animate({'margin-left':'-110%'},500);
          delay = delay + 250;
        }
        current_feedback = numFeedback + 1;
        $('.image-customer:nth-of-type(' + current_feedback + ')').delay(delay).animate({'margin-left':'0%'},500);
        $('.text:nth-of-type(' + current_feedback + ')').delay(delay).animate({'margin-left':'0%'},500);
      }else{
        $('.image-customer:nth-of-type(' + current_feedback + ')').animate({'margin-left':'100%'},500);
        $('.text:nth-of-type(' + current_feedback + ')').animate({'margin-left':'110%'},500);
        current_feedback = current_feedback - 1;
        $('.image-customer:nth-of-type(' + current_feedback + ')').animate({'margin-left':'0%'},500);
        $('.text:nth-of-type(' + current_feedback + ')').animate({'margin-left':'0%'},500);
      }
    });

    $('#btn_right_feedback').click(function(){
      if(current_feedback > numFeedback){
        //Return first feedback when we stay at last feedback
        var delay = 250;
        for(var i = numFeedback + 1; i > 2; i--){
          $('.image-customer:nth-of-type(' + i + ')').delay(delay).animate({'margin-left':'100%'},500);
          $('.text:nth-of-type(' + i + ')').delay(delay).animate({'margin-left':'110%'},500);
          delay = delay + 250;
        }
        current_feedback = 2;
        $('.image-customer:nth-of-type(2)').delay(delay).animate({'margin-left':'0%'},500);
        $('.text:nth-of-type(2)').delay(delay).animate({'margin-left':'0%'},500);
      }else{
        $('.image-customer:nth-of-type(' + current_feedback + ')').animate({'margin-left':'-100%'},500);
        $('.text:nth-of-type(' + current_feedback + ')').animate({'margin-left':'-110%'},500);
        current_feedback = current_feedback + 1;
        $('.image-customer:nth-of-type(' + current_feedback + ')').animate({'margin-left':'0%'},500);
        $('.text:nth-of-type(' + current_feedback + ')').animate({'margin-left':'0%'},500);
      }
    });

    //Input contact
    var current_text = 1;
    $('.form').click(function(){
      // $('.form:nth-child(' + current_text + ') > h5').css('top','30px');
      // $('.form:nth-child(' + current_text + ') > h5').css('color','#282828');
      // $('.form:nth-child(' + current_text + ') > input').css('border-bottom','1px solid #d8d8d8');
      current_text = $(this).index() + 1;
      $('.form:nth-child(' + current_text + ') > h5').css('top','0px');
      $('.form:nth-child(' + current_text + ') > h5').css('color','white');
      $('.form:nth-child(' + current_text + ') > input').css('border-bottom','2px solid white');
      $('.form:nth-child(' + current_text + ') > input').focus();
    });
    // $('.form').focusout(function(){
    //   $('.form:nth-child(' + current_text + ') > h5').css('top','30px');
    //   $('.form:nth-child(' + current_text + ') > h5').css('color','#282828');
    //   $('.form:nth-child(' + current_text + ') > input').css('border-bottom','1px solid #d8d8d8');
    // });

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
      $('.service-row:nth-child(3) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'2s'});
      $('.service-row:nth-child(4) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'2.5s'});
      //Amination Text
      $('.service-row:nth-child(1) > .text-service').delay(3000).animate({'opacity':'1'}, 500);
      $('.service-row:nth-child(2) > .text-service').delay(3500).animate({'opacity':'1'}, 500);
      $('.service-row:nth-child(3) > .text-service').delay(4000).animate({'opacity':'1'}, 500);
      $('.service-row:nth-child(4) > .text-service').delay(4500).animate({'opacity':'1'}, 500);
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

