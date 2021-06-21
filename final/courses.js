$(document).ready(function() {

	var cities = ["ankara", "izmir", "istanbul", "konya", "edirne", "samsun", "bursa", "trabzon"]; //Collection of words 

	var selection = Math.random()*cities.length;  	// Selecting the target word from the collection

	var word = cities[Math.floor(selection)]; 		// Casting to an int value

	var lives = 5; 									// Number of tries we have

	$('#mylives').html("You have " + lives + " lives left"); 

	for(var i = 0; i<word.length;i++) // Displaying _ character for each unknown letter in the target word

	{

		$('#theword').append("_ ");

	}
    $("#guess").click(function(){
        alert("tıkladın");
    });

});

