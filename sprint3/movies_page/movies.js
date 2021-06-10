$(function(){
    var ourRequest = new XMLHttpRequest();
            
    ourRequest.open("GET","../books_page/books-api.php");
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHtml(ourData);
    };
    function renderHtml(data){
        var changingphoto = "";
        for(i = 0; i<data.length;i++){
            changingphoto = "#movies" + (i+1)+" ";
            $(changingphoto + "img").attr("src",data[i].image);
            $(changingphoto + ".movies-header .text-center").text(data[i].name);
        }
    }
    ourRequest.send();
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        margin:10,
        responsiveClass:true,
        lazyLoad: true,
        video: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            900:{
                items:5,
                nav:true,
                loop:true
            }
        }
    });
    
    $(".movies").mouseover(function(){
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
        $(cardId + " #s4").click(function(){
            $(cardId + " .fa-star").css("color", "white");
            $(this).css("color","red");
            $( cardId+" #s1").css("color", "red");
            $( cardId+" #s2").css("color", "red");
            $( cardId+" #s3").css("color", "red");
        });
        
    });
    
    

});