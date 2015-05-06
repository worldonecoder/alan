jQuery(function($){

	var pos = 0;

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

	var mobileLinks = function() {
		$('.circle').on('tap click', function(e){
			if($(window).width() < 768) {
				var url = $(this).find('.website').attr('href');
				window.open(url);
				e.stopPropagation();
			}
		});
	}

	var toggleT3 = function() {
		$(window).scroll(function() {
			if($(this).scrollTop() > 1000) {
				$('#to-the-top').fadeIn(300);
			}
			else {
				$('#to-the-top').fadeOut(300);
			}
		}).scroll()
	}

	//run horizontal movement - dependencies: jquery 8+, bootstrap css grid
	var xScroll = function(viewport,winWidth,view,circle,backHome,next,prev) {
		//xScroll's global vars
		var margin = ((winWidth - view.width()) / 2) - 15;
		var toTop  = function(){$('html, body').animate({scrollTop:0})};
		//center the view
		var calcMargins = function() {
			console.log('View\'s left margin is:' + ' ' + margin);
			if(winWidth > 536) {
				view.css({'margin-left': margin});
			}
			else {
				view.css({'margin-left': 'auto'})
			}
		}
		calcMargins();

		//set viewport width to total of all of the views and thier margins
		var buildViewPort = function(){
			if(winWidth > 767) {
				var i     = 0;
				view.each(function(){
					i += winWidth;
				});
				console.log('total viewport width is:' + ' ' + i);
				viewport.width(i);
			}
			else {
				viewport.width('100%');
			}
		}
		buildViewPort();

		//Assign each portfolio item a unique id so that the appropriate view's position in the viewport can be found
		var assignID = function(){
			var id = 1;
			circle.each(function(){
				$(this).attr('id',id);
				id += 1;
			});
		}
		assignID();

		//Send Viewport back to portfolio
		backHome.on('click tap',function(){
			viewport.css('margin-left',0);
			toTop();
			pos = 0;
		});

		//Run xScroll Horizontal (non-smartphone views)
		if(winWidth > 767) {
		//Set scrolls from portfolio view to associated int view
			var scrollEach  = winWidth - margin;
			console.log('total item scroll is' + ' ' + scrollEach);

			var goToProject = function(){
				var n      = parseInt($(this).parents('.circle').attr('id'));
				var scroll = scrollEach * n; 
				viewport.css('margin-left', -scroll);
				toTop();
				pos = n;
				console.log(pos);
			};

			circle.find('.choice').on('click tap',goToProject);

			var resetView = function() {
				viewport.css('margin-left', -scrollEach * pos);
			}
			resetView();
			
		//Go to prev and next views
			var prevNext = function() {
				next.on('click tap',function(e){
					var currentPos = viewport.css('margin-left');
					viewport.css('margin-left', parseInt(currentPos) - scrollEach);
					e.stopPropagation();
					pos = pos + 1;
					console.log(pos);
				});
				prev.on('click tap',function(e){
					var currentPos = viewport.css('margin-left');
					viewport.css('margin-left', parseInt(currentPos) + scrollEach);
					e.stopPropagation();
					pos = pos - 1;
					console.log(pos);
				});
				view.on('swipeleft',function(){
					$(this).find(next).trigger('click');
				});
				view.on('swiperight',function(){
					$(this).find(prev).trigger('click');
				});
			}
			prevNext()

		//Set viewport when screensize is changed
		}
		else {
			viewport.css('margin-left', 0);
		}

	}

	//Execute after DOM is ready
	$(document).ready(function(){
		
		goToContact('#nav-contact');
		goToContact('.contact-alan');
		mobileLinks();
		exeAnim('#linkedin','hover spun','i');
		exeAnim('.circle','hover','.circle-caption, .project, .role');
		toolTip('.prompt','.choice');
		

		//Execute when window is resized as well as when DOM loads
		$(window).resize(function(){

			toggleT3();

			aPerfectCircle('.circle');

			xScroll($('#viewport'),$(window).width(),$('.view'),$('.circle'),$('nav > #nav-portfolio, #logo > a, #to-the-top'),$('.next-project'),$('.prev-project'));

		}).resize();

	});
})