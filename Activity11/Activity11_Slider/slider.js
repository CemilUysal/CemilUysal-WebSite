$(document).ready(function() {

    $("#slider").bxSlider({
		auto: true,
		randomStart: true,
		speed: 3000,
		minSlides: 1,
		maxSlides: 1,
		slideWidth: 250,
		slideMargin: 10,
		pager: true,
		pagerType: 'short',
		pagerSelector : '#pager'
	});

});