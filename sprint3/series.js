$(function(){
    
    $(".series").mouseover(function(){
        var cardId = "";
        var cardId = "#"+$(this).attr("id");
        $(cardId + " #s5").click(function(){
            $(cardId + " .fa-star").css("color", "white");
            $(this).css("color","red");
            $( cardId+" #s1").css("color", "red");
            $( cardId+" #s2").css("color", "red");
            $( cardId+" #s3").css("color", "red");
            $( cardId+" #s4").css("color", "red");
        });
        $(cardId+" #s1").click(function(){
            $(cardId + " .fa-star").css("color", "white");
            $(this).css("color","red");
        });
        $(cardId + " #s2").click(function(){
            $(cardId + " .fa-star").css("color", "white");
            $(this).css("color","red");
            $( cardId+" #s1").css("color", "red");
        });
        $(cardId + " #s3").click(function(){
            $(cardId + " .fa-star").css("color", "white");
            $(this).css("color","red");
            $( cardId+" #s1").css("color", "red");
            $( cardId+" #s2").css("color", "red");
        });
        $(cardId + " .series-footer #s4").click(function(){
            $(cardId + " .fa-star").css("color", "white");
            $(this).css("color","red");
            $( cardId+" #s1").css("color", "red");
            $( cardId+" #s2").css("color", "red");
            $( cardId+" #s3").css("color", "red");
            
        });
        
        
        
    });
    var comments="";
    $(".series").mouseover(function(){
        var cardId = "";
        cardId = "#"+$(this).attr("id");
        $(".comments").mouseover(function(){
            
            commentsId= "#"+$(this).attr("id");
            $(".comments-button").click(function(){
                
                comments = $(cardId+ " .comments").val();
                $(cardId+" " +commentsId).hide("fold",500);
            });
        });
       
        $(cardId + " .series-footer .fa-star").click(function(){
            $(cardId+ " .comments").val(comments);
            $(cardId+" .comments").show("slide",500);
            
        });
        
    });
    
    
    
});