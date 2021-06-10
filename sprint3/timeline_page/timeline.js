$(document).ready(function(){
    var commentsHtml = "";
    var ourRequest = new XMLHttpRequest();     
    ourRequest.open("GET","https://cemiluysal.herokuapp.com/sprint3/timeline_page/timeline-api.php");
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHtml(ourData);
    };
    ourRequest.send();
    function renderHtml(data){
        for(i = 0 ; i<data.length; i++){
            var cardID = "card" + i;
            $("body").append('<div class="card my-5" > </div>');
            $(".card").prepend('<p>Cemil</p>');
            $()
        }
    }
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