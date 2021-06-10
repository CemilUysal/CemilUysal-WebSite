$(function(){
    var comments="";
    var ourRequest = new XMLHttpRequest();
            
    ourRequest.open("GET","../books_page/books-api.php");
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHtml(ourData);
    };
    ourRequest.send();
    function renderHtml(data){
        var changingphoto = "";
        for(i = 0; i<data.length;i++){
            changingphoto = "#series" + (i+1)+" ";
            $(changingphoto + "img").attr("src",data[i].image);
            $(changingphoto + ".series-header .series-title").text(data[i].name);
        }
    }
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
        
        $(cardId + " .series-footer .fa-star").click(function(){
            $(cardId+ " .comments").val(comments);
            $(cardId+" .comments").show("slide",500);
            
        });
        
        
    });
    
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
       
        
        
    });
    
 
    
});