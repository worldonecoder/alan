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

		exeAnim('#linkedin','hover spun','i');
		exeAnim('.circle','hover','.circle-caption, .project, .role');
		toolTip('.prompt','.choice');
		

		//Execute when window is resized as well as when DOM loads
		$(window).resize(function(){

			aPerfectCircle('.circle');

			bsBools();

			xScroll($('#viewport'),$(window).width(),$('.view'),$('.circle'),$('nav > #nav-portfolio'),$('.next-project'),$('.prev-project'));

		}).resize();

	});
})