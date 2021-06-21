$(function(){   
    var code="";
    $(".lesson").click(function(){
        code = $(this).text();
        
            var ourRequest = new XMLHttpRequest();
            
            ourRequest.open("GET","courses.json");
            ourRequest.onload = function(){
                var ourData = JSON.parse(ourRequest.responseText);
                renderHtml(ourData);
            };
            ourRequest.send();
 
        
    });
    function renderHtml(data){
        
        for(i = 0; i<data.length;i++){
            if(data[i].code == code){
                alert(data[i].name)
            }
        }

        $(".slider-bar").fadeOut(500, function(){
			    $(".book-img").attr("src",imageUrl);
			    $(".slider-bar").fadeIn(800);
		    });
    }

});