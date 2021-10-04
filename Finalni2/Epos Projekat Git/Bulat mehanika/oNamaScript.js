$( "#accordion" ).accordion({
    animate: 200
  });

  $(function(){
    $("#divUsluge").hover(function(){
      $("#dropdownMenu").slideDown(300);
      
    }, function(){
      $("#dropdownMenu").slideUp(300);
      
    });
  });
  
  $(function(){
    $("#autoMehanika").hover(function(){
      $(this).animate({'background-color':'#f3f3f3'});
    },function(){
      $(this).animate({'background-color':'white'});
    });
  });
  
  $(function(){
    $("#autoLimarija").hover(function(){
      $(this).animate({'background-color':'#f3f3f3'});
    },function(){
      $(this).animate({'background-color':'white'});
    });
  });

  $(function(){
    $("#autoElektrika").hover(function(){
      $(this).animate({'background-color':'#f3f3f3'});
    },function(){
      $(this).animate({'background-color':'white'});
    });
  });
  

  $(function(){
    $(".par").hover(function(){
      $(this).animate({'color':'#8e0d0d;'},10);
    },function(){
      $(this).animate({'color':'#2e2929;'},10);
    });
  });

  // $("#logo").click(function(){
  //   window.open("PocetnaBezIntro.html");
  // });

   $("#logo").click(function(){
     window.open("PocetnaBezIntro.html","_self");
   });

  // $("#divKontakt").click(function(){
  //   window.open("Kontakt.html");
  // });
  
  // $("#divPocetna").click(function(){
  //   window.open("PocetnaBezIntro.html");
  // });

  // $("#autoMehanika").click(function(){
  //   window.open("AutoMehanika.html");
  // });
  
  
  // $("#divONama").click(function(){
  //   window.open("oNama.html");
  // });
  // $("#autoLimarija").click(function(){
  //   window.open("AutoLimarija.html");
  // });

  // $("#autoElektrika").click(function(){
  //   window.open("AutoElektrika.html");
  // });
  $("#divKontakt").click(function(){
    window.open("Kontakt.html","_self");
  });
  
  $("#divPocetna").click(function URL(){
    location.href = "PocetnaBezIntro.html"
  });
  
  
  
  $("#autoMehanika").click(function(){
    window.open("AutoMehanika.html","_self");
  });
  
  
  $(function(){
    $("#divONama").click(function(){
      window.open("oNama.html","_self");
    });
    
  })
  
  $("#autoLimarija").click(function(){
    window.open("AutoLimarija.html","_self");
  });
  
  $("#autoElektrika").click(function(){
    window.open("AutoElektrika.html","_self");
  });