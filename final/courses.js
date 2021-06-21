$(function(){   
    var code="";
    // every list button have class="lesson"
    
    $(".lesson").click(function(){
        //they keep own class code for value ex. value="CENG311"
        code = $(this).val();
        
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
                $(".code").text = data[i].code;
                $(".name").text = data[i].name;
                $(".lecturer").text=data[i].lecturer;
            }
        }
    }

});