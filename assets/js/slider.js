$(document).ready(function(){
	var timer, cnt = 0;
	
	var images=['images/dude-slider/spot1.jpg',
	'images/dude-slider/spot2.jpg',
	'images/dude-slider/spot3.jpg',
	'images/dude-slider/spot4.jpg',
	'images/dude-slider/spot5.jpg',
	'images/dude-slider/spot6.jpg'];

		var t = $('#four');

		// start a new timer
		timer = setInterval(function() {
		t.animate({opacity: 0}, 'slow', function() {
        $(this)
            .css({'background-image': 'url(' + images[cnt] + ')' })
            .animate({opacity: 1});
		});
		  // periodically change the src
		  //alert(t.attr('src'));
		  // and adjust the counter
		  cnt = ( cnt + 1 ) % 5; 

		}, 500); // <- 1000ms = 1s
});

	
