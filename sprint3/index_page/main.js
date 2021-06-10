$(function(){
    
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
      $( "#tags" ).autocomplete({
        
        source: availableTags
      });
      $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $(".backtotop").fadeIn();
        }
        else{
            $(".backtotop").fadeOut();
        }
    });
    $(".backtotop").click(function(){
        $("html, body").animate({scrollTop:0},600);
        return false;
    });

});