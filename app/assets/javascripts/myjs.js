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

<<<<<<< HEAD
=======
    //Set team default
    var left = 0;
    $('.member:nth-child(1)').css('margin-left',left + 'px');
    for(var team = 2; team <= $('.member').size(); team++){
      left = left + 300;
      $('.member:nth-child(' + team + ')').css('margin-left',left + 'px');
    }

    //Set height auto for portfolio
    var heightPortfolio = $('.work-section > .content').height() + 160;
    $('.bg-portfolio').css('height', heightPortfolio + 'px');

    //Set height auto for contact
    var heightContact = $('.contact-section').height() + 100;
    $('.bg-contact').css('height', heightContact + 'px');

    //Auto slider
<<<<<<< HEAD
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

<<<<<<< HEAD
=======
      //Animation About Scroll
      var about = window.matchMedia("screen and (min-width: 987px)");
      if(about.matches){
        for(var i = 1; i <= 4; i++){
          var positionSkill = $('.about-skill:nth-child(' + i + ')').offset().top;
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
              $('.about-skill:nth-child(' + i + ') > .skill').css({'width':'90%'});
            }
          }
        }
      }else{
        var positionSkill = $('.about-skill:nth-child(1)').offset().top - 200;
        if (top > positionSkill){
          $('.about-skill:nth-child(1) > .skill').css({'width':'85%'});
          $('.about-skill:nth-child(2) > .skill').css({'width':'70%'});
          $('.about-skill:nth-child(3) > .skill').css({'width':'80%'});
          $('.about-skill:nth-child(4) > .skill').css({'width':'90%'});
        }
      }

      //Animation Contact Scroll
      var contact = window.matchMedia("screen and (min-width: 846px)");
      if(contact.matches){
        for(var j = 1; j <= 2; j++){
          var positionContact = $('.contact-col:nth-child(' + j + ')').offset().top + 300;
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
      var current_top = $('.' + index + '-section').offset().top - 80;
      $('html, body').animate({ scrollTop: current_top }, 1000);
      current_menu.removeClass('active');
      current_menu = $('#' + index + ' > .inside');
      current_menu.addClass('active');
    });

    //Btn View About Us
    $('.btn-view').click(function(){
      var current_top = $('.about-section').offset().top - 100;
      $('html, body').animate({ scrollTop: current_top }, 1000);
    });

    //Input contact
    var current_text = 1;
    $('.form').click(function(){
      $('.form:nth-child(' + current_text + ') > h5').css('top','30px');
      $('.form:nth-child(' + current_text + ') > h5').css('color','#878787');
      $('.form:nth-child(' + current_text + ') > input').css('border-bottom','1px solid #d8d8d8');
      current_text = $(this).index() + 1;
      $('.form:nth-child(' + current_text + ') > h5').css('top','0px');
      $('.form:nth-child(' + current_text + ') > h5').css('color','#f7c31b');
      $('.form:nth-child(' + current_text + ') > input').css('border-bottom','2px solid #f7c31b');
      $('.form:nth-child(' + current_text + ') > input').focus();
    });
    $('.form').focusout(function(){
      $('.form:nth-child(' + current_text + ') > h5').css('top','30px');
      $('.form:nth-child(' + current_text + ') > h5').css('color','#878787');
      $('.form:nth-child(' + current_text + ') > input').css('border-bottom','1px solid #d8d8d8');
    });



    var current_team1 = 1;
    var current_team2 = 2;
    var current_team3 = 3;
    var numTeam = $('.member').size();
    $('.btn-left').css('display','none');

    //Button Right
    $('.btn-right').click(function(){
      $('.btn-left').css('display','block');

      var team1 = window.matchMedia("screen and (min-width: 987px)");
      if(team1.matches){
        $('.member:nth-child(' + current_team1 + ')').css('margin-left','-900px');
        $('.member:nth-child(' + current_team2 + ')').css('margin-left','-600px');
        $('.member:nth-child(' + current_team3 + ')').css('margin-left','-300px');
        current_team1 = current_team1 + 3;
        current_team2 = current_team2 + 3;
        current_team3 = current_team3 + 3;
        if(current_team1 > numTeam || current_team2 > numTeam || current_team3 > numTeam){
          $('.btn-right').css('display','none');
        }
        $('.member:nth-child(' + current_team1 + ')').css('margin-left','0px');
        $('.member:nth-child(' + current_team2 + ')').css('margin-left','300px');
        $('.member:nth-child(' + current_team3 + ')').css('margin-left','600px');

        var status = current_team1 + 3;
        if(status > numTeam){
          $('.btn-right').css('display','none');
        }
      }
      var team2 = window.matchMedia("screen and (max-width: 986px) and (min-width: 787px)");
      if(team2.matches){
        $('.member:nth-child(' + current_team1 + ')').css('margin-left','-600px');
        $('.member:nth-child(' + current_team2 + ')').css('margin-left','-300px');
        current_team1 = current_team1 + 2;
        current_team2 = current_team2 + 2;
        if(current_team1 > numTeam || current_team2 > numTeam){
          $('.btn-right').css('display','none');
        }
        $('.member:nth-child(' + current_team1 + ')').css('margin-left','0px');
        $('.member:nth-child(' + current_team2 + ')').css('margin-left','300px');

        var status = current_team1 + 2;
        if(status > numTeam){
          $('.btn-right').css('display','none');
        }
      }
      var team3 = window.matchMedia("screen and (max-width: 786px)");
      if(team3.matches){
        $('.member:nth-child(' + current_team1 + ')').css('margin-left','-300px');
        current_team1 = current_team1 + 1;
        if(current_team1 > numTeam){
          $('.btn-right').css('display','none');
        }
        $('.member:nth-child(' + current_team1 + ')').css('margin-left','0px');

        var status = current_team1 + 1;
        if(status > numTeam){
          $('.btn-right').css('display','none');
        }
      }
    });

    //Button Left
    $('.btn-left').click(function(){
      $('.btn-right').css('display','block');

      var team1 = window.matchMedia("screen and (min-width: 987px)");
      if(team1.matches){
        $('.member:nth-child(' + current_team1 + ')').css('margin-left','900px');
        $('.member:nth-child(' + current_team2 + ')').css('margin-left','1200px');
        $('.member:nth-child(' + current_team3 + ')').css('margin-left','1500px');
        current_team1 = current_team1 - 3;
        current_team2 = current_team2 - 3;
        current_team3 = current_team3 - 3;
        if(current_team1 < 1 || current_team2 < 1 || current_team3 < 1){
          $('.btn-left').css('display','none');
        }
        $('.member:nth-child(' + current_team1 + ')').css('margin-left','0px');
        $('.member:nth-child(' + current_team2 + ')').css('margin-left','300px');
        $('.member:nth-child(' + current_team3 + ')').css('margin-left','600px');
        var status = current_team3 - 3;
        if(status < 1){
          $('.btn-left').css('display','none');
        }
      }
      var team1 = window.matchMedia("screen and (max-width: 986px) and (min-width: 787px)");
      if(team1.matches){
        $('.member:nth-child(' + current_team1 + ')').css('margin-left','600px');
        $('.member:nth-child(' + current_team2 + ')').css('margin-left','900px');
        current_team1 = current_team1 - 2;
        current_team2 = current_team2 - 2;
        if(current_team1 < 1 || current_team2 < 1){
          $('.btn-left').css('display','none');
        }
        $('.member:nth-child(' + current_team1 + ')').css('margin-left','0px');
        $('.member:nth-child(' + current_team2 + ')').css('margin-left','300px');
        var status = current_team2 - 2;
        if(status < 1){
          $('.btn-left').css('display','none');
        }
      }
      var team1 = window.matchMedia("screen and (max-width: 786px)");
      if(team1.matches){
        $('.member:nth-child(' + current_team1 + ')').css('margin-left','300px');
        current_team1 = current_team1 - 1;
        if(current_team1 < 1){
          $('.btn-left').css('display','none');
        }
        $('.member:nth-child(' + current_team1 + ')').css('margin-left','0px');
        var status = current_team1 - 1;
        if(status < 1){
          $('.btn-left').css('display','none');
        }
      }
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

