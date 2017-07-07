$('document').ready(function(){
  var elAll = document.getElementById('all');
  var elWeb = document.getElementById('web');
  var elMobile = document.getElementById('mobile');
  var elAllGroup = document.getElementById('all-group');
  var elWebGroup = document.getElementById('web-group');
  var elMobileGroup = document.getElementById('mobile-group');
  elAllGroup.style.display = 'block';
  elWebGroup.style.display = 'none';
  elMobileGroup.style.display = 'none';
  function changeState() {
    var elNav = document.getElementsByTagName('li');
    elAll.firstChild.className = 'deactive';
    elWeb.firstChild.className = 'deactive';
    elMobile.firstChild.className = 'deactive';
    this.firstChild.className = "active";
    if (elAll.firstChild.className == 'active')
    {
        elAllGroup.style.display = 'block';
        elWebGroup.style.display = 'none';
        elMobileGroup.style.display = 'none';
    }
        if (elWeb.firstChild.className == 'active')
    {
        elAllGroup.style.display = 'none';
        elWebGroup.style.display = 'block';
        elMobileGroup.style.display = 'none';
    }
        if (elMobile.firstChild.className == 'active')
    {
        elAllGroup.style.display = 'none';
        elWebGroup.style.display = 'none';
        elMobileGroup.style.display = 'block';
    }
  }
  elAll.addEventListener('click', changeState, false);
  elMobile.addEventListener('click', changeState, false);
  elWeb.addEventListener('click', changeState, false);
  var details = document.getElementById('detail-project');
  // show details
  // var object = {
  //   elall1: {
  //     id: "techlist",
  //     index: 0,
  //   },

  // }
  if ( window.innerWidth > 0 ) {
    var all = document.getElementById('all-group');
    var elAll1 = document.getElementById('techlist');
    var elAll2 = document.getElementById('idea-burn');
    // var elAll3 = document.getElementById('giveasia');
    var elAll4 = document.getElementById('weath');
    var elAll13 = document.getElementById('artfolo');
    var elAll14 = document.getElementById('cpd');
    // var elAll15 = document.getElementById('blix');
    var elAll16 = document.getElementById('built');
    // var elAll17 = document.getElementById('flat');
    var elAll18 = document.getElementById('gllu');
    var elAll19 = document.getElementById('fitday');
    var elAll20 = document.getElementById('stage');
    var elAll21 = document.getElementById('study');
    var elAll22 = document.getElementById('iadoa');
    var elAll23 = document.getElementById('serumi');
    var elAll24 = document.getElementById('scope');
    var elAll25 = document.getElementById('toned');
    var elAll26 = document.getElementById('tyk');
    var elAll27 = document.getElementById('war');
    var elAll28 = document.getElementById('natt');
    var elAll29 = document.getElementById('allstart');
    var elAll30 = document.getElementById('laku6');
    // var elAll31 = document.getElementById('a21');
    var elAll32 = document.getElementById('dbs');
    var elAll5 = document.getElementById('corpzap');
    // var elAll6 = document.getElementById('luxufy');
    var elAll7 = document.getElementById('student');
    var elAll8 = document.getElementById('luxenomad');
    // var elAll9 = document.getElementById('booqed');
    var elAll10 = document.getElementById('mywork');
    var elAll11 = document.getElementById('app2rist');
    var elAll12 = document.getElementById('nattrart');
    var elWeb1 = document.getElementById('corpzap-w');
    // var elWeb2 = document.getElementById('luxufy-w');
    var elWeb3 = document.getElementById('student-w');
    var elWeb4 = document.getElementById('luxenomad-w');
    var elWeb5 = document.getElementById('artfolo-w');
    var elWeb6 = document.getElementById('cpd-w');
    var elWeb7 = document.getElementById('blix-w');
    // var elWeb8 = document.getElementById('flat-w');
    var elWeb9 = document.getElementById('study-w');
    var elWeb10 = document.getElementById('iadoa-w');
    var elWeb11 = document.getElementById('serumi-w');
    var elWeb12 = document.getElementById('stage-w');
    var elWeb13 = document.getElementById('techlist-w');
    var elWeb14 = document.getElementById('idea-burn-w');
    // var elWeb15 = document.getElementById('giveasia-w');
    var elWeb16 = document.getElementById('weath-w');
    var elWeb17 = document.getElementById('toned-w');
    var elWeb18 = document.getElementById('tyk-w');
    var elWeb19 = document.getElementById('war-w');
    var elWeb20 = document.getElementById('natt-w');
    var elWeb21 = document.getElementById('allstart-w');
    var elWeb22 = document.getElementById('laku6-w');
    // var elWeb23 = document.getElementById('a21-w');
    var elWeb24 = document.getElementById('study-w2');
    // var elMobile1 = document.getElementById('booqed-m');
    var elMobile2 = document.getElementById('mywork-m');
    // var elMobile3 = document.getElementById('app2rist-m');
    var elMobile4 = document.getElementById('nattrart-m');
    var elMobile5 = document.getElementById('gllu-m');
    var elMobile6 = document.getElementById('fitday-m');
    var elMobile7 = document.getElementById('scope-m');
    var elMobile8 = document.getElementById('built-m');
    var elMobile9 = document.getElementById('app2rist-m2');
    var elMobile10 = document.getElementById('dbs-m');
    var elMobile11 = document.getElementById('view360-m');
    // var elMobile12 = document.getElementById('toned-m');

    function all1Click(){
      details.style.display = "block";
      details.lastChild.childNodes[0].style.display = "block"
    }
    function all2Click(){
      details.style.display = "block";
      details.lastChild.childNodes[1].style.display = "block"
    }
    function all3Click(){
      details.style.display = "block";
      details.lastChild.childNodes[2].style.display = "block"
    }
    function all4Click(){
      details.style.display = "block";
      details.lastChild.childNodes[3].style.display = "block"
    }
    function all5Click(){
      details.style.display = "block";
      details.lastChild.childNodes[4].style.display = "block"
    }
    function all6Click(){
      details.style.display = "block";
      details.lastChild.childNodes[5].style.display = "block"
    }
    function all7Click(){
      details.style.display = "block";
      details.lastChild.childNodes[6].style.display = "block"
    }
    function all8Click(){
      details.style.display = "block";
      details.lastChild.childNodes[7].style.display = "block"
    }
    function all9Click(){
      details.style.display = "block";
      details.lastChild.childNodes[8].style.display = "block"
    }
    function all10Click(){
      details.style.display = "block";
      details.lastChild.childNodes[9].style.display = "block"
    }
    function all11Click(){
      details.style.display = "block";
      details.lastChild.childNodes[10].style.display = "block"
    }
    function all12Click(){
      details.style.display = "block";
      details.lastChild.childNodes[11].style.display = "block"
    }
    function all13Click(){
      details.style.display = "block";
      details.lastChild.childNodes[12].style.display = "block"
    }
    function all14Click(){
      details.style.display = "block";
      details.lastChild.childNodes[13].style.display = "block"
    }
    function all15Click(){
      details.style.display = "block";
      details.lastChild.childNodes[14].style.display = "block"
    }
    function all16Click(){
      details.style.display = "block";
      details.lastChild.childNodes[15].style.display = "block"
    }
    function all17Click(){
      details.style.display = "block";
      details.lastChild.childNodes[16].style.display = "block"
    }
    function all18Click(){
      details.style.display = "block";
      details.lastChild.childNodes[17].style.display = "block"
    }
    function all19Click(){
      details.style.display = "block";
      details.lastChild.childNodes[18].style.display = "block"
    }
    function all20Click(){
      details.style.display = "block";
      details.lastChild.childNodes[19].style.display = "block"
    }
    function all21Click(){
      details.style.display = "block";
      details.lastChild.childNodes[20].style.display = "block"
    }
    function all22Click(){
      details.style.display = "block";
      details.lastChild.childNodes[21].style.display = "block"
    }
    function all23Click(){
      details.style.display = "block";
      details.lastChild.childNodes[22].style.display = "block"
    }
    function all24Click(){
      details.style.display = "block";
      details.lastChild.childNodes[23].style.display = "block"
    }
    function all25Click(){
      details.style.display = "block";
      details.lastChild.childNodes[24].style.display = "block"
    }
    function all26Click(){
      details.style.display = "block";
      details.lastChild.childNodes[25].style.display = "block"
    }
    function all27Click(){
      details.style.display = "block";
      details.lastChild.childNodes[26].style.display = "block"
    }
    function all28Click(){
      details.style.display = "block";
      details.lastChild.childNodes[11].style.display = "block"
    }
    function all29Click(){
      details.style.display = "block";
      details.lastChild.childNodes[27].style.display = "block"
    }
    function all30Click(){
      details.style.display = "block";
      details.lastChild.childNodes[32].style.display = "block"
    }
    function all31Click(){
      details.style.display = "block";
      details.lastChild.childNodes[29].style.display = "block"
    }
    function all32Click(){
      details.style.display = "block";
      details.lastChild.childNodes[30].style.display = "block"
    }
    function mobile1Click(){
      details.style.display = "block";
      details.lastChild.childNodes[8].style.display = "block"
    }
    function mobile2Click(){
      details.style.display = "block";
      details.lastChild.childNodes[9].style.display = "block"
    }
    function mobile3Click(){
      details.style.display = "block";
      details.lastChild.childNodes[10].style.display = "block"
    }
    function mobile4Click(){
      details.style.display = "block";
      details.lastChild.childNodes[31].style.display = "block"
    }
    function mobile5Click(){
      details.style.display = "block";
      details.lastChild.childNodes[17].style.display = "block"
    }
    function mobile6Click(){
      details.style.display = "block";
      details.lastChild.childNodes[18].style.display = "block"
    }
    function mobile7Click(){
      details.style.display = "block";
      details.lastChild.childNodes[23].style.display = "block"
    }
    function mobile8Click(){
      details.style.display = "block";
      details.lastChild.childNodes[15].style.display = "block"
    }
    function mobile9Click(){
      details.style.display = "block";
      details.lastChild.childNodes[10].style.display = "block"
    }
    function mobile10Click(){
      details.style.display = "block";
      details.lastChild.childNodes[30].style.display = "block"
    }
    function mobile11Click(){
      details.style.display = "block";
      details.lastChild.childNodes[28].style.display = "block"
    }
    function mobile12Click(){
      details.style.display = "block";
      details.lastChild.childNodes[24].style.display = "block"
    }
    function web1Click(){
      details.style.display = "block";
      details.lastChild.childNodes[4].style.display = "block"
    }
    function web2Click(){
      details.style.display = "block";
      details.lastChild.childNodes[5].style.display = "block"
    }
    function web3Click(){
      details.style.display = "block";
      details.lastChild.childNodes[6].style.display = "block"
    }
    function web4Click(){
      details.style.display = "block";
      details.lastChild.childNodes[7].style.display = "block"
    }
    function web5Click(){
      details.style.display = "block";
      details.lastChild.childNodes[12].style.display = "block"
    }
    function web6Click(){
      details.style.display = "block";
      details.lastChild.childNodes[13].style.display = "block"
    }
    function web7Click(){
      details.style.display = "block";
      details.lastChild.childNodes[14].style.display = "block"
    }
    function web8Click(){
      details.style.display = "block";
      details.lastChild.childNodes[16].style.display = "block"
    }
    function web9Click(){
      details.style.display = "block";
      details.lastChild.childNodes[20].style.display = "block"
    }
    function web10Click(){
      details.style.display = "block";
      details.lastChild.childNodes[21].style.display = "block"
    }
    function web11Click(){
      details.style.display = "block";
      details.lastChild.childNodes[22].style.display = "block"
    }
    function web12Click(){
      details.style.display = "block";
      details.lastChild.childNodes[19].style.display = "block"
    }
    function web13Click(){
      details.style.display = "block";
      details.lastChild.childNodes[0].style.display = "block"
    }
    function web14Click(){
      details.style.display = "block";
      details.lastChild.childNodes[1].style.display = "block"
    }
    function web15Click(){
      details.style.display = "block";
      details.lastChild.childNodes[2].style.display = "block"
    }
    function web16Click(){
      details.style.display = "block";
      details.lastChild.childNodes[3].style.display = "block"
    }
      function web17Click(){
      details.style.display = "block";
      details.lastChild.childNodes[24].style.display = "block"
    }
    function web18Click(){
      details.style.display = "block";
      details.lastChild.childNodes[25].style.display = "block"
    }
    function web19Click(){
      details.style.display = "block";
      details.lastChild.childNodes[26].style.display = "block"
    }
    function web20Click(){
      details.style.display = "block";
      details.lastChild.childNodes[11].style.display = "block"
    }
      function web21Click(){
      details.style.display = "block";
      details.lastChild.childNodes[27].style.display = "block"
    }
    function web22Click(){
      details.style.display = "block";
      details.lastChild.childNodes[32].style.display = "block"
    }
    function web23Click(){
      details.style.display = "block";
      details.lastChild.childNodes[29].style.display = "block"
    }
    function web24Click(){
      details.style.display = "block";
      details.lastChild.childNodes[20].style.display = "block"
    }
    elAll1.addEventListener('click', all1Click, false);
    elAll2.addEventListener('click', all2Click, false);
    // elAll3.addEventListener('click', all3Click, false);
    elAll4.addEventListener('click', all4Click, false);
    elAll5.addEventListener('click', all5Click, false);
    // elAll6.addEventListener('click', all6Click, false);
    elAll7.addEventListener('click', all7Click, false);
    elAll8.addEventListener('click', all8Click, false);
    // elAll9.addEventListener('click', all9Click, false);
    elAll10.addEventListener('click', all10Click, false);
    elAll11.addEventListener('click', all11Click, false);
    elAll12.addEventListener('click', all12Click, false);
    elAll13.addEventListener('click', all13Click, false);
    elAll14.addEventListener('click', all14Click, false);
    // elAll15.addEventListener('click', all15Click, false);
    elAll16.addEventListener('click', all16Click, false);
    // elAll17.addEventListener('click', all17Click, false);
    elAll18.addEventListener('click', all18Click, false);
    elAll19.addEventListener('click', all19Click, false);
    elAll20.addEventListener('click', all20Click, false);
    elAll21.addEventListener('click', all21Click, false);
    elAll22.addEventListener('click', all22Click, false);
    elAll23.addEventListener('click', all23Click, false);
    elAll24.addEventListener('click', all24Click, false);
    elAll25.addEventListener('click', all25Click, false);
    elAll26.addEventListener('click', all26Click, false);
    elAll27.addEventListener('click', all27Click, false);
    elAll28.addEventListener('click', all28Click, false);
    elAll29.addEventListener('click', all29Click, false);
    elAll30.addEventListener('click', all30Click, false);
    // elAll31.addEventListener('click', all31Click, false);
    elAll32.addEventListener('click', all32Click, false);
    // elMobile1.addEventListener('click', mobile1Click, false);
    elMobile2.addEventListener('click', mobile2Click, false);
    // elMobile3.addEventListener('click', mobile3Click, false);
    elMobile4.addEventListener('click', mobile4Click, false);
    elMobile5.addEventListener('click', mobile5Click, false);
    elMobile6.addEventListener('click', mobile6Click, false);
    elMobile7.addEventListener('click', mobile7Click, false);
    elMobile8.addEventListener('click', mobile8Click, false);
    elMobile9.addEventListener('click', mobile9Click, false);
    elMobile10.addEventListener('click', mobile10Click, false);
    elMobile11.addEventListener('click', mobile11Click, false);
    // elMobile12.addEventListener('click', mobile12Click, false);
    elWeb1.addEventListener('click', web1Click, false);
    // elWeb2.addEventListener('click', web2Click, false);
    elWeb3.addEventListener('click', web3Click, false);
    elWeb4.addEventListener('click', web4Click, false);
    elWeb5.addEventListener('click', web5Click, false);
    elWeb6.addEventListener('click', web6Click, false);
    elWeb7.addEventListener('click', web7Click, false);
    // elWeb8.addEventListener('click', web8Click, false);
    elWeb9.addEventListener('click', web9Click, false);
    elWeb10.addEventListener('click', web10Click, false);
    elWeb11.addEventListener('click', web11Click, false);
    elWeb12.addEventListener('click', web12Click, false);
    elWeb13.addEventListener('click', web13Click, false);
    elWeb14.addEventListener('click', web14Click, false);
    // elWeb15.addEventListener('click', web15Click, false);
    elWeb16.addEventListener('click', web16Click, false);
    elWeb17.addEventListener('click', web17Click, false);
    elWeb18.addEventListener('click', web18Click, false);
    elWeb19.addEventListener('click', web19Click, false);
    elWeb20.addEventListener('click', web20Click, false);
    elWeb21.addEventListener('click', web21Click, false);
    elWeb22.addEventListener('click', web22Click, false);
    // elWeb23.addEventListener('click', web23Click, false);
    elWeb24.addEventListener('click', web24Click, false);
  }
  //return page
  var bg = document.getElementById('bg-project');
  function returnClick (){
    details.style.display = "none";
    for (var i =0; i<details.lastChild.childNodes.length;i++)
    {
      details.lastChild.childNodes[i].style.display = "none";
    }
  }

  details.addEventListener('click', returnClick, false);
  bg.addEventListener('click', returnClick, false);

});
