jQuery(function($){

	//set portfolio item height based on col width
	var aPerfectCircle = function(item) {
		var w = $(item).width() + 30;
		$(item).css('height', w);
	}

	//Scroll to page top
	var goToTop = function(tar) {
		$(tar).on('click tap', function(){
			$('html, body').animate({scrollTop:0}, 500);
		});
	}

	//Scroll to page bottom (where contact form is)
	var goToContact = function(tar) {
		$(tar).on('click tap', function(){
			$('html, body').animate({scrollTop:$(document).height()}, 500);
		});
	}

	//Run Hover Effects
	var exeAnim = function(el, trig, child) {
		$(el).hoverIntent(function(){
			$(this).addClass(trig);
			$(this).find(child).addClass(trig);
		}, function(){
			$(this).removeClass(trig);
			$(this).find(child).removeClass(trig);
		});
	}

	var bsBools = function() {
		xs = false;
		sm = false;
		md = false;
		lg = false;
		var w = $(window).width();
		
		if(w < 768) {
			xs = true;
			sm = false;
			md = false;
			lg = false;
		}
		else if(w < 992 && w >= 768) {
			xs = true;
			sm = true;
			md = false;
			lg = false;
		}
		else if(w < 1199 && w >= 993) {
			xs = true;
			sm = true;
			md = true;
			lg = false;
		}
		else {
			xs = true;
			sm = true;
			md = true;
			lg = true;			
		}
		//test: console.log('bs bool variables are:' + ' ' + xs + ',' + sm + ',' + md + ',' + lg);
	}

	var toggle = function() {
		if(lg === true) {

		}
		else if(md === true) {

		}
		else if(sm === true) {

		}
		else {

		}
	}

	var toolTip = function(x,i){
		$(i).hoverIntent(function(){
			if($(this).hasClass('website')) {
				$(x).text('Go To The Website');
			}
			else if($(this).hasClass('learn')) {
				$(x).text('More About Project');
			}
		},function(){
			$(x).text('');
		});
	}

	//Execute after DOM is ready
	$(document).ready(function(){
		
		goToContact('#nav-contact');

		exeAnim('#linkedin','hover spun','i');
		exeAnim('.circle','hover','.circle-caption, .project, .role');
		toolTip('.prompt','.choice')

		//Execute when window is resized as well as when DOM loads
		$(window).resize(function(){

			aPerfectCircle('.circle');



			bsBools();

		}).resize();

	});
})