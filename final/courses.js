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
            var desc = ""
            if(data[i].code == code){
                desc += "Description: "
                $(".code").text(data[i].code);
                $(".name").text(data[i].name);
                $(".lecturer").text("Lexturer: "+data[i].lecturer);
                $(".term").text("Term: "+data[i].term);
                $(".meeting").text("Meeting Time: "+data[i].meeting_Time);
                $(".expected").text("Expected Grade: "+data[i].expected_Grade);
                for(i = 0; i<data[i].description.length;i++){
                    desc +=+data[i].description[i]+", ";
                    
                }
                desc+="was told";
                $(".description").text(desc);
            }
        }
    }

});