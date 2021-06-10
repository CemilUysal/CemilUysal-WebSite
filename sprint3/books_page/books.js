
$(function(){   
    var booktype="";
    
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
    $(".book").click(function(){
        booktype = $(this).text();
        
            var ourRequest = new XMLHttpRequest();
            
            ourRequest.open("GET","books-api.php");
            ourRequest.onload = function(){
                var ourData = JSON.parse(ourRequest.responseText);
                renderHtml(ourData);
            };
            ourRequest.send();
 
        
    });
    function renderHtml(data){
        
        for(i = 0; i<data.length;i++){
            if(data[i].type == booktype){
                var imageUrl = data[i].image;
            }
        }

        $(".slider-bar").fadeOut(500, function(){
			    $(".book-img").attr("src",imageUrl);
			    $(".slider-bar").fadeIn(800);
		    });
    }

});