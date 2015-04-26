jQuery(function($){

	//set portfolio item height based on col width
	var aPerfectCircle = function(item) {
		var w = $(item).width() + 30;
		$(item).css('height', w);
	}

	//Execute after DOM is ready
	$(document).ready(function(){

		//Execute when window is resized as well as when DOM loads
		$(window).resize(function(){

			aPerfectCircle('.circle');

		}).resize();

	});
})