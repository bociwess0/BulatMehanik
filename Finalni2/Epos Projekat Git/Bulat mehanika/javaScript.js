$("#nastavite").click(function(){
    $("#divFade").fadeOut(2000);
    $("#dobrodosli").fadeOut(2000);
    $("#nastavite").fadeOut(2000);
    $("#divIza").fadeOut(2000);
    $("#izlaz").fadeOut(2000);
    $("#divPocetne").show(2000);
    
});

$("#izlaz").click(function(){
    window.close();
});


$(function(){
  $("#btnUkratkoVise").hover(function(){
    $(this).animate({'width':'120px', 'background-color':'#f0f1f2'},500);
    $("#arrow3").show(500).animate({'left':'5px'});
  }, function(){
    $(this).animate({'width':'100px','background-color':'transparent'},500);
    $("#arrow3").hide(500).animate({'left':'5px'});
  });
});


$(function(){
  $("#btnKontakt").hover(function(){
    $(this).animate({'width':'350px', 'background-color':'#f0f1f2'},500);
    $("#arrow2").show(500).animate({'left':'5px'});
  }, function(){
    $(this).animate({'width':'330px','background-color':'transparent'},500);
   $("#arrow2").hide(500).animate({'left':'5px'});
  });
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
  $(".par,a").hover(function(){
    $(this).animate({'color':'#8e0d0d;'},10);
  },function(){
    $(this).animate({'color':'#2e2929;'},10);
  });
});

$(function(){
  $("#autoElektrika").hover(function(){
    $(this).animate({'background-color':'#f3f3f3'});
  },function(){
    $(this).animate({'background-color':'white'});
  });
});

$("#logo").click(function(){
  window.open("PocetnaBezIntro.html","_self");
});

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


$(function(){
  $("#btnDetaljnije1").hover(function(){
    $(this).animate({'width':'230px', 'background-color':'#f0f1f2'},500);
    $("#arrow1").show(500).animate({'left':'5px'});
  }, function(){
    $(this).animate({'width':'200px','background-color':'transparent'},500);
   $("#arrow1").hide(500).animate({'left':'5px'});
  });
});

$(function(){
  $("#btnDetaljnije2").hover(function(){
    $(this).animate({'width':'230px', 'background-color':'#f0f1f2'},500);
    $("#arrow2").show(500).animate({'left':'5px'});
  }, function(){
    $(this).animate({'width':'200px','background-color':'transparent'},500);
   $("#arrow2").hide(500).animate({'left':'5px'});
  });
});

$(function(){
  $("#btnDetaljnije3").hover(function(){
    $(this).animate({'width':'230px', 'background-color':'#f0f1f2'},500);
    $("#arrow3").show(500).animate({'left':'5px'});
  }, function(){
    $(this).animate({'width':'200px','background-color':'transparent'},500);
   $("#arrow3").hide(500).animate({'left':'5px'});
  });
});

$("#btnDetaljnije1").click(function(){
    if($(this).text()=='DETALJNIJE'){
      $(".1").fadeIn(700);
      $(this).text('UKRATKO')
      $("#arrow1").show(500).animate({'left':'5px'});
    }
    else if(($(this).text()!='DETALJNIJE') && ($(this).text()!='UKRATKO') ){
      $(".1").fadeIn(700);
      $(this).text('UKRATKO')
      $("#arrow1").show(500).animate({'left':'5px'});
    }
    else{
      $(this).text('DETALJNIJE');
      $(".1").fadeOut(700);
      $("#arrow1").show(500).animate({'left':'5px'});
    }
});


$("#btnDetaljnije2").click(function(){
  if($(this).text()=='DETALJNIJE'){
    $(".2").fadeIn(700);
    $(this).text('UKRATKO')
    $("#arrow2").show(500).animate({'left':'5px'});
  }
  else if(($(this).text()!='DETALJNIJE') && ($(this).text()!='UKRATKO') ){
    $(".2").fadeIn(700);
    $(this).text('UKRATKO')
    $("#arrow2").show(500).animate({'left':'5px'});
  }
  else{
    $(this).text('DETALJNIJE');
    $(".2").fadeOut(700);
    $("#arrow2").show(500).animate({'left':'5px'});
  }
});

$("#btnDetaljnije3").click(function(){
  if($(this).text()=='DETALJNIJE'){
    $(".3").fadeIn(700);
    $(this).text('UKRATKO')
    $("#arrow3").show(500).animate({'left':'5px'});
  }
  else if(($(this).text()!='DETALJNIJE') && ($(this).text()!='UKRATKO') ){
    $(".3").fadeIn(700);
    $(this).text('UKRATKO')
    $("#arrow3").show(500).animate({'left':'5px'});
  }
  else{
    $(this).text('DETALJNIJE');
    $(".3").fadeOut(700);
    $("#arrow3").show(500).animate({'left':'5px'});
  }
});

$(function(){
  $("#dugmeForma").click(function(){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(document.getElementById('ime').value=="" || document.getElementById('prezime').value=="" || document.getElementById('email').value=="" || document.getElementById('naslov').value=="" ||
        document.getElementById('poruka').value==""){
          $("#validationText").text('Polja ne smeju biti prazna!').css({"color":"#8e0d0d;"});
    }
    else if(!(document.getElementById('email').value.match(mailformat))){
      $("#validationText").text('Email nije validan!').css({"color":"#8e0d0d;"});
    }   
    else{
      document.getElementById('ime').value="";
      document.getElementById('prezime').value="";
      document.getElementById('email').value="";
      document.getElementById('naslov').value="";
      document.getElementById('poruka').value="";
      $("#validationText").text('Poruka je uspešno poslata!').css({"color":"#11732b"});
      
    }
  });
});

