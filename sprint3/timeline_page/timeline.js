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
           commentsHtml += '<div class="card my-5"><div class="card-body">'+
           '<img src="https://via.placeholder.com/150x150" alt="image" class="personal-image"/>'+
           '<div class=" card comment w-75 float-end"> <div class="card-header">'+
           '<h3 class="card-title "><a href="">' + data[i].user +'</a></h3></div>'+
           '<div class="card-body"><h4 class="card-title"><a href="">'+data[i].name +
           '/a></h4></div><div class="card-footer"><p class="card-text ">'+ data[i].comments+
           '</p></div></div></div></div>';
           $(".personal-image").attr("src", data[i].image);
           $("body").text(commentsHtml);
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