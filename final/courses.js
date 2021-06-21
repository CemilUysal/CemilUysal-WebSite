$(function(){   
    var code="";
    $(".lesson").click(function(){
        code = $(this).text();
        
            var ourRequest = new XMLHttpRequest();
            
            ourRequest.open("GET","https://cemiluysal.herokuapp.com/final/courses.json");
            ourRequest.onload = function(){
                var ourData = JSON.parse(ourRequest.responseText);
                renderHtml(ourData);
            };
            ourRequest.send();
 
        
    });
    function renderHtml(data){
        
        for(i = 0; i<data.length;i++){
            if(data[i].code == code){
                $(".code").text = data[i].code;
                $(".name").text = data[i].name;
                $(".lecturer").text=data[i].lecturer;
            }
        }
    }

});