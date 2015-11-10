$(document).ready(function(){
	var timer, cnt = 0;
	
	var images=['images/dude-slider/spot1.jpg',
	'images/dude-slider/spot2.jpg',
	'images/dude-slider/spot3.jpg',
	'images/dude-slider/spot4.jpg',
	'images/dude-slider/spot5.jpg',
	'images/dude-slider/spot6.jpg']

		var t = $('#slider');

		// start a new timer
		timer = setInterval(function() {

		  // periodically change the src
		  t.attr('src', images[cnt+1]);

		  // and adjust the counter
		  cnt = ( cnt + 1 ) % 11; // 0, 1, 2

		}, 1000); // <- 1000ms = 1s
});

	
