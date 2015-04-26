jQuery(function($){

	//set portfolio item height based on col width
	var aPerfectCircle = function(item) {
		var w = $(item).width() + 30;
		$(item).css('height', w);
	}

	var goToContact = function(tar) {
		$(tar).on('click tap', function(){
			$('html, body').animate({scrollTop:$(document).height()}, 500);
		});
	}

	//Execute after DOM is ready
	$(document).ready(function(){
		
		goToContact('#nav-contact');

		//Execute when window is resized as well as when DOM loads
		$(window).resize(function(){

			aPerfectCircle('.circle');

		}).resize();

	});
})